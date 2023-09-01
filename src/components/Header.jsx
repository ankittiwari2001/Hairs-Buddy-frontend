import React from 'react';
import { images } from '../constants'

const NavItemsInfo = [
  {name: "Home"},
  {name: "Articles"},
  {name: "Products"},
  {name: "Contact"},
]

const NavItem = ({name}) => {
  return (
    <li className=" relative group">
              <a href="/" className="px-4 py-2">
                {name}
                </a>
              <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
                /</span>
            </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img src={images.Logo} alt="Logo" className="h-16 w-30" />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-2 font-semibold">
            
           {NavItemsInfo.map((item) => (
            <NavItem key={item.name} name={item.name}/>
           ))}
          </ul>
              <button className='mt-5 md:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'> Sign In</button>
        </div>
      </header>
    </section>
  )
}

export default Header