import './Sidebar.css';
import { SidebarData, TeacherSideBar } from './SidebarData';
import logo from '../../assets/logo.svg'
import { useEffect, useState } from 'react';


function Sidebar() {
    const USER = JSON.parse(localStorage.getItem('user'))
    const users = ['Teacher', 'Student', 'Admin'];
    const [user, setUser] = useState()

    useEffect(()=>{
        setUser(USER.user);
    }, [USER])
  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" />
        <ul className='sidebar-list list'>
            {user === users[0] ? (TeacherSideBar.map((val, key) => {
                return (
                    <li 
                        className='list-item'
                        id={window.location.pathname === val.link ? 'active': ''}
                        key={key} 
                        onClick={() => {window.location.pathname = val.link}}>
                    
                    <div>{val.title}</div>
                    </li>
                    )
                })) : (SidebarData.map((val, key) => {
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