import './Sidebar.css';
import { SidebarData, TeacherSideBar } from './SidebarData';
import logo from '../../assets/logo.svg'
import { useState } from 'react';


function Sidebar() {
  const [user, setUser] = useState('Student')

  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" />
        <ul className= 'sidebar-list'>
            {user === 'Teacher' ? (TeacherSideBar.map((val, key) => {
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