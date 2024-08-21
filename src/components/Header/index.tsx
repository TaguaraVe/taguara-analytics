'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../../public/assets/images/logos/td-logo1.png';

const links = [
  {
    label: 'inicio',
    route: '/',
  },
  {
    label: 'tableau',
    route: '/tableau',
  },
  // {
  //   label: 'beneficios',
  //   route: '/beneficios',
  // },
  // {
  //   label: 'nosotros',
  //   route: '/nosotros',
  // },
  // {
  //   label: 'contáctanos',
  //   route: '/#contact',
  // },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <header>
      <button
        className="hover:text-primary-200 lg:hidden ml-4"
        onClick={handleShowToggleMenu}
      >
        {!showMenu ? <FaBars size={20} /> : <FaTimes size={20} />}
      </button>
      <Link href="/">
        <div className="relative w-[80px] h-[80px]">
          <Image src={logo} alt="Logo" height={80} width={80} />
        </div>
      </Link>

      <nav className="flex lg:flex-row-reverse justify-between items-center">
        <ul
          onClick={handleShowToggleMenu}
          className={`menuMobile ${
            showMenu ? 'translate-x-0' : '-translate-x-full'
          } lg:menuDesktop`}
        >
          {links.map((link) => {
            return (
              <li className="headerLink" key={link.label}>
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
