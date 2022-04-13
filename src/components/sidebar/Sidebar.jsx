import './Sidebar.css';
import { SidebarData, TeacherSideBar, AdminSideBar } from './SidebarData';
import logo from '../../assets/logo.svg'
import { useEffect, useState } from 'react';


function Sidebar() {
    const USER = localStorage.getItem('user')
    const [user, setUser] = useState({admin: {}, student: {}, teacher: {}})

    useEffect(()=>{
        setUser({...user, 
            admin: USER.admin,
            student: USER.student,
            teacher: USER.teacher});
    }, [USER, user])
  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" />
        <ul className='sidebar-list list'>
            {user.teacher.isTeacher ? (TeacherSideBar.map((val, key) => {
                return (
                    <li 
                        className='list-item'
                        id={window.location.pathname === val.link ? 'active': ''}
                        key={key} 
                        onClick={() => {window.location.pathname = val.link}}>
                    
                    <div>{val.title}</div>
                    </li>
                    )
                })) : (user.student.isStudent) ? (SidebarData.map((val, key) => {
                  return (
                      <li 
                          className='list-item'
                          id={window.location.pathname === val.link ? 'active': ''}
                          key={key} 
                          onClick={() => {window.location.pathname = val.link}}>
                      
                      <div>{val.title}</div>
                      </li>
                    )
                  })) : (AdminSideBar.map((val, key) => {
                    return (
                        <li 
                            className='list-item'
                            id={window.location.pathname === val.link ? 'active': ''}
                            key={key} 
                            onClick={() => {window.location.pathname = val.link}}>
                        
                        <div>{val.title}</div>
                        </li>
                      )
                  }))}
        </ul>
    </div>

  )
}

export default Sidebar