import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/profile.php?id=100093644379500">
              <FaFacebookF className="text-2xl"/>
            </a>
            <a href="https://github.com/Chumki111">
            <FaGithub className="text-2xl"/></a>
            <a href="https://www.linkedin.com/in/chumki-khatun-3083232a4/">
              <FaLinkedinIn className="text-2xl"/>
            </a>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    );
};

export default Footer;