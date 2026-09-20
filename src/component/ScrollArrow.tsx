// import lg from "../logger";
import "./ScrollArrow.css";
import DownArr from "../assets/down.svg";
import { useState, useEffect } from "react";

function ScrollArrow() {
  const [isScrollable, setIsScrollable] = useState(
    window.innerHeight < document.body.scrollHeight
  );
  const [isVisible, setIsVisible] = useState(true);
  const checkScrollability = () => {
    setIsScrollable(window.innerHeight < document.body.scrollHeight);
  };
  const handleScroll = () => {
    setIsVisible(window.scrollY <= 0);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkScrollability);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-arrow ${!isVisible ? "scroll-arrow--hidden" : ""}`}>
      {isScrollable && <img src={DownArr} alt="Scroll down" />}
    </div>
  );
}

export default ScrollArrow;
