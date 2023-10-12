import { FaForumbee } from "react-icons/fa6";
import "./navbar.css";
import Link from "next/link";
const Navbar = () => {
  const menus = [
    {
      title: "Signup",
      href: "/signup",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <FaForumbee />
        </Link>
      </div>
      <ul className="menu">
        {menus.map((menu, i) => (
          <li className="menuItems" key={i}>
            <Link href={menu.href}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
