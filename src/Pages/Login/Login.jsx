import { Link } from "react-router-dom";
import TypeWriter from "../../Components/TypeWriter";

import SocialAccount from "../../Shared/SocialAccount";
import AnotherAccount from "../../Components/AnotherAccount";
import { Helmet } from "react-helmet-async";
import Avatar from "../../Components/Avatar";


const Login = () => {
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
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Continue</button>
                       
                    </div>
                   <AnotherAccount/>
								<SocialAccount />
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