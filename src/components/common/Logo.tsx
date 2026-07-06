import logo from "../../assets/logo.png";

const Logo = ({
  width = 40,
  onClick,
}: {
  width?: number;
  onClick?: () => void;
}) => {
  return (
    <img
      src={logo}
      width={width}
      onClick={onClick}
      className={onClick ? "cursor-pointer" : ""}
    />
  );
};

export default Logo;
