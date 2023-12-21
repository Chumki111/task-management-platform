import { Helmet } from "react-helmet-async";
import Avatar from "../../Components/Avatar";
import TypeWriter from "../../Components/TypeWriter";
import { Link, useNavigate } from "react-router-dom";
import SocialAccount from "../../Shared/SocialAccount";
import AnotherAccount from "../../Components/AnotherAccount";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../api/utils";
import { getToken, saveUser } from "../../api/auth";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()
    const navigate = useNavigate()
    // form submit handler
    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.image.files[0]
        console.log(name,email,password,image);
        try {
            //1. Upload Image
            const imageData = await imageUpload(image)
      
            //2. User Registration
            const result = await createUser(email, password)
      
            //3. Save username & profile photo
            await updateUserProfile(name, imageData?.data?.display_url)
            console.log(result)
      
            //4. save user data in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse)
            // result.user.email
      
            //5. get token
            await getToken(result?.user?.email)
            navigate('/')
            Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up Successfully",
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

    return (
        <>
            <Helmet>
                <title>Task Management | Sign Up</title>

            </Helmet>

            <div className="hero min-h-screen">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-200">
                    <Avatar />
                    <TypeWriter />
                    <h1 className="flex justify-center items-center font-bold text-xl mt-3">Please Sign Up</h1>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Inter Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Pick your photo</span>
                                   
                                </div>
                                <input type="file" name="image" className="file-input file-input-bordered w-full" />
                               
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Continue</button>

                        </div>
                        <AnotherAccount />
                        <SocialAccount />
                        <p className="text-lg text-center sm:px-6 dark:text-black">Already have an account? 
                            <Link to='/register'>
                                <button className="underline font-medium dark:text-black">  Sign In</button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;