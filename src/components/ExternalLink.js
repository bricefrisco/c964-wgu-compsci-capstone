const ExternalLink = ({ to, children }) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline font-medium"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
