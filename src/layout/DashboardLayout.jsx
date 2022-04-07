import Sidebar from '../components/sidebar/Sidebar';

const DashboardLayout = ({children}) => {
  
  return (
    <Sidebar>
      {children}
    </Sidebar>
    )
}

export default DashboardLayout;