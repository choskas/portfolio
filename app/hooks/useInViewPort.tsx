import { useEffect, useState } from "react"

function useInViewPort(ref: React.RefObject<HTMLElement> | any, rootMargin = "-200px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref?.current);
      };
    }, [ref, rootMargin]); 
    return isIntersecting;
  }

  export default useInViewPort;