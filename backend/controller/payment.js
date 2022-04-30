const pool = require("../config/db");


const getPaymentByID = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT s.EmployeeID, s.fname, s.lname, s.BaseSalary, IFNULL(s.totalDeduction,0) AS totalDeduction,
                            IFNULL(ROUND(SUM(HOUR(SUBTIME(o.end_time, o.start_time)))*s.OTRate*((s.BaseSalary/30)/7),2),0) AS OvertimePayment,
                            (s.BaseSalary + IFNULL(ROUND(SUM(HOUR(SUBTIME(o.end_time, o.start_time)))*s.OTRate*((s.BaseSalary/30)/7),2),0) - IFNULL(s.totalDeduction,0)) AS TotalAmount
                            FROM ot o
                            RIGHT JOIN (SELECT e.EmployeeID, e.fname, e.lname, SUM(d.Amount) AS totalDeduction, r.BaseSalary, r.OTrate, d.datetime
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                                            LEFT JOIN deduction d ON p.EmployeeID = d.EmployeeID
                                            AND MONTH(d.datetime) = MONTH(CURRENT_DATE) AND YEAR(d.datetime) = YEAR(CURRENT_DATE)
                                            INNER JOIN role r ON p.RoleID = r.RoleID
                                            GROUP BY EmployeeID
                                            ORDER BY EmployeeID
                            ) s
                            ON o.EmployeeID = s.EmployeeID 
                            AND MONTH(o.otdate) = MONTH(CURRENT_DATE) AND YEAR(o.otdate) = YEAR(CURRENT_DATE)
                            WHERE s.EmployeeID = ?`,
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`PAYMENT of EMPLOYEE ID: ${req.params.id}`);
   });
}



module.exports =  { getPaymentByID };