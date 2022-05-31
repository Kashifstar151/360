import React from 'react'
import  ReCAPTCHA  from 'react-google-recaptcha';
import "./_login.scss"
const Login = () => {

  const reCaptcharef = React.createRef();

  function onChange(value){
    console.log('captcha value',value)
  }
  return (
    <div className="main">
      <section className='section__heading'>
        <div className='section__heading__div'>
          <h1>My Account</h1>
        </div>


        <div className='login'>
          <div className='login__section'>

            <div className='login__section__left'>
              <h2>Login</h2>
              <form method='post' className='form'>
                <label for="Username" className='label__user' >Username or email adress
                  <br></br><input type="text" className='input_user' />
                </label><br></br>
                <label for="password" className='label__user'>Password<br></br>
                  <input type="password" className='input_user' /><br></br>
                </label>
                <button className='btn__login'>Login</button>

              </form>
            </div>
            <div className='login__section__right'>
              <h2>Register</h2>
              <form method='post' className='form'>
                <label for="Username" className='label__user' >Email address
                  <br></br><input type="text" className='input_user' />
                </label><br></br>
                <div className='content'>
                  <p >A link to set a new password will be sent to your email address</p>

                    <div className="g-recaptcha">
                      <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}/>
                        
                    </div>
                  <p>Your personal data will be used to support your experience throughout this website,
                    to manage access to your account, and for other purposes described in our <a href=''>privacy policy</a>
                  </p>
                  <div className='content_chinese'>
                    <p>您的个人数据将用于支持您在本网站的体验，管理您的帐户访问，以及用于我们<a href="">privacy policy</a>中所述的其他目的。</p>
                  </div>
                  <button className='register_btn'>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login