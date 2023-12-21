import useAuth from "../Hooks/useAuth";

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <>
            <div className='w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto'>
               <div>
               <div className="avatar">
                    <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <h2 className="font-bold text-lg my-3">{user?.displayName}</h2>
               </div>
            </div>
        </>
    );
};

export default UserProfile;