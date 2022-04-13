import Sidebar from '../../components/sidebar/Sidebar';
import Graphs from './Graphs';
import Progress from './Progress';
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
              <div className="progress-cards" >
                <div className="row d-flex flex-row flex-nowrap overflow-auto">
                <div className="col-5">
                  <div className="card h-100 w-100">
                    <h1 className="card-header">ICT</h1>
                    <div className="card-body">
                      <p className="card-text">Software Engineering Part 1</p>

                      <div className="card-info d-flex col mt-5">
                        <div className="col-lg-6 col-md-7 col-sm-12">
                          <h5 className='position'>Teacher</h5>
                          <h5 className='name'>Mr David</h5>
                        </div>
                        <div className=" done col-lg-6 col-md-5 col-sm-12">
                          <Progress done='80' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="card h-100 w-100">
                    <h1 className="card-header">English</h1>
                    <div className="card-body">
                      <p className="card-text">Essay and Summary writing</p>
                      <div className="card-info d-flex col mt-5">
                        <div className="col-lg-6 col-md-7 col-sm-12">
                          <h5 className='position'>Teacher</h5>
                          <h5 className='name'>Mr David</h5>
                        </div>
                        <div className=" done col-lg-6 col-md-5 col-sm-12">
                          <Progress done='80' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="card h-100 w-100">
                    <h1 className="card-header">Mathematics</h1>
                    <div className="card-body">
                      <p className="card-text">Integral calculus 1</p>
                      <div className="card-info d-flex col mt-5">
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
              <div className="section3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Graphs />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12"></div>
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