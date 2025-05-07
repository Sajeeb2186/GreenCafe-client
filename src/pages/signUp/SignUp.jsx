
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';


export default function SignUp() {

  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  const {createUser,updateUserProfile}=useContext(AuthContext);
  const navigate=useNavigate();


  const onSubmit = data => {
    console.log(data);
    createUser(data.email,data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log('User profile updated');
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully",
          text: "Please login to your account",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      })
    })
    .catch((error) => {
      console.error(error);
    });

  }

 

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  className="card-body"  onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input type="text"  {...register("name",{ required: true })} name='name' placeholder="email" className="input input-bordered"  />
          {errors.name && <span className='text-red-500'>Name field is required</span>}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL:</span>
          </label>
          <input type="text"  {...register("photoURL",{ required: true })}  placeholder="Photo URL" className="input input-bordered"  />
          {errors.photoURL && <span className='text-red-500'>Photo URL  is required</span>}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{required:true})} name='email' placeholder="email" className="input input-bordered" />
          {errors.email && <span className='text-red-500'>Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{
            required:true , 
            minLength:6, 
            maxLength:20,
            pattern:/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/,

          })} name='password' placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">Password  must be atleast 6 character</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-500' role="alert">Password  must contain at least a uppercase,lowercase , dight</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">

          <input className="btn btn-primary" type="submit" value="Sign Up" />
          
        </div>
      </form>
      <p><small>Already Reginster?<Link to="/login">Go to login</Link></small></p>
    </div>
  </div>
</div>
  )
}
