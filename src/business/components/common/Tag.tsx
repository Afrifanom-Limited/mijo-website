import type React from "react";

interface TagProps {
  text: string;
  color: string;
}

const Tag: React.FC<TagProps> = ({ text, color }) => {
  const getColor = (color: string) => {
    if (color == "yellow") {
      return "bg-[#fef5ed] text-sm py-1 px-2 border-1 border-[#f9a95c] text-[#f9a95c]";
    } else {
      return "bg-[#b0ddeb] text-sm py-1 px-2 border-1 border-[#0190bf] text-[#0190bf]";
    }
  };
  return (
    <span className={`rounded-full w-fit ${getColor(color)}`}>{text}</span>
  );
};

export default Tag;
