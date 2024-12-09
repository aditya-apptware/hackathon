export const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-textLight py-2 px-4 rounded hover:bg-dark ${className}`}
    >
      {label}
    </button>
  );
};
