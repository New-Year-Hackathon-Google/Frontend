import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { title: '홈', href: '/' },
  { title: '소개', href: '/about' },
  { title: '서비스', href: '/service' },
];

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      {/* 메뉴 토글 버튼 */}
      <div className='flex items-center md:hidden'>
        <button
          onClick={toggleMenu}
          className='inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
        >
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className='absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='py-1'>
            {navItems.map((item, index) => (
              <div key={item.title}>
                <Link
                  to={item.href}
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                >
                  {item.title}
                </Link>
                {/* 마지막 아이템을 제외하고 구분선 추가 */}
                {index < navItems.length - 1 && (
                  <hr className='border-t border-gray-200' />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
