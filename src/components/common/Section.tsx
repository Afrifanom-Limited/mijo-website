import HeaderOne from "./HeaderOne";

const Section = ({
  id,
  title,
  subtitle,
  centered = true,
  className = "",
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      id={id}
      className={`mx-auto space-y-8 p-4 py-[140px] lg:py-[180px] ${className}`}
    >
      <HeaderOne title={title} subtitle={subtitle} centered={centered} />
      <div>{children}</div>
    </div>
  );
};

export default Section;
