import Link from "next/link";
import ThemeDropdown from "./ThemeDropdown";

const Navbar = () => {
  return (
    <nav className="navbar mb-6 bg-base-100 px-4 shadow">
      <div className="flex-1">
        <Link href="/" className="text-xl text-accent">
          ImageExplore
        </Link>
      </div>

      <div className="flex-none">
        <ThemeDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
