import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Login() {
   

 

    const [disabled, setDisabled] = useState(true);
     
    const {signIn}=useContext(AuthContext);

    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.from?.pathname || '/';

    useEffect(()=>{

        loadCaptchaEnginge(6); 

    },[])





    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Login successful",
                  showConfirmButton: false,
                  timer: 1500
                });



navigate(from, { replace: true });


            })
            .catch((error) => {
                console.error(error);
            });

    }


    const handleValidateCaptcha = (e) => {

     const  user_captcha_value=e.target.value;
     


     if(validateCaptcha(user_captcha_value)){
        setDisabled(false);
     }

        else{
        setDisabled(true);

    }
}




  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center md:w-1/2  lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
        <form  onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="Write the captcha here" className="input input-bordered" required />
            
           
          </div>
          <div className="form-control mt-6">
             {/* todo: apply disabled  instead of false*/}
            <input disabled={false} className="btn btn-primary"   type="submit" value="Login" />
          </div>
        </form>

        <p><small>New here?<Link to="/signup">Please register</Link></small></p>



      </div>
    </div>
  </div>
  )
}
