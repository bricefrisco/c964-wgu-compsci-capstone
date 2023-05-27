import { useEffect, useState } from "react";

const useHeadings = (pathname) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    setHeadings(
      Array.from(document.querySelectorAll("h1, h2")).map((heading) => ({
        id: heading.id,
        title: heading.innerText,
        to: heading.tagName === "H1" ? "#" : `#${heading.id}`,
      }))
    );
  }, [pathname]);

  return headings;
};

export default useHeadings;
