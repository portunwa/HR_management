import React from 'react'


import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar'; 
import Homecard from '../../../components/Homecard';
import './ViewEmployee.css';

import Logo from '../../../assets/img/employee1.jpg';

import { FcOk, FcHighPriority, FcVlc } from 'react-icons/fc';

const data = {
    taskid: 'T000001',
    description: 'Collect the data from the user',
    startdate: '17/04/2022',
    deadline: '09/05/2022'
}

const Header = () => {
    return(
     <>
       <div className = "alltask-header-content">
         <div>TaskID</div>
         <div>Task Description</div>
         <div>Start Date</div>
         <div>Deadline</div>
       </div>
       <hr className="solid"></hr>
     </>
 
    )
 }

 const TaskRow = ({info}) => {
    let navigate = useNavigate();
    return(
      <div className = "alltask-task-content">
        <div className="task-ID">{info.taskid}</div>
        <div className="task-desc">{info.description}</div>
        <div className="task-supervisorID">{info.startdate}</div>
        <div className="task-status">{info.deadline}</div>
        <Button variant="success" onClick={() => navigate(`/viewtask/${info.taskid}`)}>Go</Button>
      </div>
      )
  }


const ViewEmployee = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className = "Viewemployee-all-container">
        <div className ="Viewemployee-top">
            <div className ="Viewemployee-top-left">
                <div className = "viewemployee-img">
                    <img src={Logo} alt='employee1'></img>
                    <p>E000001</p>
                </div>
                <div className ="Viewemployee-top-left-content">
                  <h1>Mr. Meow SEANSEAN</h1>
                  <h5>HR Admin, Human Resource Department</h5>
                  <div className="viewemployee-information">
                    <p>Email: meawsean@mail.kmutt.ac.th</p>
                    <p>Phone: 081-123-4569</p>
                    <p>Recruitment Date: 12/12/2000</p>
                  </div>
                  <Button variant="success">EDIT</Button>
                  <Button variant="success">MORE INFO</Button>
                  
                </div>
            </div>

            <div className ="Viewemployee-top-right">
                <Homecard color='#077777' text='Today Attendance' value = {4} /> 
                <Homecard color='#077777' text='Late' value = {4}/>
                <Homecard color='#077777' text='Absent' value = {4}/>
            </div>
        </div>
        
        <div className = "Viewemployee-bottom">
            <div className='Viewemployee-bottom-left'>
               <h5>TASKS</h5>
                <div className = "Viewemployee-bottom-left-tasks">
                    <div>
                        <div>
                            <Header />
                            <TaskRow info = {data}/>
                            <TaskRow info = {data}/>
                            <TaskRow info = {data}/>
                        </div>
                    </div>
                </div>
                <h5>ATTENDANCE</h5>
                <div className = "Viewemployee-bottom-left-attendance">
                    <div>
                        <div className = "alltask-header-content">
                            <div>12/12/2001</div>
                            <div>13/12/2001</div>
                            <div>14/12/2001</div>
                            <div>15/12/2001</div>
                            <div>16/12/2001</div>
                        </div>
                        <hr className="solid"></hr>
                        <div className= 'attendance-icon'>
                            <div><FcOk /></div>
                            <div><FcHighPriority /></div>
                            <div><FcVlc /></div>
                            <div><FcVlc /></div>
                            <div><FcOk /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "Viewemployee-bottom-right">

            </div>
        </div>
        </div>
    </div>
  )
}

export default ViewEmployee