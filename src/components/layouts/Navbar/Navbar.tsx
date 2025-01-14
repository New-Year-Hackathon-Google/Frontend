import { Link } from 'react-router-dom';
import MobileDropdown from './MobileDropdown';

const navItems = [
  { title: '홈', href: '/' },
  { title: '소개', href: '/about' },
  { title: '서비스', href: '/service' },
];

const Navbar = () => {
  return (
    <nav className='w-full bg-white px-4 shadow-md'>
      <div className='flex h-16 items-center justify-between'>
        <div className=''>
          <Link to='/' className='text-xl font-bold text-gray-800'>
            Logo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className='rounded-md px-3 font-bold text-gray-600 hover:text-gray-900'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <MobileDropdown />

        <div className='hidden items-center md:flex'>
          <Link
            to='/login'
            className='rounded-xl bg-blue-300 p-3 font-semibold text-white duration-200 hover:scale-110'
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
