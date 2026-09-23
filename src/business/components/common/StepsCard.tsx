interface StepsCardProps {
  title?: string;
  subtitle?: string;
  color: string;
  icon: React.ReactNode;
  count: number;
}

const StepsCard = ({ c }: { c: StepsCardProps }) => {
  return (
    <div className="group p-6 rounded-2xl backdrop-blur-xl  transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-400/40 hover:border-blue-200/60 h-full flex flex-col items-center w-[266px]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl transition-opacity"></div>
      <div
        className={`w-[150px] h-[150px] rounded-full flex justify-center items-center relative text-white ${c.color}`}
      >
        {c.icon}
        <div
          className={`w-10 h-10 rounded-full flex justify-center items-center absolute right-0 top-0 border border-white text-white ${c.color}`}
        >
          {c.count}
        </div>
      </div>

      <p className="text-xl font-semibold pt-6 pb-2">{c.title}</p>
      <p className="text-sm group-hover:text-black">{c.subtitle}</p>
    </div>
  );
};

export default StepsCard;
