import Link from 'next/link';
import {HomeIcon} from '@primer/octicons-react';
import {Children} from 'react';
import {ActiveLink} from '@/components';

const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href="/">
        <HomeIcon className="mr-2"/>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"/>
      {
        Children.toArray(
          navItems.map(({path, text}) => (
            <ActiveLink path={path} text={text}/>
          ))
        )
      }
    </nav>
  );
};
