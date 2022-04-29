import Sidebar from '../../components/sidebar/Sidebar';
import Progress from './Progress';
// import weeklyProgress from '../../assets/student-progress.PNG'
import './StudentDashboard.css'
import interhouse from '../../assets/interhouse.svg'
import pta from '../../assets/pta.svg'
import exam from '../../assets/exam.svg'

function StudentDashboard() {
  return (    
    <div className='contain'>
      <Sidebar />
      <section className="student-dashboard">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="welcome-section">
                <h1 className="header">Hello Precious,</h1>
                <div className="welcome-text">
                  <p>welcome to today's session.</p>
                  <p>Education is the Key to the future so keep on learning.</p>
                </div>
              </div>
              <div className="progress-cards col-12">
                <div className="row d-flex flex-row flex-nowrap overflow-auto w-100">
                  <div className="col-lg-6 col-sm-12">
                    <div className="card">
                      <h1 className="card-header">ICT</h1>
                      <div className="card-body">
                        <p className="card-text">Software Engineering Part 1</p>
                        <div className="card-info d-flex mt-5 col-lg-12 col-md-10 col-sm-6">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5 className='position'>Teacher</h5>
                            <h5 className='name'>Mr David</h5>
                          </div>
                          <div className=" done col-lg-6 col-md-6 col-sm-12">
                            <Progress done='80' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="card">
                      <h1 className="card-header">English</h1>
                      <div className="card-body">
                        <p className="card-text">Essay and Summary writing</p>
                        <div className="card-info d-flex mt-5 col-lg-12 col-md-10 col-sm-6">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5 className='position'>Teacher</h5>
                            <h5 className='name'>Mr David</h5>
                          </div>
                          <div className=" done col-lg-6 col-md-6 col-sm-12">
                            <Progress done='80' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="card">
                      <h1 className="card-header">Mathematics</h1>
                      <div className="card-body">
                        <p className="card-text">Integral calculus 1</p>
                        <div className="card-info d-flex mt-5 col-lg-12 col-md-10 col-sm-6">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <h5 className='position'>Teacher</h5>
                            <h5 className='name'>Mr John</h5>
                          </div>
                          <div className=" done col-lg-6 col-md-6 col-sm-12">
                            <Progress done='80' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="card">
                      <h1 className="card-header">Agric</h1>
                      <div className="card-body">
                        <p className="card-text">Integral calculus 1</p>
                        <div className="card-info d-flex col-lg-12 col-md-10 col-sm-12">
                          <div className="col-lg-6 col-md-7 col-sm-12">
                            <h5 className='position'>Teacher</h5>
                            <h5 className='name'>Mr John</h5>
                          </div>
                          <div className=" done col-lg-6 col-md-5 col-sm-12">
                            <Progress done='80' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section3 mt-4 row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <div className="col-lg-6 col-sm-12 total-improvement">        
                      <h3 className='header'>Total improvement</h3>
                    <div className="graph">
                      <div className="ui-widget">
                        <div className="ui-value">Average 60%</div>
                      </div>
                      <ul className='mt-5'> 
                        <li><i className="fa fa-circle ict" aria-hidden="true"></i> Ict</li>
                        <li><i className="fa fa-circle eng" aria-hidden="true"></i> English</li>
                        <li><i className="fa fa-circle maths" aria-hidden="true"></i> Mathematics</li>
                        <li><i className="fa fa-circle arts" aria-hidden="true"></i> Arts</li>
                        <li><i className="fa fa-circle civic" aria-hidden="true"></i> Civic</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 feed-box">
                    <div className="col-lg-6 col-sm-12 feed">
                      <h3 className='text-capitalize feed-header'>important feed</h3>
                        <div className="feed-content">
                          <h4 className='feed-content-header'> <i className="fa fa-circle" aria-hidden="true"></i> Introduction to Javascript </h4>
                          <p className='feed-content-text'> Don't forget to download Vscode </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="aside col-lg-5 col-md-12 col-sm-12">
              <div className="d-flex search-box-group">
                <div className="search-box">
                  <div className="group">
                    <i className="fa fa-search" aria-hidden="true"> </i> 
                    <input type="search" name="" id="search" placeholder='Search' className='search'/>
                  </div> 
                </div>
                  <i className="fa fa-bell mt-4 mx-3 text-danger" aria-hidden="true"> </i>
              </div>
                <div className="schedule my-5">
                  <div className="content d-flex justify-content-between my-5">
                    <h2 className="main-header">Schedule</h2>
                    <p><a href="www.google.com">View all</a></p>
                  </div>
                  <div className="boxes row">
                    <div className="box">
                      <h3 className="box-header">Software Engineering</h3>
                      <div className="sub d-flex justify-content-between">
                        <h4 className="time">08:00 - 09: 30</h4>
                        <h4>|</h4>
                        <h4 className="name">Mr David</h4>
                      </div>
                    </div>
                    <div className="box">
                      <h3 className="box-header">Essay Writing</h3>
                      <div className="sub d-flex justify-content-between">
                        <h4 className="time">10:00 - 10: 30</h4>
                        <h4>|</h4>
                        <h4 className="name">Miss Tina</h4>
                      </div>
                    </div>
                    <div className="box">
                      <h3 className="box-header">Calculus 1</h3>
                      <div className="sub d-flex justify-content-between">
                        <h4 className="time">11:00 - 12: 30</h4>
                        <h4>|</h4>
                        <h4 className="name">Mr John</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="notice-board">
                  <h2 className='main-header my-5'>Notice Board</h2>
                  <div className="row">
                    <div className="board d-flex justify-content-around">
                      <img src={interhouse} alt="interhouse competition" />
                      <div className="content">
                        <h4 className="header">Interhouse Competition</h4>
                        <p className="date">Wednesday 23rd April, 2022.</p>
                      </div>
                    </div>
                    <div className="board d-flex justify-content-around">
                      <img src={pta} alt="pta" />
                      <div className="content">
                        <h4 className="header">PTA</h4>
                        <p className="date">Friday 25th April, 2022.</p>
                      </div>
                    </div>
                    <div className="board d-flex justify-content-around">
                      <img src={exam} alt="examination" />
                      <div className="content">
                        <h4 className="header">Examination</h4>
                        <p className="date">Monday 15th July, 2022.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentDashboard; 