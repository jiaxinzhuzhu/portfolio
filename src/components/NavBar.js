import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-600 inline-flex h-full w-full">
      <div className=" mx-auto inline-flex justify-between">
        <nav className="inline-flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-centre py-5 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Jackson
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-centre py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-centre py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Peojects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inflex-flex items-centre py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me
          </NavLink>
        </nav>
      </div>
      <div className="inflne-flex py-3 px-3 my-6 justify-between mx-auto">
        <SocialIcon
          url="https://www.wechat.com"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jiaxin-zhu-713964148/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.facebook.com/zhu.jiaxin.140"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </header>
  );
}
