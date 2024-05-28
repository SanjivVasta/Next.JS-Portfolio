import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
    return (
        <ScrollLink 
            to={href} 
            smooth={true} 
            duration={500} 
            className="block py-2 pl-3 pr-4 text-[#bbbbbb] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer">
            {title}
        </ScrollLink>
    );
};

export default NavLink;