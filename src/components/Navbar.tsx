import Link from 'next/link';
import ThemeDropdown from './ThemeDropdown';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm mb-6'>
      <div className='flex-1'>
        <Link href='/' className='text-xl text-accent'>
          ImageExplore
        </Link>
      </div>
      <div className='flex gap-2'>
        <ThemeDropdown />
      </div>
    </div>
  );
};

export default Navbar;
