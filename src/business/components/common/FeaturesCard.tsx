interface FeatureProps {
  title: string;
  subtitle: string;
  icon: any;
}
const FeaturesCard = ({ f }: { f: FeatureProps }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center">
      <div className="font-bold pb-6">
        <img src={f.icon} alt={f.title} width={50} />
      </div>
      <p className="font-bold py-2">{f.title}</p>
      <p className="text-gray-600 text-center">{f.subtitle}</p>
    </div>
  );
};

export default FeaturesCard;
