const InfoAlert = ({ title, children }) => {
  return (
    <div className="flex p-4 mb-6 text-blue-800 border-l-4 border-blue-800 bg-blue-50 rounded">
      <svg
        className="flex-shrink-0 w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className="ml-3 text-md text-gray-700">
        <div className="block font-semibold mb-1">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default InfoAlert;
