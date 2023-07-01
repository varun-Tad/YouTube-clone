import React, { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useSidebar } from "../context/SidebarContext";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const { isMenuOpen, setIsMenuOpen } = useSidebar();
  const { cacheResult, setCacheResult } = useSearch({});
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSugestions] = useState(false);

  useEffect(() => {
    // make an api call after every key press
    //but if the difference between 2 api calls is < 200ms
    // decline the API call

    const timer = setTimeout(() => {
      // memoization -> if present in cache , directly setSggestions i.e directlty set to state  or else make an api call.
      if (cacheResult[searchQuery]) {
        setSuggestions(cacheResult[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update the cache after api call
    setCacheResult({ [searchQuery]: json[1], ...cacheResult });
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
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSugestions(true)}
            onBlur={() => setShowSugestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2s w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggesion) => (
                <li
                  key={suggesion}
                  className="shadow-sm py-2 hover:bg-gray-100"
                >
                  🔍 {suggesion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
