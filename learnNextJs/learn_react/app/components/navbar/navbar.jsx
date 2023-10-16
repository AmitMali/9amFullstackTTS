"use client";
import { FaForumbee } from "react-icons/fa6";
// import "./navbar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
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
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <nav className="navbar flex bg-sky-600 px-16 h-16 align-middle">
      <div className="logo">
        <Link
          className={`link ${
            pathname === "/" ? "text-yellow-500" : "text-white"
          } text-2xl`}
          href="/"
        >
          {" "}
          <FaForumbee />
        </Link>
      </div>
      <ul className="menu flex gap-x-3 text-lg font-medium	">
        {menus.map((menu, i) => (
          <li className="menuItems" key={i}>
            <Link
              href={menu.href}
              className={
                menu.href === pathname ? "text-yellow-500" : "text-white"
              }
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
