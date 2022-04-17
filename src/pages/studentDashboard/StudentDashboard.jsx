import Sidebar from '../../components/sidebar/Sidebar';
//import Graphs from './Graphs';
import Progress from './Progress';
import weeklyProgress from '../../assets/student-progress.PNG'
import './StudentDashboard.css'

function StudentDashboard() {
  return (    
    <div className='contain'>
      <Sidebar />
      <section className="student-dashboard">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-8 col-md-8 col-sm-12">
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
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {/* <Graphs /> */}
                  <img src={weeklyProgress} alt="Weekly progress" className='w-75 h-75' />                  
                </div>
                <div className="together col-lg-6 col-sm-12">
                  <div className="col-lg-6 col-sm-12 total-improvement">                      
                    {/* <img src={weeklyProgress} alt="Weekly progress" /> */}
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


            <div className="col-lg-4 col-md-4 col-sm-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ut numquam reiciendis dignissimos eum repellat ipsum. Debitis reiciendis dolorem quas, repellat perferendis magni laudantium porro tempora consequuntur, sint dolore voluptatibus.
              <div className="col-5">
                <div className="card h-100 w-100">
                  <h1 className="card-header">ICT</h1>
                  <div className="card-body">
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <Graphs  /> */}
      </section>
    </div>
  )
}

export default StudentDashboard; 