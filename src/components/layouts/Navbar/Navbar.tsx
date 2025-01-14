import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: '홈', href: '/' },
    { title: '소개', href: '/about' },
    { title: '서비스', href: '/service' },
  ];

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

        {/* Mobile menu button */}
        <div className='flex items-center md:hidden'>
          <button
            onClick={toggleMenu}
            className='inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
          >
            {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>

        <div className='hidden items-center md:flex'>
          <button className='rounded-xl bg-blue-300 p-2 font-semibold text-white duration-200 hover:scale-110'>
            로그인
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='space-y-1 pb-3 pt-2 sm:px-3 md:hidden'>
          {navItems.map((item, index) => (
            <div key={item.title}>
              <Link
                to={item.href}
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900'
              >
                {item.title}
              </Link>
              {/* 마지막 아이템을 제외하고 구분선 추가 */}
              {index < navItems.length - 1 && (
                <hr className='border-t border-gray-300' />
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
