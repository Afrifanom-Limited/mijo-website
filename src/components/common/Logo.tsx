import logo from "../../assets/logo.png";

const Logo = ({ width = 40 }: { width?: number }) => {
  return <img src={logo} width={width} />;
};

export default Logo;
