import './Sidebar.css';
import { SidebarData, TeacherSideBar, AdminSideBar } from './SidebarData';
import logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react';
import useContextGetter from '../../hooks/useContextGetter';
import { Link, useLocation } from 'react-router-dom';


function Sidebar() {
    let location = useLocation()
    const auth = useContextGetter();
    // const USER = auth.user;
    const USER = JSON.parse(localStorage.getItem('user'));
    // const USER = localStorage.getItem('user');
    // console.log(USER)
    const [user, setUser] = useState({admin: {}, student: {}, teacher: {}})
    
    useEffect(()=>{
        setUser({...user, admin: USER.user.admin, student: USER.user.student, teacher: USER.user.teacher});
    }, [ USER.user.admin, USER.user.student, USER.user.teacher])

    // useEffect(()=>{
    //     setUser({...user, admin: USER.user.admin, student: USER.user.student, teacher: USER.user.teacher});
    // }, [ USER.user.admin, USER.user.student, USER.user.teacher])

  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" />
        <ul className='sidebar-list list'>
            {user.teacher.isTeacher ? (TeacherSideBar.map((val, key) => {
                return (
                    <li 
                        className='list-item'
                        id={location.pathname === val.link ? 'active': ''}
                        key={key} 
                    >
                    
                    <Link to={val.link}>{val.title}</Link>
                    </li>
                    )
                })) : (user.student.isStudent) ? (SidebarData.map((val, key) => {
                  return (
                      <li 
                          className='list-item'
                          id={location.pathname === val.link ? 'active': ''}
                          key={key} 
                        >
                      
                      <Link to={val.link}>{val.title}</Link>
                      </li>
                    )
                  })) : (AdminSideBar.map((val, key) => {
                    return (
                        <li 
                            className='list-item item'
                            id={location.pathname === val.link ? 'active': ''}
                            key={key} 
                        >
                        <Link to={val.link}>{val.title}</Link>
                        </li>
                      )
                  }))}
        </ul>
    </div>
  )
}

export default Sidebar