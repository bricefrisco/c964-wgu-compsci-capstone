import { useEffect, useState } from "react";

const useActiveHeadingId = (pathname) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        const visibleHeaders = Array.from(
          document.querySelectorAll("h1, h2")
        ).filter((header) => {
          const rect = header.getBoundingClientRect();
          return rect.bottom >= 77 && rect.top <= window.innerHeight;
        });

        if (visibleHeaders.length === 0) {
          return;
        }

        const uppermostHeader = visibleHeaders.reduce((prev, curr) =>
          prev.getBoundingClientRect().top < curr.getBoundingClientRect().top
            ? prev
            : curr
        );

        setActiveId(uppermostHeader?.id);
      },
      { rootMargin: "-73px 0px 0px 0px" }
    );

    document
      .querySelectorAll("h1, h2")
      .forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [pathname]);

  return activeId;
};

export default useActiveHeadingId;
