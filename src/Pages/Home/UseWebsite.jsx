import Lottie from 'lottie-react';
import WebDevelopment from '../../assets/Animation - 1699148916390.json';
import GraphicDesign from '../../assets/Animation - 1699149363148.json';
import DigitalMarketer from '../../assets/business.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const UseWebsite = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <>
            <div className=' '>
              <div>
              <h2 className='text-5xl text-center my-6  font-bold'>Explore Our Services</h2>
                <h2 className='mb-6  text-center text-2xl font-bold'>Chose your category</h2>
              </div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="card  btn-outline border-2 border-black  card-compact bg-base-100 shadow-xl" data-aos="fade-down-right">
                    <figure>
                    <Lottie animationData={WebDevelopment} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <p>Our platform understands the unique challenges faced by web developers—whether it`s frontend design, backend development, or full-stack projects. It provides a centralized hub for effective communication, code reviews, and project visibility, fostering a cohesive and productive development environment.</p>
                       
                    </div>
                </div>
                <div className="card btn-outline border-2 border-black  card-compact bg-base-100 shadow-xl" data-aos="zoom-in">
                    <figure>
                    <Lottie animationData={GraphicDesign} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Graphic Design</h2>
                        <p>We understand the importance of visual aesthetics and project timelines in the design world. That`s why our platform emphasizes clear communication, easy file sharing, and feedback loops, ensuring that every pixel aligns with your vision and every deadline is met.</p>
                       
                    </div>
                </div>
                <div className="card btn-outline border-2 border-black  card-compact bg-base-100 shadow-xl" data-aos="fade-down-left">
                    <figure>
                    <video src={DigitalMarketer}></video>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Web Development</h2>
                        <p>Our website serves as your strategic toolkit, offering a comprehensive suite of features tailored to optimize campaign management, content scheduling, analytics tracking, and team collaboration. Seamlessly organize marketing tasks, track campaign performance, and coordinate efforts across various channels—all within a centralized, intuitive platform.</p>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default UseWebsite;