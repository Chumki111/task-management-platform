import { useTypewriter } from 'react-simple-typewriter';
import bannerImage from '../../assets/man.avif'
import { Link } from 'react-router-dom';


const Banner = () => {
    const [text] = useTypewriter({
        /* Config */
        words: ['Hello , Welcome back Taskia'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
   
    return (
        <div className="hero min-h-screen border-b-4 shadow-md border-base-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerImage} className="max-w-sm md:max-w-md rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">{text}</h1>
      <h2 className="text-3xl py-3 font-bold">Management your task with Taskia</h2>
      <p className="py-4">Welcome to our cutting-edge task management platform designed to streamline your productivity and organization. Our platform offers a seamless experience for individuals and teams, allowing you to effortlessly manage tasks, collaborate efficiently, and achieve your goals with ease</p>
      <Link to='/login'>
      <button className="btn btn-outline">Let`s Explore</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Banner;