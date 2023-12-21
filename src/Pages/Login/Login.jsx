import { Link, useLocation, useNavigate } from "react-router-dom";
import TypeWriter from "../../Components/TypeWriter";


import AnotherAccount from "../../Components/AnotherAccount";
import { Helmet } from "react-helmet-async";
import Avatar from "../../Components/Avatar";
import useAuth from "../../Hooks/useAuth";
import { getToken, saveUser } from "../../api/auth";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { signIn,signInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

     // form submit handler
  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
      //2. User Login
      const result = await signIn(email, password)
      //5. get token
      await getToken(result?.user?.email)

      navigate(from, { replace: true })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign In Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (err) {
      console.log(err)
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }


// const handleGoogle =()=>{
//     signInWithGoogle()
//     .then(result =>{
//         console.log(result.user);
//         navigate(location?.state ? location.state : '/')
//     })
//     .catch(error =>{
//         console.log(error);
//     })
//    }
const handleGoogleSignIn = async () => {
    try {
      // User signs in using Google
      const result = await signInWithGoogle()
  
      // Save user data in the database
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)
  
      // Obtain a token, probably related to user's email
      await getToken(result?.user?.email)
  
      // Redirect the user to the home page
      navigate('/')
  
      // Show a success message using a toast notification
      
    } catch (err) {
      console.log(err)
      // Show an error message using a toast notification if an error occurs
      
    }
  }

    return (
        <>
        <Helmet>
				<title>Task Management | SignIn</title>

			</Helmet>
       
        <div className="hero min-h-screen">
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-200">
            <Avatar/>
            <TypeWriter/>
            <h1 className="flex justify-center items-center font-bold text-xl mt-3">Please Login</h1>
                <form className="card-body" onSubmit={handleSubmit }>
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
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Continue</button>
                       
                    </div>
                   <AnotherAccount/>
                   <div className="form-control mt-6">
        <button onClick={handleGoogleSignIn} className="btn btn-outline">
            <FaGoogle></FaGoogle> Continue With Google
        </button>
       
    </div>
								<p className="text-lg text-center sm:px-6 dark:text-black">Don`t have an account?
									<Link to='/register'>
										<button className="underline font-medium dark:text-black ">Sign up</button>
									</Link>
								</p>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;