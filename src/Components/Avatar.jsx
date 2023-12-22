
import image from '../assets/businessman.avif'
const Avatar = () => {
    return (
        <div className="flex justify-center items-center -mt-10">
             <div className="avatar ">
                    <div className="w-32 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
             </div>
    );
};

export default Avatar;