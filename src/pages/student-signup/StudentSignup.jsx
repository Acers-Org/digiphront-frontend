import loginImg from '../../assets/student-signup.png';
import Icon from '../../assets/icon.svg'
import '../login/Login.css'
import '../teacher-signup/TeacherSignup.css'
import { Link } from 'react-router-dom';

function StudentSignup() {
  return (
        <section className='login'>
            <div class="container-fluid">
                <div class="row d-flex justify-content-between">
                    <div class="col-md-6 col-sm-12 img-container">
                        <img src={loginImg} alt="Login" className='img-fluid login-img pad'/>
                        <div className="img-text row">
                            <img src={Icon} alt="EduClan Icon" className='img-fluid w-25' />
                            <h2 className='text-white'>Welcome to <span className='edu'>Edu</span><span className='clan'>Clan</span> </h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 m-auto">
                        <form action="" className=' form w-75'>
                            <h1 className="text-center">Create Account</h1>

                            <div className='d-flex justify-content-between'>
                                <div className="row w-50">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="name" name="fname" id="fname" required />
                                </div>
                                <div className="row w-50">
                                <label htmlFor="lname">Last Name</label>
                                <input type="name" name="lname" id="fname" required />
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className="row w-50">
                                    <label htmlFor="class">Class</label>
                                    <select className="form-select" aria-label="Default select example" id="class" required>                                        
                                          <option value=""  disabled selected hidden> grade 1</option>
                                          <option value="grade 1">Grade 1</option>
                                          <option value="grade 2">Grade 2</option>
                                          <option value="grade 3">Grade 3</option>
                                          <option value="grade 4">Grade 4</option>
                                          <option value="grade 5">Grade 5</option>
                                        </select>
                                </div>
                                <div className="row w-50">
                                <label htmlFor="age">Age</label>
                                <select className="form-select" aria-label="Default select example" id="age" required>
                                              <option value="" disabled hidden selected>0 year</option>
                                              <option value="0 year">0 year</option>
                                              <option value="1 year">1 year</option>
                                              <option value="2 years">2 years</option>
                                              <option value="3 years">3 years</option>
                                              <option value="4 years">4 years</option>
                                              <option value="5 years">5 years</option>
                                              <option value="6 years">6 years</option>
                                              <option value="7 years">7 years</option>
                                              <option value="8 years">8 years</option>
                                              <option value="9 years">9 years</option>
                                              <option value="10 years">10 years</option>
                                            </select>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <div className="row w-50">
                                <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" required />
                                </div>
                                <div className="row w-50">
                                <label htmlFor="verifyPassword">New Password</label>
                                    <input type="password" name="password" id="verifyPassword" required />
                                </div>
                            </div>
                           
                            <button className="btn text-uppercase btn-block btn-primary w-100 mt-3">sign up</button>
    
                            <div className="sign-in-options d-flex justify-content-between mt-3">
                                <div className="checkbox">
                                    <input type="checkbox" name="rememberMe" id="rememberMe" value='rememberMe' />
                                    <label htmlFor="rememberMe"> Remember me</label>
                                </div>
                                <h5> <Link to="/login"> Already have an account? <span className='span'>Sign in</span></Link> </h5>
                            </div>
                        </form>
                    </div>
                </div>
            </div>        
        </section>
  )
}

export default StudentSignup