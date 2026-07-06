import Section from "../components/common/Section";

const clauses: { title: string; content: React.ReactNode }[] = [
  {
    title: "Introduction",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Welcome to Afrifanom Limited ("Company", "we", "our", "us"). These Terms
        of Service ("Terms") govern your use of VaMijo (the "Service"). Our
        Privacy Policy also governs your use of the Service and explains how we
        collect, safeguard, and disclose information. By using the Service, you
        acknowledge that you have read, understood, and agree to be bound by
        these Terms and our Privacy Policy.
      </p>
    ),
  },
  {
    title: "Communication",
    content: (
      <p className="text-gray-600 leading-relaxed">
        By using our Service, you agree to receive newsletters, marketing, or
        promotional materials from us. You may opt out at any time by using the
        unsubscribe link or by emailing{" "}
        <a
          href="mailto:info@afrifanom.com"
          className="text-primary hover:underline"
        >
          info@afrifanom.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Purchases",
    content: (
      <p className="text-gray-600 leading-relaxed">
        If you purchase any product or service through the Service, you may be
        required to provide payment and billing information. You represent that
        you have the legal right to use any payment method provided and that all
        information supplied is accurate and complete. We reserve the right to
        refuse or cancel any order in cases of errors, unavailability, or
        suspected fraud.
      </p>
    ),
  },
  {
    title: "Contests, Sweepstakes, and Promotions",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Promotions may be governed by separate rules. If those rules conflict
        with these Terms, the promotion rules will apply.
      </p>
    ),
  },
  {
    title: "Subscriptions",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Some parts of the Service are billed on a subscription basis.
        Subscriptions are billed in advance and renew automatically unless
        canceled. You may cancel your subscription through your account or by
        contacting{" "}
        <a
          href="mailto:info@afrifanom.com"
          className="text-primary hover:underline"
        >
          info@afrifanom.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Free Trial",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may offer free trials at our discretion. If billing information is
        provided, you will not be charged until the trial ends. After the trial
        period, your subscription will automatically convert to a paid
        subscription unless canceled.
      </p>
    ),
  },
  {
    title: "Fee Changes",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may change subscription fees at any time. Any changes will take
        effect at the end of the current billing cycle.
      </p>
    ),
  },
  {
    title: "Refunds",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Refunds are issued within 1 day of the original purchase date, subject
        to applicable conditions.
      </p>
    ),
  },
  {
    title: "Content",
    content: (
      <p className="text-gray-600 leading-relaxed">
        All content on this Service is the property of Afrifanom Limited or used
        with permission. You may not reuse content without written consent.
      </p>
    ),
  },
  {
    title: "Prohibited Uses",
    content: (
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Using the Service in violation of any law or regulation</li>
        <li>Exploiting or harming minors</li>
        <li>Sending spam or unsolicited promotional material</li>
        <li>Impersonating the Company or others</li>
        <li>Engaging in fraudulent, harmful, or illegal activities</li>
        <li>Introducing malware or attempting unauthorized access</li>
      </ul>
    ),
  },
  {
    title: "Analytics",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may use third-party services to monitor and analyze usage of the
        Service.
      </p>
    ),
  },
  {
    title: "No Use by Minors",
    content: (
      <p className="text-gray-600 leading-relaxed">
        The Service is intended only for individuals aged 18 years or older.
      </p>
    ),
  },
  {
    title: "Accounts",
    content: (
      <p className="text-gray-600 leading-relaxed">
        You are responsible for maintaining the confidentiality of your account
        and password and for all activities under your account.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p className="text-gray-600 leading-relaxed">
        The Service and its original content are the exclusive property of
        Afrifanom Limited and are protected by applicable laws.
      </p>
    ),
  },
  {
    title: "Copyright Policy & DMCA",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We respect intellectual property rights. Copyright infringement claims
        may be sent to{" "}
        <a
          href="mailto:info@afrifanom.com"
          className="text-primary hover:underline"
        >
          info@afrifanom.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "Links to Other Sites",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We are not responsible for the content or practices of third-party
        websites linked through our Service.
      </p>
    ),
  },
  {
    title: "Disclaimer of Warranty",
    content: (
      <p className="text-gray-600 leading-relaxed">
        The Service is provided on an "AS IS" and "AS AVAILABLE" basis without
        warranties of any kind.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p className="text-gray-600 leading-relaxed">
        To the maximum extent permitted by law, Afrifanom Limited shall not be
        liable for any indirect or consequential damages.
      </p>
    ),
  },
  {
    title: "Termination",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may terminate or suspend your access to the Service at any time for
        violations of these Terms.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p className="text-gray-600 leading-relaxed">
        These Terms are governed by the laws of the Republic of Ghana.
      </p>
    ),
  },
  {
    title: "Changes to Terms",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may update these Terms from time to time. Continued use of the
        Service means you accept the updated Terms.
      </p>
    ),
  },
  {
    title: "Acknowledgement",
    content: (
      <p className="text-gray-600 leading-relaxed">
        By using the Service, you acknowledge that you have read and agree to
        these Terms and Conditions.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <p className="text-gray-600 leading-relaxed">
        For questions or support, please contact us at{" "}
        <a
          href="mailto:info@afrifanom.com"
          className="text-primary hover:underline"
        >
          info@afrifanom.com
        </a>
        .
      </p>
    ),
  },
];

const TermsOfService = () => {
  return (
    <Section
      title="Terms & Conditions"
      subtitle="Last updated: 15th December, 2025"
      centered
    >
      <div className="max-w-3xl mx-auto space-y-8 text-left">
        {clauses.map((clause) => (
          <div key={clause.title} className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">
              {clause.title}
            </h3>
            {clause.content}
          </div>
        ))}
        <p className="text-sm text-gray-500 pt-4">
          &copy; 2017-2026 | Afrifanom Limited
        </p>
      </div>
    </Section>
  );
};

export default TermsOfService;
