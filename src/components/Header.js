import ExternalLink from "./ExternalLink";
import Github from "./icons/Github";
import Menu from "./icons/Menu";

const Header = ({ setMobileMenuShown }) => {
  return (
    <header className="border-b py-5 sticky top-0 bg-white z-50">
      <div className="max-w-[1900px] mx-auto px-3">
        <div className="flex justify-between place-content-center">
          <div className="flex items-center place-content-center">
            <div
              className="md:hidden mr-2 hover:bg-gray-200 rounded p-1 cursor-pointer"
              onClick={() => setMobileMenuShown((shown) => !shown)}
            >
              <Menu className="w-6 h-6" />
            </div>
            <div className="text-xl">
              <span className="hidden md:block font-semibold pr-1">
                Computer Science Capstone - Brice Frisco
              </span>
              <span className="md:hidden font-semibold pr-1">
                CS Capstone - Brice Frisco
              </span>
            </div>
          </div>

          <ExternalLink to="https://www.github.com/TODO">
            <div className="p-1 hover:bg-gray-200 cursor-pointer flex justify-center place-content-center rounded">
              <Github className="w-6 h-6 mt-0" />
            </div>
          </ExternalLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
