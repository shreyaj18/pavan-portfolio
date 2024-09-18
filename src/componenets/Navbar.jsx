import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="bg-white bg-clip-text text-4xl tracking-tight text-transparent font-semibold">
          Hello...
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon with Link */}
        <a
          href="https://www.linkedin.com/in/pavan-chakrasali/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon with Link */}
        <a
          href="https://github.com/pavanchakrasali7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:pavanchakrasali7777@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <BiLogoGmail />
        </a>

       
      </div>
    </nav>
  );
};



export default Navbar