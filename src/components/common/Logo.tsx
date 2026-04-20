import logo from "../../assets/noBgLogo.png";

const Logo = ({ width = 40 }: { width?: number }) => {
  return <img src={logo} width={width} />;
};

export default Logo;
