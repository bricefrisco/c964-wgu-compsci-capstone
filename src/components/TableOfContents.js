import { useLocation } from "react-router-dom";
import useActiveHeadingId from "../hooks/useActiveHeadingId";
import useHeadings from "../hooks/useHeadings";

const SideNavLink = ({ id, to, selected, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <a
      href={to}
      onClick={onClick}
      className={`ml-[-15px] pl-5 cursor-pointer block text-sm mb-2 py-0.5 ${
        selected
          ? "font-medium text-blue-600 border-blue-700 border-l-2"
          : "pl-[22px]"
      }`}
    >
      {children}
    </a>
  );
};

const TableOfContents = () => {
  const { pathname } = useLocation();
  const headings = useHeadings(pathname);
  const activeId = useActiveHeadingId(pathname);

  return (
    <div className="hidden xl:block ml-3 max-w-[300px] min-w-[300px] pt-6 self-start sticky top-[73px]">
      <div className="text-xs font-bold text-gray-400 px-2 py-1 uppercase tracking-widest mb-2">
        On this page
      </div>

      {headings &&
        headings.map(({ id, title, to }) => (
          <SideNavLink key={id} id={id} selected={id === activeId} to={to}>
            {title}
          </SideNavLink>
        ))}
    </div>
  );
};

export default TableOfContents;
