import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import pages, { categories } from "../pages";

const Section = ({ children }) => {
  return <div className="w-full mb-6">{children}</div>;
};

const NavItem = ({ to, selected, highlighted, children, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm p-2 rounded block ${
        selected
          ? "font-extrabold text-blue-500 bg-blue-50"
          : `${
              highlighted ? "text-purple-700" : "text-gray-500"
            } hover:bg-gray-100 font-medium`
      }`}
    >
      {children}
    </Link>
  );
};

const Category = ({ children }) => {
  return (
    <div className="text-xs font-bold text-gray-400 px-2 py-1 uppercase tracking-widest mt-3">
      {children}
    </div>
  );
};

const Navigation = ({ mobileMenuShown, setMobileMenuShown }) => {
  const location = useLocation();

  return (
    <nav
      className={`bg-white sticky top-[73px] ${
        mobileMenuShown ? "block" : "hidden"
      } md:block max-w-[275px] min-w-[275px] border-r pt-6 pr-4 self-start h-[calc(100vh-73px)] overflow-y-auto mr-5`}
    >
      <Section>
        {pages
          .filter((page) => !page.category)
          .map((page) => (
            <NavItem
              key={page.path}
              to={page.path}
              selected={location.pathname === page.path}
              highlighted={page.highlighted}
              onClick={() => setMobileMenuShown(false)}
            >
              {page.title}
            </NavItem>
          ))}
      </Section>

      {categories.map((category) => (
        <Section key={category}>
          <Category>{category}</Category>
          {pages
            .filter((page) => page.category === category)
            .map((page) => (
              <NavItem
                key={page.path}
                to={page.path}
                selected={location.pathname === page.path}
                highlighted={page.highlighted}
                onClick={() => setMobileMenuShown(false)}
              >
                {page.title}
              </NavItem>
            ))}
        </Section>
      ))}
    </nav>
  );
};

export default Navigation;
