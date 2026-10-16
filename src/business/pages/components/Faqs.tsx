import Accordion from "../../components/common/Accordion";
import ContentLayout from "../../components/layout/ContentLayout";

interface Faq {
  title: string;
  content: string;
}
const Faqs = ({ faqs, description }: { faqs: Faq[]; description?: string }) => {
  return (
    <ContentLayout>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between max-w-7xl mx-auto">
        <div className="flex-1">
          <p className="text-center text-[30px] lg:text-[48px] font-bold">
            Frequently asked questions
          </p>
          <p className="">{description}</p>
        </div>

        <div className="flex-1">
          <Accordion items={faqs} />
        </div>
      </div>
    </ContentLayout>
  );
};

export default Faqs;
