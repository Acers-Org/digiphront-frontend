import loginImg from '../../assets/login-img.png';
import Icon from '../../assets/icon.svg'
import './Login.css'

function Login() {
  return (
    <section className='login'>
        <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="col-md-6 col-sm-12 img-container">
                    <img src={loginImg} alt="Login" className='img-fluid login-img'/>
                    <div className="img-text row">
                        <img src={Icon} alt="EduClan Icon" className='img-fluid w-25' />
                        <h1 className='text-white'>Welcome to <span className='edu'>Edu</span><span className='clan'>Clan</span> </h1>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 m-auto">
                    <form action="" className=' form w-75'>
                        <div className='d-flex flex-column'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="d-flex flex-column">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" required />
                        </div>
                        <button className="btn text-uppercase btn-block btn-primary w-100 mt-3">sign up</button>

                        <div className="d-flex justify-content-between mt-3">
                            <div className="checkbox">
                                <input type="checkbox" name="rememberMe" id="rememberMe" value='rememberMe' />
                                <label htmlFor="rememberMe"> Remember me</label>
                            </div>
                            <h5> <a href="#" className='text-capitalize'> Forgot password?</a> </h5>
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    </section>
  )
}

export default Login