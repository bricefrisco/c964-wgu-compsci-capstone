import { Link } from "react-router-dom";

const InternalLink = ({ to, children }) => {
  return (
    <Link to={to} className="text-blue-600 hover:underline font-medium">
      {children}
    </Link>
  );
};

export default InternalLink;
