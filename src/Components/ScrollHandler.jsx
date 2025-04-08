import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAppointment) {
      setTimeout(() => {
        document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return null; // doesn't render anything
};

export default ScrollHandler;
