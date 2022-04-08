import Sidebar from '../../components/sidebar/Sidebar';
import styles from './Teacher.module.scss'


const TeacherDashboard = () => {
  return (
    <div className={styles.teacher}>
        <Sidebar/>
    </div>
  )
}

export default TeacherDashboard;