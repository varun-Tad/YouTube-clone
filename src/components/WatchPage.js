import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const WatchPage = () => {
  const { isMenuOpen, setIsMenuOpen } = useSidebar();
  const [searchParams] = useSearchParams();

  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeSidebar();
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="1100"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
