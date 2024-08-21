import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

import logo from '../../../public/assets/images/logos/td-logo1.png';

export const Footer = ({ id = 'footer' }) => {
  return (
    <footer className="" id={id}>
      <div className="h-24 flex flex-col md:flex-row justify-between items-center mx-auto">
        <Link href="/">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" className="w-24 h-24" />
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center py-2 md:py-0 md:flex-row text-sm">
          <span> © 2024 - Desarrollado por Taguara Digital. </span>
          <span>Todos los derechos reservados</span>
        </div>

        <div className={'flex space-x-4 text-3xl'}>
          <a
            className={'hover:text-[var(--ctaClr)]'}
            href="https://twitter.com/comparamejor_Ve"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className={'hover:text-[var(--ctaClr)]'}
            href="https://twitter.com/comparamejor_Ve"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className={'hover:text-[var(--ctaClr)]'}
            href="https://twitter.com/comparamejor_Ve"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};
