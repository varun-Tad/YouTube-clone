import React from "react";
import { useSidebar } from "../context/SidebarContext";

const Head = () => {
  const { isMenuOpen, setIsMenuOpen } = useSidebar();

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray">
          🔍
        </button>
      </div>
      <div className="col-span-2">
        <img
          className="h-8"
          alt="user"
          src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
        />
      </div>
    </div>
  );
};

export default Head;
