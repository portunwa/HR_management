import React from 'react';

import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';



//css
import '../Forms.css';
import './Viewtask.css';

//components
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import EmployeeRow from '../../../components/EmployeeRow';


const data = {
  Id: "E000312",
  Name: "Meaw sean",
  Position: "HR Admin",
  Department: "Human Resource"
}



const Header = () => {
   return(
    <>
      <div className = "header-content">
        <div className = "header-content-ID">ID</div>
        <div className = "header-content-Name">Name</div>
        <div className = "header-content-Position">Position</div>
        <div className = "header-content-Department">Department</div>
      </div>
      <hr className="solid"></hr>
    </>

   )
}

const Viewtask = () => {
  const [add, setAdd] = useState(false);

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='form-container'>
            <div className = "viewtask-task-bg">
                <h5>Task</h5>
                <div className = "task-desc-content">
                    <h1>T000001</h1>
                    <p>Description: Collect the data from the user. Analyze and report to the head department before the end of the month.</p>
                    <p>Deadline: 16/04/2022</p>
                    <p>Status: Active</p>
                </div>
            </div>
            <div className = "viewtask-supervisor-bg">
                <h5>Supervisor</h5>
                <Header />
                <EmployeeRow info = {data}/>
            </div>
            <div className = "viewtask-members-bg">
                <h5>Members</h5>
                <Header />
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <EmployeeRow info = {data}/>
                <Button variant="success" onClick ={() => setAdd(!add)}>Add</Button>{' '}
                {add && 
                  <div className='form'>
                    <Form> 
                      <Form.Group className='mb-3' controlId="formOTRate">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control className="inputform" type="text" placeholder="Enter Employee ID" />
                      </Form.Group>
                      <Button variant="success" type="submit">
                          Submit
                      </Button>
                    </Form>
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Viewtask