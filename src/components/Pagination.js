import { Link, useLocation } from "react-router-dom";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

import pages from "../pages";

const PreviousButton = ({ to, category, className, children }) => {
  return (
    <Link
      to={to}
      className={`w-full border p-4 rounded mb-4 md:mb-10 cursor-pointer hover:text-blue-500 hover:bg-gray-50 block ${
        className || ""
      }`}
    >
      <div className="flex place-content-between items-center text-right">
        <ArrowLeft className="w-6 h-6" />
        <div>
          <span className="text-xs text-gray-500 block">
            {category ? `Previous - ${category}` : "Previous"}
          </span>
          <span className="font-medium">{children}</span>
        </div>
      </div>
    </Link>
  );
};

const NextButton = ({ to, category, className, children }) => {
  return (
    <Link
      to={to}
      className={`w-full border p-4 rounded mb-4 md:mb-10 cursor-pointer hover:text-blue-500 hover:bg-gray-50 block ${
        className || ""
      }`}
    >
      <div className="flex place-content-between items-center">
        <div>
          <span className="text-xs text-gray-500 block">
            {category ? `Next - ${category}` : "Next"}
          </span>
          <span className="font-medium">{children}</span>
        </div>
        <ArrowRight className="w-6 h-6" />
      </div>
    </Link>
  );
};

const Pagination = () => {
  const { pathname } = useLocation();
  const index = pages.findIndex((page) => page.path === pathname);
  const previous = index === 0 ? null : pages[index - 1];
  const next = index === pages.length - 1 ? null : pages[index + 1];

  return (
    <div className="md:flex justify-between gap-2.5 pt-4">
      {previous && (
        <PreviousButton to={previous.path} category={previous.category}>
          {previous.title}
        </PreviousButton>
      )}
      {next && (
        <NextButton to={next.path} category={next.category}>
          {next.title}
        </NextButton>
      )}
    </div>
  );
};

export default Pagination;
