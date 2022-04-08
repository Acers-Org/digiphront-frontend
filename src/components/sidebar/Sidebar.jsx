import './Sidebar.css';
import { SidebarData } from './SidebarData';
import logo from '../../assets/logo.svg'


function Sidebar() {
  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" />
        <ul className= 'sidebar-list'>
            {SidebarData.map((val, key) => {
                return (
                    <li 
                        className='list-item'
                        id={window.location.pathname === val.link ? 'active': ''}
                        key={key} 
                        onClick={() => {window.location.pathname = val.link}}>
                    
                    <div>{val.title}</div>
                    </li>
                    )
                })}
        </ul>
    </div>

  )
}

export default Sidebar