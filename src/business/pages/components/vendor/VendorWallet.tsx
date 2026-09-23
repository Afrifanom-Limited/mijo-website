import { Wallet, ShieldCheck, BellRing } from "lucide-react";
import Tag from "../../../components/common/Tag";
import ContentLayout from "../../../components/layout/ContentLayout";

const VendorWallet = () => {
  const points = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Activate when you're ready",
      subtitle:
        "Your Fulfilment Wallet stays inactive until you explicitly turn it on from Account Options.",
    },
    {
      icon: <Wallet size={20} />,
      title: "Settled the moment delivery is confirmed",
      subtitle:
        "As soon as the recipient enters a valid Completion PIN, the trip fare automatically moves from your wallet to your driver.",
    },
    {
      icon: <BellRing size={20} />,
      title: "Low-balance alerts",
      subtitle:
        "Get notified whenever your available balance reaches or falls below GHS 50, so deliveries never stall for lack of funds.",
    },
  ];
  return (
    <ContentLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col gap-4 lg:w-[90%]">
          <Tag color="yellow" text="Fulfilment Wallet" />
          <p className="text-[30px] font-bold">
            Your delivery earnings, settled instantly
          </p>
          <p className="text-[18px]">
            Fund a dedicated Fulfilment Wallet and let VaMijo handle payouts to
            your driver the moment a delivery is confirmed. No manual transfers,
            no chasing payments.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {points.map((p, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#b0ddeb] text-primary flex items-center justify-center">
                {p.icon}
              </div>
              <div>
                <p className="font-bold">{p.title}</p>
                <p className="text-gray-600 text-sm pt-1">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
};

export default VendorWallet;
