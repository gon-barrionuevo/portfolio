import logo from "../assets/logogb1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { URL_LINKS } from "../constants";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href={URL_LINKS.linkedin}><FaLinkedin/></a>
          <a href={URL_LINKS.github}><FaGithub/></a>
        </div>
    </nav>
  );
};

export default Navbar