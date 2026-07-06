import Section from "../components/common/Section";

const clauses: { title: string; content: React.ReactNode }[] = [
  {
    title: "Introduction",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          Welcome to VaMijo, a digital mobility platform owned and operated by
          Afrifanom Limited ("Afrifanom", "VaMijo", "we", "our", or "us").
          VaMijo provides technology-driven mobility solutions that connect
          individuals, businesses and independent mobility partners through a
          secure digital platform. Our services include, but are not limited to:
        </p>
        <ul className="pt-2 list-inside text-gray-600 space-y-1">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            On-demand ride-hailing
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Scheduled transportation services
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Executive transportation services
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Airport transfers
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Motorcycle transportation
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Package and courier delivery
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Business logistics
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Fleet management services
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Digital wallet services
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Driver subscription services
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Driver commission plans
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Business mobility solutions
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Future mobility products introduced under the VaMijo platform.
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          This Privacy Policy explains how VaMijo collects, uses, stores, shares
          and protects your personal information whenever you access or use our
          mobile applications, websites, business portals, APIs, customer
          support channels or any other VaMijo services. <br />
          Your privacy is important to us.
          <br /> We recognize that the information entrusted to us is valuable
          and sensitive. We are committed to maintaining the confidentiality,
          integrity and availability of your information while ensuring
          transparency regarding how it is processed. <br />
          This Privacy Policy forms part of the contractual relationship between
          you and VaMijo and should be read together with our:
        </p>
        <ul className="text-gray-600 space-y-1">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Terms and Conditions
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Partner Terms
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Business Account Terms
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Refund Policy
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Cookie Policy
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Community Guidelines
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Any additional policies applicable to specific VaMijo services.
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          By creating an account, accessing or using any VaMijo service, you
          acknowledge that you have read, understood and agreed to this Privacy
          Policy.
          <br /> Where required by applicable law, we will request your explicit
          consent before collecting or processing certain categories of personal
          information.
        </p>
      </div>
    ),
  },
  {
    title: "About VaMijo",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo is a wholly Ghanaian technology platform developed by Afrifanom
          Limited to simplify mobility, transportation and logistics across
          Ghana.
          <br />
          Unlike traditional transport companies, VaMijo operates primarily as a
          technology platform that enables riders, customers, businesses and
          independent mobility partners to connect safely and efficiently
          through intelligent digital matching, navigation and payment
          technologies.
          <br />
          Our ecosystem currently supports multiple user categories including:
        </p>
        <ul className="pt-2 list-disc list-inside text-gray-600 space-y-1">
          <li>
            Individual Customers - Individuals requesting transportation or
            delivery services.
          </li>
          <li>
            Business Customers - Private companies, government agencies,
            institutions and organizations utilizing VaMijo for corporate
            mobility and logistics.
          </li>
          <li>
            Drivers and Delivery Partners - Independent mobility partners
            providing transportation and delivery services through the VaMijo
            platform.
          </li>
          <li>
            Fleet Owners - Businesses and individuals managing multiple vehicles
            and drivers under a single fleet account.
          </li>
          <li>
            Corporate Administrators - Authorized users managing organizational
            mobility accounts, employees, expenses and reporting.
          </li>
          <li>
            Support Personnel - Authorized VaMijo employees and contractors
            responsible for customer support, quality assurance, compliance,
            fraud prevention and platform administration.
          </li>
        </ul>
        <p className="text-gray-600">
          As our platform evolves, additional services may become available
          under the VaMijo ecosystem. Unless otherwise stated, this Privacy
          Policy will automatically apply to those services.
        </p>
      </div>
    ),
  },
  {
    title: "Scope of this Privacy Policy",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          This Privacy Policy applies to all information collected through:
        </p>

        <h4 className="font-semibold text-dark pt-3">Mobile Applications</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>VaMijo Customer App</li>
          <li>VaMijo Driver App</li>
          <li>Future VaMijo applications.</li>
        </ul>

        <h4 className="font-semibold text-dark pt-3">Websites</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Official VaMijo Website</li>
          <li>Customer Portals</li>
          <li>Business Portals</li>
          <li>Fleet Management Portals</li>
          <li>Developer Portals</li>
        </ul>

        <h4 className="font-semibold text-dark pt-3">
          Customer Support Channels
        </h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Email</li>
          <li>Telephone</li>
          <li>Live Chat</li>
          <li>WhatsApp</li>
          <li>Social Media</li>
          <li>In-App Support</li>
        </ul>

        <h4 className="font-semibold text-dark pt-3">Business Platforms</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Corporate dashboards</li>
          <li>Administrative portals</li>
          <li>Fleet Management systems</li>
          <li>Partner Onboarding systems</li>
          <li>Reporting Platforms</li>
        </ul>

        <h4 className="font-semibold text-dark pt-3">
          APIs and Third-Party Integrations
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Where authorized by you or your organization, VaMijo may receive
          information through approved third-party integrations.
        </p>

        <p className="pt-2 text-gray-600 leading-relaxed">
          This Privacy Policy applies regardless of the device used, including:
        </p>
        <ul className="list-inside text-gray-600 space-y-1">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Android phones
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            iPhones
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Tablets
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Desktop computers
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Laptops
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Mobile browsers
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            Smart devices supported by VaMijo
          </li>
        </ul>

        <p className="pt-2 text-gray-600 leading-relaxed">
          This Privacy Policy does not apply to services operated independently
          by third parties, even where such services integrate with VaMijo.
          Those organizations maintain their own privacy policies.
        </p>
      </div>
    ),
  },
  {
    title: "Our Privacy Principles",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo has adopted the following privacy principles to guide every
          aspect of our products, operations and technology.
        </p>

        <h4 className="font-semibold text-dark pt-3">2.1 Lawfulness</h4>
        <p className="text-gray-600 leading-relaxed">
          We collect and process personal information only where permitted by
          applicable laws or where your consent has been obtained.
        </p>

        <h4 className="font-semibold text-dark pt-3">2.2 Transparency</h4>
        <p className="text-gray-600 leading-relaxed">We clearly explain:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>what information we collect;</li>
          <li>why we collect it;</li>
          <li>how we use it;</li>
          <li>who we share it with; and</li>
          <li>how long we retain it.</li>
        </ul>

        <h4 className="font-semibold text-dark pt-3">
          2.3 Purpose Limitation
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Information collected for one legitimate business purpose will not be
          used for unrelated purposes without additional legal justification or
          your consent.
        </p>

        <h4 className="font-semibold text-dark pt-3">2.4 Data Minimization</h4>
        <p className="text-gray-600 leading-relaxed">
          We collect only the information reasonably necessary to provide,
          improve and secure VaMijo services.
        </p>

        <h4 className="font-semibold text-dark pt-3">2.5 Accuracy</h4>
        <p className="text-gray-600 leading-relaxed">
          We encourage users to keep their personal information accurate and up
          to date. Users may update certain information directly within the
          VaMijo applications or by contacting customer support.
        </p>

        <h4 className="font-semibold text-dark pt-3">2.6 Security</h4>
        <p className="text-gray-600 leading-relaxed">
          We employ administrative, organizational and technical safeguards
          designed to protect personal information from unauthorized access,
          alteration, disclosure or destruction.
        </p>

        <h4 className="font-semibold text-dark pt-3">2.7 Accountability</h4>
        <p className="text-gray-600 leading-relaxed">
          Every VaMijo employee, contractor and authorized service provider
          handling personal information is required to comply with applicable
          privacy obligations and confidentiality requirements.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          2.8 Privacy by Design
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Privacy considerations are integrated throughout the design,
          development and deployment of VaMijo products, ensuring that data
          protection is embedded into our systems from the outset rather than
          added as an afterthought.
        </p>
      </div>
    ),
  },
  {
    title: "Definitions",
    content: (
      <div className="text-gray-600 space-y-3 leading-relaxed">
        <p>
          For purposes of this Privacy Policy, the following definitions apply.
        </p>
        <p>
          <span className="font-medium text-dark">Account</span> — A registered
          VaMijo profile created by a customer, driver, business or
          administrator.
        </p>
        <p>
          <span className="font-medium text-dark">Business Account</span> — An
          organization registered to utilize VaMijo services for corporate
          transportation, logistics or employee mobility.
        </p>
        <p>
          <span className="font-medium text-dark">Cookies</span> — Small text
          files stored on your device that help websites and applications
          remember information and improve user experience.
        </p>
        <p>
          <span className="font-medium text-dark">Customer</span> — An
          individual or organization requesting transportation, delivery or
          logistics services through VaMijo.
        </p>
        <p>
          <span className="font-medium text-dark">Device Information</span> —
          Technical information collected from your mobile phone, tablet or
          computer.
        </p>
        <p>
          <span className="font-medium text-dark">Driver or Partner</span> — An
          independent transportation or delivery provider registered on the
          VaMijo platform.
        </p>
        <p>
          <span className="font-medium text-dark">Fleet Owner</span> — An
          organization or individual managing one or more drivers and vehicles
          through VaMijo.
        </p>
        <p>
          <span className="font-medium text-dark">Location Information</span> —
          Information identifying the geographic position of your device using
          technologies including GPS, Wi-Fi, cellular networks or other
          location services.
        </p>
        <p>
          <span className="font-medium text-dark">
            Personal Information
          </span>{" "}
          — Any information relating to an identified or identifiable natural
          person, including information that can directly or indirectly
          identify that individual.
        </p>
        <p>
          <span className="font-medium text-dark">Processing</span> — Any
          operation performed on personal information including collection,
          recording, organization, storage, updating, retrieval, consultation,
          transmission, analysis, deletion or destruction.
        </p>
        <p>
          <span className="font-medium text-dark">
            Sensitive Personal Information
          </span>{" "}
          — Personal information requiring enhanced protection under applicable
          law, including government-issued identification, biometric
          information, financial information and precise location data.
        </p>
        <p>
          <span className="font-medium text-dark">Services</span> — All
          mobility, transportation, logistics, payment, business and technology
          services offered under the VaMijo brand.
        </p>
        <p>
          <span className="font-medium text-dark">Third Party</span> — Any
          individual or organization other than VaMijo or the data subject.
        </p>
        <p>
          <span className="font-medium text-dark">User</span> — Any individual
          accessing or using VaMijo services, including customers, drivers,
          fleet owners, businesses, visitors and administrators.
        </p>
      </div>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          The information collected depends on how you interact with VaMijo,
          the services you use and the permissions you grant. We collect
          information in four primary ways:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Information you provide directly.</li>
          <li>Information collected automatically.</li>
          <li>Information received from third parties.</li>
          <li>Information generated through your use of VaMijo services.</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          The categories described below are illustrative and may expand as new
          VaMijo services are introduced.
        </p>

        <h4 className="font-semibold text-dark pt-4">
          4.1 Customer Information
        </h4>
        <p className="text-gray-600 leading-relaxed">
          When creating or using a personal VaMijo account, we may collect:
        </p>

        <p className="font-medium text-dark pt-2">Identity Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Full name</li>
          <li>Ghana Card details or other accepted identification</li>
          <li>Date of birth (where required)</li>
          <li>Gender (optional where applicable)</li>
          <li>Profile photograph (optional).</li>
        </ul>

        <p className="font-medium text-dark pt-2">Contact Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Mobile phone number</li>
          <li>Email Address (optional)</li>
          <li>Digital Address</li>
        </ul>

        <p className="font-medium text-dark pt-2">Account Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Username</li>
          <li>Password (stored securely in encrypted or hashed form)</li>
          <li>Security questions</li>
          <li>Authentication Tokens</li>
          <li>Login History</li>
        </ul>

        <p className="font-medium text-dark pt-2">
          Ride and Delivery Preferences
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Saved locations</li>
          <li>Home Address</li>
          <li>Work Address</li>
          <li>Favourite destinations</li>
          <li>Frequently visited places</li>
          <li>Ride preferences</li>
          <li>Vehicle preferences</li>
          <li>Accessibility preferences</li>
        </ul>

        <p className="font-medium text-dark pt-2">Payment Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Mobile Money Wallet details</li>
          <li>VaMijo Wallet Information</li>
          <li>Payment History</li>
          <li>Transaction Records</li>
          <li>Billing information</li>
          <li>Promotional Credits</li>
          <li>Discount usage</li>
        </ul>

        <p className="font-medium text-dark pt-2">Communications</p>
        <p className="text-gray-600 leading-relaxed">
          Information shared with VaMijo through:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Customer support</li>
          <li>Emails</li>
          <li>Phone calls</li>
          <li>In-app messaging</li>
          <li>Surveys</li>
          <li>Promotions</li>
          <li>Ratings</li>
          <li>Reviews</li>
          <li>Feedback</li>
        </ul>

        <h4 className="font-semibold text-dark pt-4">
          4.2 Driver and Partner Information
        </h4>
        <p className="text-gray-600 leading-relaxed">
          To operate safely and comply with regulatory requirements, VaMijo
          collects additional information from drivers and delivery partners.
          This may include:
        </p>

        <p className="font-medium text-dark pt-2">Identity Verification</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Full legal name</li>
          <li>Ghana Card details</li>
          <li>Date of birth</li>
          <li>Driver profile photograph</li>
        </ul>

        <p className="font-medium text-dark pt-2">Contact Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Phone number</li>
          <li>Email address</li>
          <li>Residential address</li>
          <li>Digital address</li>
          <li>Preferred operating city or region</li>
        </ul>

        <p className="font-medium text-dark pt-2">
          Driver Qualification Information
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Driver license number</li>
          <li>License issue date</li>
          <li>License expiry date</li>
        </ul>

        <p className="font-medium text-dark pt-2">Vehicle Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Vehicle registration number</li>
          <li>Vehicle make</li>
          <li>Vehicle model</li>
          <li>Vehicle year</li>
          <li>Vehicle colour</li>
          <li>Vehicle type</li>
          <li>Vehicle photographs</li>
        </ul>

        <p className="font-medium text-dark pt-2">Compliance Documentation</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Roadworthiness certificate</li>
          <li>Insurance certificate</li>
          <li>Insurance expiry date</li>
          <li>Vehicle inspection records</li>
          <li>Other regulatory documentation required by law.</li>
        </ul>

        <p className="font-medium text-dark pt-2">Operational Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Online status</li>
          <li>Subscription plan</li>
          <li>Flexi commission plan</li>
          <li>Earnings</li>
          <li>Wallet balances</li>
          <li>Incentive history</li>
          <li>Cancellation statistics</li>
          <li>Acceptance rates</li>
          <li>Completion rates</li>
          <li>Service quality metrics</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          This information enables VaMijo to verify partner eligibility,
          maintain service quality, meet legal obligations and support safe
          platform operations, consistent with our partner onboarding and
          operational requirements.
        </p>

        <h4 className="font-semibold text-dark pt-4">
          4.3 Business Account Information
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Organizations using VaMijo may provide:
        </p>

        <p className="font-medium text-dark pt-2">Organization Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Organization name</li>
          <li>Business registration details</li>
          <li>Certificate of Incorporation</li>
          <li>Tax identification information where applicable</li>
          <li>Registered Address</li>
          <li>Digital Address</li>
          <li>Primary contact information</li>
        </ul>

        <p className="font-medium text-dark pt-2">Authorized Users</p>
        <p className="text-gray-600 leading-relaxed">
          Information relating to employees or representatives authorized to
          access the organization's VaMijo account, including names, business
          email addresses, phone numbers and assigned permissions.
        </p>

        <p className="font-medium text-dark pt-2">Financial Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Billing preferences</li>
          <li>Payment History</li>
          <li>Expense reports</li>
          <li>Transaction records</li>
          <li>Delivery reports</li>
          <li>Fleet reports.</li>
        </ul>

        <p className="font-medium text-dark pt-2">Administrative Information</p>
        <p className="text-gray-600 leading-relaxed">
          Business administrators may generate additional operational
          information through the use of reporting dashboards, user management
          tools and mobility management features. Business account information
          supports organizational onboarding, account administration and
          operational reporting in line with VaMijo's business account
          capabilities.
        </p>
      </div>
    ),
  },
  {
    title: "Lawful Basis for Processing Personal Information",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          Where required under applicable law, VaMijo processes personal
          information based on one or more of the following legal grounds:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Your consent.</li>
          <li>Performance of a contract with you.</li>
          <li>Compliance with legal or regulatory obligations.</li>
          <li>
            Protection of your vital interests or those of another person.
          </li>
          <li>
            Performance of tasks carried out in the public interest where
            applicable.
          </li>
          <li>
            VaMijo's legitimate business interests, provided such interests do
            not override your fundamental rights and freedoms.
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Where we rely on consent, you may withdraw that consent at any time.
          Withdrawal will not affect the lawfulness of processing carried out
          before consent was withdrawn.
        </p>
      </div>
    ),
  },
  {
    title: "Your Consent",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          By registering for, accessing or using VaMijo services, you
          acknowledge that you have read and understood this Privacy Policy.
          Where required, VaMijo will request your explicit consent before:
        </p>
        <ul className="list-inside text-gray-600 space-y-1">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            accessing your precise location;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            using your camera;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            accessing your microphone;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            accessing your photo library or files;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            sending marketing communications;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            processing other categories of personal information that require
            consent under applicable law.
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          You may withdraw or modify certain permissions through your device
          settings or within the VaMijo application. Please note that disabling
          specific permissions may limit or prevent the proper functioning of
          certain features.
        </p>
      </div>
    ),
  },
  {
    title: "Ride and Delivery Data",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          When you use VaMijo services for transportation or delivery, we
          collect and generate additional information necessary to facilitate
          and manage those services.
        </p>

        <p className="font-medium text-dark pt-2">Ride Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Pickup location</li>
          <li>Drop-off location</li>
          <li>Route taken</li>
          <li>Distance travelled</li>
          <li>Trip duration</li>
          <li>Ride timestamps (start and end times)</li>
          <li>Ride category</li>
          <li>Fare details and breakdown</li>
          <li>Surge pricing information where applicable.</li>
        </ul>

        <p className="font-medium text-dark pt-2">Delivery Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Sender details</li>
          <li>Recipient details</li>
          <li>Pickup and delivery addresses</li>
          <li>Package description</li>
          <li>Delivery instructions</li>
        </ul>

        <p className="font-medium text-dark pt-2">Interaction Data</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>
            Communication between customers and drivers (via in-app messaging
            or masked calls)
          </li>
          <li>Ride or delivery cancellations and reasons</li>
          <li>Dispute records</li>
          <li>Ratings and feedback provided by users.</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          This information is essential for service fulfillment, dispute
          resolution, safety monitoring and service improvement.
        </p>
      </div>
    ),
  },
  {
    title: "Location Information",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo collects location data to provide accurate and efficient
          mobility services.
        </p>

        <p className="font-medium text-dark pt-2">Types of Location Data</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Real-time GPS location</li>
          <li>Background location (for drivers and active rides)</li>
          <li>Approximate location (when precise location is not enabled)</li>
          <li>Historical trips locations data</li>
        </ul>

        <p className="font-medium text-dark pt-2">
          How Location Data is Used
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Matching customers with nearby drivers</li>
          <li>Navigation and route optimization</li>
          <li>Fare calculation</li>
          <li>Safety monitoring and incident response</li>
          <li>Fraud prevention</li>
          <li>Service analytics and improvements</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Location data collection depends on your device permissions. You may
          control location access through your device settings; however,
          disabling location services may limit or prevent the use of VaMijo
          services.
        </p>
      </div>
    ),
  },
  {
    title: "Device Information and Permissions",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo collects certain technical information from your device to
          ensure proper functionality, security and performance.
        </p>

        <p className="font-medium text-dark pt-2">Device Information</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Device type and model</li>
          <li>Operating system and version</li>
          <li>Unique device identifiers</li>
          <li>IP address</li>
          <li>Mobile network information</li>
          <li>App version and usage logs</li>
          <li>Crash reports and diagnostics</li>
        </ul>

        <p className="font-medium text-dark pt-2">
          Permissions We May Request
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Location access (for ride matching and navigation)</li>
          <li>
            Camera access (for profile photos, document uploads and
            verification)
          </li>
          <li>Microphone access (for voice communication features)</li>
          <li>Storage access (for saving and uploading files)</li>
          <li>Contacts access (optional, for referral features)</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          You may grant or revoke these permissions at any time through your
          device settings. Certain features may not function properly if
          permissions are denied.
        </p>
      </div>
    ),
  },
  {
    title: "Wallet and Payment Information",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo provides integrated payment solutions, including mobile money
          and digital wallet services.
        </p>

        <p className="font-medium text-dark pt-2">Payment Data Collected</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Mobile money account details</li>
          <li>Wallet balances</li>
          <li>Transaction history</li>
          <li>Payment confirmations</li>
          <li>Billing records</li>
          <li>Refund records</li>
          <li>Promotional credits and discounts</li>
        </ul>

        <p className="font-medium text-dark pt-2">Payment Processing</p>
        <p className="text-gray-600 leading-relaxed">
          Payments may be processed through:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Mobile network operators</li>
          <li>Licensed payment service providers</li>
          <li>Financial institutions</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          VaMijo does not store sensitive financial credentials such as PINs or
          passwords used for mobile money transactions.
        </p>
      </div>
    ),
  },
  {
    title: "Communications",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may communicate with you through various channels to provide
          services and support.
        </p>

        <p className="font-medium text-dark pt-2">Types of Communication</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Transactional messages (ride confirmations, receipts, updates)</li>
          <li>Service notifications (account alerts, security notices)</li>
          <li>Customer support responses</li>
          <li>Promotional and marketing communications (with consent)</li>
          <li>Surveys and feedback requests</li>
        </ul>

        <p className="font-medium text-dark pt-2">Communication Channels</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>SMS</li>
          <li>Email</li>
          <li>In-app notifications</li>
          <li>Push notifications</li>
          <li>Phone calls</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          You may opt out of marketing communications at any time, but you will
          continue to receive essential service-related messages.
        </p>
      </div>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo uses personal information for the following purposes.
        </p>

        <p className="font-medium text-dark pt-2">Service Delivery</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To create and manage user accounts</li>
          <li>To match customers with drivers</li>
          <li>To facilitate rides and deliveries</li>
          <li>To process payments and transactions</li>
          <li>To provide customer support</li>
        </ul>

        <p className="font-medium text-dark pt-2">Safety and Security</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To verify identities</li>
          <li>To monitor platform activity</li>
          <li>To prevent fraud and abuse</li>
          <li>To investigate incidents and disputes</li>
          <li>To enforce our policies and terms</li>
        </ul>

        <p className="font-medium text-dark pt-2">Platform Improvement</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To analyze usage patterns</li>
          <li>To improve features and functionality</li>
          <li>To develop new services</li>
          <li>To conduct research and analytics</li>
        </ul>

        <p className="font-medium text-dark pt-2">Personalization</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To tailor user experience</li>
          <li>To recommend services and features</li>
          <li>To customize promotions and offers</li>
        </ul>

        <p className="font-medium text-dark pt-2">Legal and Compliance</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To comply with applicable laws and regulations</li>
          <li>To respond to lawful requests from authorities</li>
          <li>To maintain records for regulatory purposes</li>
        </ul>

        <p className="font-medium text-dark pt-2">Business Operations</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>To manage internal operations</li>
          <li>To conduct audits and reporting</li>
          <li>To support business growth and development</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Sharing of Information",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may share personal information in the following circumstances:
        </p>

        <p className="font-medium text-dark pt-2">With Other Users</p>
        <p className="text-gray-600 leading-relaxed">
          Customers and drivers share limited information necessary to
          complete rides or deliveries (e.g., name, phone number, location).
        </p>

        <p className="font-medium text-dark pt-2">With Service Providers</p>
        <p className="text-gray-600 leading-relaxed">
          Third-party vendors providing services such as payment processing,
          cloud storage, analytics, customer support and security.
        </p>

        <p className="font-medium text-dark pt-2">With Business Partners</p>
        <p className="text-gray-600 leading-relaxed">
          Where necessary to provide integrated services or promotions.
        </p>

        <p className="font-medium text-dark pt-2">
          With Regulatory Authorities
        </p>
        <p className="text-gray-600 leading-relaxed">
          Where required by law, regulation or legal process.
        </p>

        <p className="font-medium text-dark pt-2">In Business Transfers</p>
        <p className="text-gray-600 leading-relaxed">
          In connection with mergers, acquisitions, restructuring or sale of
          assets.
        </p>

        <p className="pt-2 text-gray-600 leading-relaxed">
          VaMijo ensures that all third parties receiving personal information
          are bound by confidentiality and data protection obligations.
        </p>
      </div>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo retains personal information only for as long as necessary to:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Provide services</li>
          <li>Fulfill contractual obligations</li>
          <li>Comply with legal and regulatory requirements</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Retention periods may vary depending on the type of data and
          applicable laws. When personal information is no longer required, it
          will be securely deleted or anonymized.
        </p>
      </div>
    ),
  },
  {
    title: "Data Security",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo implements appropriate technical and organizational measures
          to protect personal information, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Encryption of sensitive data</li>
          <li>Secure servers and infrastructure</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Regular security assessments and audits</li>
          <li>Monitoring for unauthorized access or breaches</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Despite our efforts, no system is completely secure. Users are
          encouraged to protect their account credentials and report any
          suspicious activity.
        </p>
      </div>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          Depending on applicable law, you may have the following rights:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Right to access your personal information</li>
          <li>Right to correct inaccurate or incomplete data</li>
          <li>Right to request deletion of your data</li>
          <li>Right to restrict or object to processing</li>
          <li>Right to data portability</li>
          <li>Right to withdraw consent</li>
          <li>Right to lodge a complaint with a regulatory authority</li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Requests may be submitted through VaMijo customer support or the Data
          Protection Office.
        </p>
      </div>
    ),
  },
  {
    title: "International Data Transfers",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Where necessary, VaMijo may transfer personal information outside
        Ghana to trusted service providers or partners. In such cases, we
        ensure that appropriate safeguards are in place to protect your
        information in accordance with applicable data protection laws.
      </p>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p className="text-gray-600 leading-relaxed">
        VaMijo services are not intended for individuals under the age of 18.
        We do not knowingly collect personal information from minors. If we
        become aware that such information has been collected, we will take
        steps to delete it promptly.
      </p>
    ),
  },
  {
    title: "Changes to this Privacy Policy",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may update this Privacy Policy from time to time to reflect
          changes in our services, legal requirements or business practices.
          When updates are made:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>The "Last Updated" date will be revised</li>
          <li>
            Significant changes may be communicated through the app or other
            channels
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Continued use of VaMijo services after updates constitutes acceptance
          of the revised policy.
        </p>
      </div>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <div className="text-gray-600 leading-relaxed space-y-1">
        <p>
          Questions regarding this Privacy Policy may be directed to the VaMijo
          Data Protection Office, Afrifanom Limited.
        </p>
        <p>
          General Enquiries:{" "}
          <a
            href="mailto:support@vamijogh.com"
            className="text-primary hover:underline"
          >
            support@vamijogh.com
          </a>
        </p>
        <p>
          Privacy Enquiries:{" "}
          <a
            href="mailto:privacy@vamijogh.com"
            className="text-primary hover:underline"
          >
            privacy@vamijogh.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.vamijogh.com"
            className="text-primary hover:underline"
          >
            www.vamijogh.com
          </a>
        </p>
        <p className="pt-2">
          Where applicable, users may also contact the Data Protection
          Commission of Ghana regarding concerns about the processing of their
          personal information.
        </p>
      </div>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <Section
      title="Privacy Policy"
      subtitle="Effective Date: 1st July, 2026"
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

export default PrivacyPolicy;
