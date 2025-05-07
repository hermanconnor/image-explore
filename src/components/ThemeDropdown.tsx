'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const ThemeDropdown = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const { setTheme } = useTheme();

  const handleThemeChange = (theme: string): void => {
    setTheme(theme);

    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn m-1'>
        Theme
        <svg
          width='12px'
          height='12px'
          className='inline-block h-2 w-2 fill-current opacity-60'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 2048 2048'
        >
          <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl'
      >
        <li>
          <input
            type='radio'
            name='theme-dropdown'
            className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
            aria-label='Light'
            onChange={() => handleThemeChange('light')}
            value='light'
          />
        </li>
        <li>
          <input
            type='radio'
            name='theme-dropdown'
            className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
            aria-label='Dark'
            onChange={() => handleThemeChange('dark')}
            value='dark'
          />
        </li>
        <li>
          <input
            type='radio'
            name='theme-dropdown'
            className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
            aria-label='System'
            onChange={() => handleThemeChange('system')}
            value='system'
          />
        </li>
      </ul>
    </div>
  );
};

export default ThemeDropdown;
