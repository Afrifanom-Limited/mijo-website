import Accordion from "../../components/common/Accordion";
import ContentLayout from "../../components/layout/ContentLayout";

interface Faq {
  title: string;
  content: string;
}
const Faqs = ({ faqs, description }: { faqs: Faq[]; description?: string }) => {
  return (
    <ContentLayout>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 xl:gap-4">
        <div className="col-span-1 xl:col-span-2">
          <p className="text-center lg:text-left text-[30px] lg:text-[48px] font-semibold">
            Frequently asked questions
          </p>
          <p className="">{description}</p>
        </div>
        <div className="col-span-1 xl:col-span-3">
          <Accordion items={faqs} />
        </div>
      </div>
    </ContentLayout>
  );
};

export default Faqs;
