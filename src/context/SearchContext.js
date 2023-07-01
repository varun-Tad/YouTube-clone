import { createContext, useContext, useState } from "react";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [cacheResult, setCacheResult] = useState({});
  return (
    <SearchContext.Provider value={{ cacheResult, setCacheResult }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};
export { useSearch, SearchContext, SearchProvider };
