import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

type AccordionItem = {
  title: string;
  content: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden border-t-[0.5px] pb-3 ">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-4 py-3 text-left flex justify-between items-center transition cursor-pointer group"
          >
            <span className="font-bold text-gray-800 flex-1">{item.title}</span>
            <span
              className={`colorDiv ml-2 min-h-6 min-w-6 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-gray-200 group-hover:text-white group-hover:scale-110 transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } pointer-events-none`}
            >
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          <div
            className={`px-4 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 py-3" : "max-h-0"
            }`}
          >
            <div className="text-gray-700">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
