interface ArrowConnectorProps {
  className?: string;
  color?: string;
}

const ArrowConnector = ({
  className = "",
  color = "#0190bf",
}: ArrowConnectorProps) => {
  return (
    <svg
      viewBox="0 0 140 24"
      className={`w-full max-w-[140px] h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12H130M130 12L124 9M130 12L124 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowConnector;
