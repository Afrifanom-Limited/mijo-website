import company from "../../../assets/company-logo.png";

const OnboardedCompanies = () => {
  return (
    <div className="bg-white h-[302px] flex flex-col items-center justify-evenly py-12">
      <p className="text-center text-[#0F1621]">
        Powering the world’s best B2B teams.
        <br /> From next-gen startups to established enterprises.
      </p>
      <div className="companiesDiv flex flex-wrap justify-between">
        <CompanyLogo></CompanyLogo>
        <CompanyLogo></CompanyLogo>
        <CompanyLogo></CompanyLogo>
        <CompanyLogo></CompanyLogo>
        <CompanyLogo></CompanyLogo>
      </div>
    </div>
  );
};

export default OnboardedCompanies;

const CompanyLogo = () => {
  return (
    <div className="">
      <img src={company} className="w-40 h-14" />
    </div>
  );
};
