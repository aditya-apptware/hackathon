export const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 ${className}`}
    >
      {label}
    </button>
  );
};
