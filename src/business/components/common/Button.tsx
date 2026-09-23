const Button = ({
  text = "",
  bgColor = "bg-primary",
  textColor = "text-white",
  onClick,
  icon,
}: {
  text?: string;
  bgColor?: string;
  textColor?: string;
  onClick?: any;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${
        icon ? "flex gap-2 items-center" : ""
      } hover:bg-dark  px-8 py-3 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
