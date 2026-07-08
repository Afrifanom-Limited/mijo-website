import Section from "../components/common/Section";
import { navigate } from "../router";

export const slugifyClauseTitle = (title: string) =>
  title
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const clauses: { title: string; content: React.ReactNode }[] = [
  {
    title: "1. Introduction and Acceptance",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.1</span>
          These Terms and Conditions (the "Terms") govern access to and use of
          the VaMijo mobile applications, websites, portals, dashboards, APIs,
          customer-support channels, digital wallets and related mobility,
          transport, delivery, logistics and business services (collectively,
          the "Services").
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.2</span>
          VaMijo is owned and operated by Afrifanom Limited, a company
          incorporated under the laws of the Republic of Ghana ("Afrifanom",
          "VaMijo", "we", "us" or "our").
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.3</span>
          By creating an account, clicking to accept, requesting or providing a
          Service, purchasing a Partner access plan, joining a fleet, using a
          Business Account, or otherwise accessing VaMijo, you confirm that you
          have read, understood and agreed to these Terms and the documents
          incorporated into them.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.4</span>
          These Terms should be read together with the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            VaMijo Privacy Policy
          </a>
          , Refund Policy, Community Guidelines, Partner onboarding
          requirements, Business Account terms and any service-specific
          conditions displayed in the App or agreed in writing.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.5</span>
          If you do not agree to these Terms, you must not create an account,
          request or provide a Service, or continue using VaMijo.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.6</span>
          Electronic acceptance, one-time passwords, in-app confirmations,
          digital signatures, transaction records and other electronic records
          may be used to evidence your agreement and transactions to the extent
          permitted by applicable law.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">1.7</span>
          Nothing in these Terms excludes or limits a right, remedy or liability
          that cannot lawfully be excluded or limited.
        </p>
      </div>
    ),
  },
  {
    title: "2. About VaMijo and the Nature of the Platform",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">2.1</span>
          VaMijo is a Ghanaian digital mobility platform that uses technology to
          connect customers and organizations with independent drivers, delivery
          partners, fleet operators and other service providers. VaMijo also
          provides account administration, booking, matching, navigation,
          payment facilitation, digital wallet, reporting, safety,
          customer-support and related platform functions.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">2.2</span>
          Unless a booking screen, service description, signed agreement or
          applicable law expressly states that VaMijo or an Afrifanom affiliate
          is the direct transport or courier provider, the underlying
          transportation or delivery service is provided by an independent
          Partner. In that case, a direct service contract is formed between the
          requesting Customer and the Partner when the Partner accepts the
          request.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">2.3</span>
          VaMijo remains responsible for operating the technology platform and
          for obligations that these Terms or applicable law expressly place on
          VaMijo. VaMijo does not assume responsibility for an independent
          Partner's acts or omissions merely because the Partner uses the
          Platform, but this does not exclude VaMijo's liability for its own
          negligence, fraud, wilful misconduct, platform errors or other
          non-excludable obligations.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">2.4</span>
          Partners are not authorized to make representations, warranties or
          commitments on behalf of VaMijo unless VaMijo has expressly authorized
          them in writing.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">2.5</span>
          Service availability depends on location, time, demand, Partner
          supply, vehicle category, regulatory approvals, connectivity, weather,
          road conditions and other operational factors. VaMijo does not
          guarantee that a Partner will be available for every request.
        </p>
        <p className="pt-2 text-gray-600 leading-relaxed">
          <span className="font-medium text-dark pr-1">2.6</span>
          Certain categories, including commercial motorcycle passenger
          transport, may be activated only in locations and during periods where
          the service is permitted by law and VaMijo and the relevant Partners
          hold the required approvals, licences, permits and insurance.
        </p>
      </div>
    ),
  },
  {
    title: "3. Definitions",
    content: (
      <div className="text-gray-600 space-y-3 leading-relaxed">
        <p>
          <span className="font-medium text-dark">Account</span> — A registered
          profile used to access one or more VaMijo Services.
        </p>
        <p>
          <span className="font-medium text-dark">Active Service</span> — A
          ride, delivery or other booking that has been accepted by a Partner
          and has not been completed, cancelled or otherwise closed.
        </p>
        <p>
          <span className="font-medium text-dark">App</span> — Any VaMijo
          customer, rider, driver, partner, business, fleet or other mobile
          application.
        </p>
        <p>
          <span className="font-medium text-dark">Business Account</span> — An
          account opened by a company, public institution, non-governmental
          organisation, school, association or other entity for authorised
          organisational use.
        </p>
        <p>
          <span className="font-medium text-dark">Business Administrator</span>{" "}
          — A person authorized to manage a Business Account, users, budgets,
          permissions, reports and billing.
        </p>
        <p>
          <span className="font-medium text-dark">Customer</span> — A person or
          organization that requests, receives, pays for or benefits from a
          Service. A Rider, Sender, Business Account or authorized employee user
          may be a Customer.
        </p>
        <p>
          <span className="font-medium text-dark">Delivery</span> — The
          collection, transportation and handover of a Package or other
          permitted item through VaMijo.
        </p>
        <p>
          <span className="font-medium text-dark">Delivery Partner</span> — An
          independent individual or entity authorized to provide Delivery
          Services through VaMijo.
        </p>
        <p>
          <span className="font-medium text-dark">Driver</span> — An independent
          individual authorised to provide passenger transportation through
          VaMijo.
        </p>
        <p>
          <span className="font-medium text-dark">Partner</span> — A Driver,
          Delivery partner, fleet-supplied driver or other independent service
          provider authorized to accept requests through VaMijo.
        </p>
        <p>
          <span className="font-medium text-dark">Fare</span> — The amount
          charged for a Service, including any applicable base amount, distance,
          time, waiting time, dynamic pricing, tolls, parking, airport fees,
          stop fees, taxes, regulatory levies, cancellation charges and other
          disclosed amounts.
        </p>
        <p>
          <span className="font-medium text-dark">Fleet Owner</span> — A person
          or entity that owns, leases, manages or controls one or more vehicles
          and/or Partners registered under a fleet relationship.
        </p>
        <p>
          <span className="font-medium text-dark">Package</span> — Any permitted
          item submitted for Delivery.
        </p>
        <p>
          <span className="font-medium text-dark">Platform</span> — The
          technology, systems, applications, websites, portals, APIs and
          operational tools used to provide VaMijo Services.
        </p>
        <p>
          <span className="font-medium text-dark">Recipient</span> — The person
          or entity designated to receive a Package.
        </p>
        <p>
          <span className="font-medium text-dark">Rider</span> — A passenger or
          person requesting passenger transportation, whether for themselves or
          an authorised third party.
        </p>
        <p>
          <span className="font-medium text-dark">Sender</span> — The person or
          entity requesting a Delivery or handing a Package to a Partner.
        </p>
        <p>
          <span className="font-medium text-dark">Service Area</span> — A city,
          region, route or other geographic area in which a VaMijo category is
          available.
        </p>
        <p>
          <span className="font-medium text-dark">VaMijo Wallet</span> — An
          in-app balance or payment interface made available directly or through
          a licensed payment service provider for permitted payments, credits,
          refunds, earnings or withdrawals.
        </p>
        <p>
          <span className="font-medium text-dark">Vehicle</span> — A car, van,
          truck, motorcycle, tricycle or other approved vehicle registered for a
          VaMijo category.
        </p>
        <p>
          <span className="font-medium text-dark">User</span> — Any person who
          accesses or uses VaMijo, including Customers, Riders, Senders,
          Recipients, Partners, Fleet Owners, Business Administrators and
          visitors.
        </p>
      </div>
    ),
  },
  {
    title: "4. Eligibility and Geographic Availability",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          4.1 General Eligibility
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You must be at least eighteen (18) years old and legally capable of
          entering into a binding agreement to create a Customer Account. A
          Business Account must be opened and managed by a duly authorized
          representative of the organization.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          4.2 Partner Eligibility
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner must meet the minimum age, licensing, training,
          identification, vehicle, insurance, road-worthiness,
          criminal-screening and other eligibility requirements applicable to
          the relevant service category. Unless VaMijo publishes a different
          lawful requirement, a Driver or Delivery Partner must be at least
          twenty-one (21) years old.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          4.3 Use by or for Minors
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo Accounts are not intended for persons under eighteen (18). An
          adult Account holder may request a ride for another person, but
          unaccompanied-minor travel is prohibited unless VaMijo introduces a
          specifically designed, legally compliant service. Children travelling
          with an adult must use appropriate restraints, seats and safety
          equipment required by law.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          4.4 Geographic Restrictions
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You may use a Service only where it is shown as available in the App.
          Cross-border travel or delivery is not permitted unless expressly
          offered and confirmed by VaMijo. You must not use location-masking,
          account manipulation or other means to access a category that is
          unavailable or unlawful in your location.
        </p>
      </div>
    ),
  },
  {
    title: "5. Account Registration, Verification and Security",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          5.1 Accurate Information
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You must provide complete, accurate and current information. Depending
          on your role, this may include your name, Ghana Card or other accepted
          identification, phone number, email address, digital address, date of
          birth, business registration details, driver's licence, vehicle
          registration, road-worthiness certificate, insurance, photographs,
          mobile-money details and other information reasonably required for
          verification and compliance.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          5.2 Identity and Document Verification
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You authorize VaMijo to verify submitted information through the
          National Identification Authority, Driver and Vehicle Licensing
          Authority, insurers, regulators, payment providers, authorized
          screening providers and other lawful sources. Verification does not
          guarantee approval and VaMijo may request updated or additional
          information at any time.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          5.3 One Account and Authorized Use
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Unless VaMijo permits otherwise, each person may maintain only one
          personal Account for each user role. You must not create false,
          duplicate, transferred, rented, borrowed or synthetic Accounts.
          Business and Fleet Accounts may have multiple authorized users subject
          to role permissions.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          5.4 Account Credentials
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You are responsible for protecting your password, PIN, device,
          one-time passwords and authentication credentials. You must not share
          credentials or allow an unauthorized person to use your Account.
          Notify VaMijo immediately if you suspect unauthorized access, SIM
          swap, device loss or account compromise.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          5.5 Responsibility for Account Activity
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You are responsible for activity carried out through your Account
          unless you promptly report unauthorized use and the activity was not
          caused by your negligence, fraud or credential sharing. Business
          Account owners are responsible for managing authorized users and
          promptly removing access when employment or authority ends.
        </p>

        <h4 className="font-semibold text-dark pt-3">5.6 Account Updates</h4>
        <p className="text-gray-600 leading-relaxed">
          You must keep information and compliance documents current. Partners
          must not provide Services using an expired, suspended, revoked or
          invalid licence, insurance policy or road-worthiness certificate.
          Certain material changes, including a Vehicle change, may require
          re-verification and may temporarily restrict access.
        </p>

        <h4 className="font-semibold text-dark pt-3">5.7 Account Deletion</h4>
        <p className="text-gray-600 leading-relaxed">
          You may request Account deletion through the App or support channels.
          Deletion does not cancel outstanding payments, disputes,
          investigations or legal obligations, and VaMijo may retain information
          as described in the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>{" "}
          and required by law.
        </p>
      </div>
    ),
  },
  {
    title: "6. VaMijo Service Categories",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may offer some or all of the following categories, subject to
          location and availability:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 pt-2">
          <li>On-demand passenger rides</li>
          <li>Scheduled rides and advance reservations</li>
          <li>Comfort and Executive transportation</li>
          <li>Airport pickup and drop-off services</li>
          <li>Motorcycle or other lawful two/three-wheel mobility services</li>
          <li>Package, document and courier Delivery</li>
          <li>Business logistics and bulk or recurring delivery services</li>
          <li>Corporate mobility, employee transport and central billing</li>
          <li>Fleet management and partner administration</li>
          <li>Digital wallet, payment, credit and promotional features</li>
          <li>Driver subscription, Flexi commission and other access plans</li>
          <li>
            Other mobility, logistics or technology services introduced from
            time to time
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Each category may have separate vehicle standards, capacity limits,
          operating hours, pricing, cancellation windows, booking lead times,
          package restrictions, insurance arrangements and eligibility
          requirements. These will be displayed in the App, published in a
          policy or agreed in writing.
        </p>
      </div>
    ),
  },
  {
    title: "7. Booking, Matching and Service Formation",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          7.1 Submitting a Request
        </h4>
        <p className="text-gray-600 leading-relaxed">
          To request a Service, you must provide the information requested in
          the App, including an accessible and lawful pickup point, destination
          or drop-off point, service category, passenger count or package
          details, contact information, special instructions and payment method.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          7.2 Fare and Booking Confirmation
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Before confirmation, the App will normally display an estimated Fare
          or applicable pricing basis. By confirming the request, you authorize
          VaMijo to seek an eligible Partner and, where applicable, to place a
          payment authorization or hold.
        </p>

        <h4 className="font-semibold text-dark pt-3">7.3 Matching</h4>
        <p className="text-gray-600 leading-relaxed">
          Matching may consider distance, estimated arrival time, Partner
          availability, active Vehicle, service category, subscription or access
          status, ratings, acceptance and completion history, safety and
          compliance status, customer or Business Account type, operational
          priorities and other legitimate service-quality factors. VaMijo does
          not guarantee the closest Partner or any minimum number of requests.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          7.4 Acceptance and Contract Formation
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A request is not confirmed until an eligible Partner accepts it or
          VaMijo otherwise confirms the booking. Where the Service is provided
          by an independent Partner, the transport or Delivery contract is
          formed between the Customer and Partner at acceptance, subject to
          these Terms and service-specific conditions.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          7.5 Partner or Vehicle Substitution
        </h4>
        <p className="text-gray-600 leading-relaxed">
          For scheduled, airport, fleet or executive bookings, VaMijo may
          substitute an equivalent or higher category Vehicle or Partner where
          reasonably necessary. If only a lower category is available, VaMijo
          will seek your consent and adjust the Fare where appropriate.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          7.6 Third-party Bookings
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You may request a Service for another adult or a Recipient only if you
          are authorized to provide their contact and location information and
          have informed them that VaMijo and the Partner will process that
          information to complete the Service. You remain responsible for
          charges and for ensuring the third party complies with these Terms.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          7.7 Safe and Accessible Locations
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Pickup and drop-off points must be legally accessible and reasonably
          safe for stopping. A Partner may move to a nearby safe location where
          stopping at the requested point is unlawful or unsafe. The User must
          follow reasonable instructions for safe collection or boarding.
        </p>
      </div>
    ),
  },
  {
    title: "8. Pricing, Fare Estimates and Additional Charges",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">8.1 Pricing Components</h4>
        <p className="text-gray-600 leading-relaxed">
          Fares may be calculated using one or more of the following: base
          amount, distance, time, service category, minimum fare, waiting time,
          stop time, dynamic demand pricing, package size or weight, delivery
          tier, airport or terminal fees, tolls, parking, route changes,
          additional stops, cleaning or damage charges, taxes, regulatory levies
          and other disclosed components.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          8.2 Estimates and Final Fare
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Fare displayed before confirmation is an estimate unless expressly
          described as fixed. The final Fare may change because of actual time
          and distance, traffic, waiting, route changes, added stops, tolls,
          parking, airport charges, customer instructions, recipient
          unavailability, return delivery, package misdescription or other
          events attributable to the Service as completed.
        </p>

        <h4 className="font-semibold text-dark pt-3">8.3 Dynamic Pricing</h4>
        <p className="text-gray-600 leading-relaxed">
          During periods of high demand, limited supply, severe weather, major
          events, emergencies or unusual congestion, a pricing multiplier or
          surcharge may apply. The App will disclose the estimated effect before
          you confirm, except where an emergency change is required by law or a
          regulator.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          8.4 Tolls, Parking and External Charges
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Unless included in the upfront estimate, lawful tolls, parking,
          airport, terminal, access and similar charges incurred to perform the
          Service may be added to the final Fare or paid directly by the
          Customer. A Partner must not demand undisclosed personal charges.
        </p>

        <h4 className="font-semibold text-dark pt-3">8.5 Fare Review</h4>
        <p className="text-gray-600 leading-relaxed">
          You may request review of a Fare through Help & Support. VaMijo may
          correct a manifest error, duplicate charge, incorrect route record or
          system malfunction. A disagreement with a correctly disclosed pricing
          formula does not by itself establish an error.
        </p>

        <h4 className="font-semibold text-dark pt-3">8.6 Changes to Pricing</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may change pricing parameters, Partner fees and access-plan
          amounts. Current amounts and applicable cycles will be displayed
          before purchase or booking. Where a change materially affects an
          existing prepaid plan, it will take effect after the current paid
          cycle unless law requires otherwise.
        </p>
      </div>
    ),
  },
  {
    title: "9. Payments, Wallets, Receipts and Taxes",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">9.1 Payment Methods</h4>
        <p className="text-gray-600 leading-relaxed">
          Available methods may include mobile money, VaMijo Wallet, cards,
          approved corporate billing, cash or other methods shown in the App.
          VaMijo may remove, restrict or require a payment method for particular
          users, locations or risk conditions.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          9.2 Payment Authorization
        </h4>
        <p className="text-gray-600 leading-relaxed">
          By selecting a payment method, you authorize VaMijo and its licensed
          payment providers to initiate, process, reverse, refund or adjust
          transactions related to your booking, approved fees, charge-backs,
          negative balances and corrections. You confirm that you are authorized
          to use the selected payment method.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          9.3 Mobile Money and Payment Provider Terms
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Electronic payments are processed by mobile network operators, banks,
          electronic money issuers or payment service providers. Their terms,
          limits, downtime, identity checks and dispute procedures may also
          apply. VaMijo does not request or store your mobile-money PIN.
        </p>

        <h4 className="font-semibold text-dark pt-3">9.4 VaMijo Wallet</h4>
        <p className="text-gray-600 leading-relaxed">
          Unless VaMijo is separately licensed to issue electronic money, the
          VaMijo Wallet is a platform interface provided with or through a
          licensed payment provider. It is not a bank account, savings product
          or investment and does not earn interest. Funds, withdrawals and
          reversals remain subject to provider rules and applicable law.
        </p>

        <h4 className="font-semibold text-dark pt-3">9.5 Cash Payments</h4>
        <p className="text-gray-600 leading-relaxed">
          Where cash is enabled, the Customer must pay the correct amount
          directly to the Partner at the time stated. Cash transactions may
          still be recorded in the App. VaMijo may suspend cash access following
          non-payment, counterfeit currency, repeated disputes or safety
          concerns.
        </p>

        <h4 className="font-semibold text-dark pt-3">9.6 Receipts</h4>
        <p className="text-gray-600 leading-relaxed">
          Electronic receipts and transaction records may be provided in the
          App, by email or through a Business Account portal. You must review
          receipts promptly and report a suspected error within the period
          stated in the Refund Policy.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          9.7 Outstanding Balances and Set-off
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may restrict new requests or Partner access while an undisputed
          amount is overdue. To the extent permitted by law, VaMijo may deduct
          amounts properly owed from Wallet balances, Partner earnings,
          incentives, deposits or refunds after providing a transaction record
          or notice.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          9.8 Charge-backs and Reversals
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You must not initiate a fraudulent or abusive charge-back. VaMijo may
          investigate, provide transaction evidence to the payment provider,
          recover charge-back costs where the transaction was valid and suspend
          the Account pending resolution.
        </p>

        <h4 className="font-semibold text-dark pt-3">9.9 Taxes</h4>
        <p className="text-gray-600 leading-relaxed">
          Fares and Partner payments may include or be subject to taxes, levies
          or withholding required by law. Each Partner and Fleet Owner is
          responsible for their own tax registration, returns and obligations
          except where VaMijo is legally required to collect, withhold or report
          amounts.
        </p>
      </div>
    ),
  },
  {
    title: "10. Ride and Customer Terms",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          10.1 Passenger Count and Capacity
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You must select a category suitable for the number of passengers and
          luggage. A Partner may refuse unsafe overloading or luggage that
          cannot be secured. No person may travel in a part of the Vehicle not
          designed for passengers.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.2 Punctuality and Waiting
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You should be ready at the confirmed pickup point when the Partner
          arrives. A free waiting period may apply, after which waiting charges
          or cancellation rights may arise. The applicable period and rate may
          vary by category and will be displayed or published.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.3 Seat Belts, Helmets and Child Safety
        </h4>
        <p className="text-gray-600 leading-relaxed">
          All occupants must use seat belts and legally required safety
          equipment. For motorcycle services, the Rider and Driver must use
          approved helmets and protective equipment. An adult travelling with a
          child is responsible for providing and correctly using any required
          child restraint unless the category expressly includes one.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.4 Conduct in Vehicle
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Riders must behave safely and respectfully. You must not distract or
          obstruct the Driver, request illegal or unsafe driving, smoke or vape
          without permission, consume illegal drugs, carry dangerous items,
          damage the Vehicle, engage in sexual activity, threaten or harass
          anyone or create a serious hygiene or safety risk.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.5 Alcohol and Impairment
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner may refuse or end a Service if a Rider is so intoxicated,
          aggressive, ill or impaired that transportation cannot be provided
          safely. Reasonable assistance should be sought where the Rider is
          vulnerable, but the Partner is not required to expose themselves or
          others to danger.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.6 Luggage and Personal Property
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You are responsible for loading, securing and removing personal
          property unless assistance is agreed. Do not leave cash, valuables,
          identification or sensitive items unattended. VaMijo and Partners are
          not custodians of property left in a Vehicle.
        </p>

        <h4 className="font-semibold text-dark pt-3">10.7 Lost Property</h4>
        <p className="text-gray-600 leading-relaxed">
          Report lost property promptly through the App. VaMijo may facilitate
          contact but does not guarantee recovery. A reasonable return, storage
          or delivery fee may apply. Unclaimed property may be handled,
          surrendered or disposed of in accordance with law and VaMijo's
          published process.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.8 Cleaning and Damage
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Customer may be charged reasonable cleaning, repair or replacement
          costs for damage or abnormal soiling caused by the Customer, Rider,
          guest, animal or property carried under the booking. VaMijo may
          request photographs, invoices or other evidence and will provide an
          opportunity to dispute the charge.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          10.9 Accessibility and Assistance
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Users may provide reasonable accessibility or assistance notes when
          requesting a Service. Availability of specialized equipment is not
          guaranteed unless the relevant category expressly confirms it.
          Partners must not unlawfully discriminate against a person with a
          disability or assistance need.
        </p>
      </div>
    ),
  },
  {
    title: "11. Scheduled, Airport, Comfort and Executive Services",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          11.1 Advance Reservations
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A scheduled booking reserves a request for the selected time but does
          not guarantee a particular Partner until assignment or confirmation.
          VaMijo may begin matching before the pickup time. The Customer must
          provide accurate date, time, passenger, luggage and contact details.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          11.2 Scheduled Cancellation
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Scheduled categories may have longer cancellation windows and higher
          late-cancellation or no-show charges than on-demand Services. The
          applicable terms will be displayed before confirmation.
        </p>

        <h4 className="font-semibold text-dark pt-3">11.3 Airport Services</h4>
        <p className="text-gray-600 leading-relaxed">
          The Customer is responsible for selecting the correct terminal and
          providing accurate flight information where requested. Airport access
          fees, parking, meet-and-greet, waiting and delayed-flight rules may
          apply. VaMijo is not responsible for a missed flight caused by
          traffic, weather, road closure, incorrect booking information or other
          circumstances outside VaMijo's reasonable control.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          11.4 Comfort and Executive Standard
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Comfort and Executive categories may require newer,
          higher-specification, premium, spacious or professionally chauffeured
          Vehicles meeting VaMijo's current classification standards. Brand,
          model and colour are not guaranteed unless expressly confirmed in
          writing.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          11.5 Minimum Booking Periods
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Certain Executive, chauffeur, event or fleet services may require a
          minimum booking duration, deposit, hourly rate, mileage allowance or
          cancellation charge. These will be stated in the quote, booking screen
          or signed agreement.
        </p>
      </div>
    ),
  },
  {
    title: "12. Route Changes, Stops and Waiting Time",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">12.1 Adding Stops</h4>
        <p className="text-gray-600 leading-relaxed">
          Where enabled, a Rider may add, remove, reorder or skip intermediate
          stops up to the configurable limit shown in the App. Each change may
          update the route, estimated arrival time and Fare. The Rider must
          review and confirm the revised estimate before the change takes
          effect.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          12.2 Changing Destination
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Rider may request a new destination during an Active Service where
          the feature is available. The Platform may refuse a change that is too
          close to the current drop-off, outside the Service Area, unsafe,
          unlawful, incompatible with the Partner's category or likely to
          interfere with a subsequent scheduled commitment.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          12.3 Driver Notification
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Confirmed route changes will be communicated to the Driver and
          reflected in navigation where technically possible. A Rider must not
          pressure a Driver to follow an unrecorded destination or unsafe route.
        </p>

        <h4 className="font-semibold text-dark pt-3">12.4 Waiting at Stops</h4>
        <p className="text-gray-600 leading-relaxed">
          A free stop-wait period may apply. After that period, per-minute
          waiting charges may accrue up to any disclosed maximum. The Partner
          may end or cancel the Service after the applicable limit where the
          Rider remains unavailable.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          12.5 Connectivity and Mapping Failures
        </h4>
        <p className="text-gray-600 leading-relaxed">
          If a change cannot be confirmed because of connectivity or mapping
          failure, the last confirmed route remains in effect. The parties may
          agree on a safe practical solution, but any Fare adjustment must be
          recorded through the App or support process.
        </p>

        <h4 className="font-semibold text-dark pt-3">12.6 Audit Trail</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may retain route-change events, timestamps, coordinates,
          communications and before-and-after Fare records for safety, customer
          support, fraud prevention and dispute resolution as described in the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "13. Delivery and Courier Terms",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          13.1 Sender Responsibility
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Sender is responsible for the legality, accurate description,
          declared value, packaging, labeling, size, weight, recipient details
          and suitability of every Package. The Sender warrants that they own
          the Package or are authorized to send it.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.2 Recipient Information
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Sender must provide accurate Recipient contact and location
          information and must have a lawful basis to share it. The Sender must
          inform the Recipient that VaMijo and the Partner will contact them and
          process their data to complete the Delivery.
        </p>

        <h4 className="font-semibold text-dark pt-3">13.3 Packaging</h4>
        <p className="text-gray-600 leading-relaxed">
          Packages must be securely packed to withstand ordinary transport,
          movement and weather exposure appropriate to the selected category.
          Fragile, liquid, sharp, perishable, confidential or breakable items
          require suitable protective packaging and clear disclosure. A Partner
          may refuse unsafe or inadequate packaging.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.4 Size, Weight and Declared Value
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Package must comply with the dimensions, weight and value limits
          shown for the selected Vehicle and Delivery category. Unless a higher
          amount is expressly accepted through an approved service, the default
          maximum declared value is GHS 1,000 per Package. Misstating value,
          size or weight may lead to repricing, refusal, cancellation or
          suspension.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.5 Inspection and Refusal
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo or a Partner may ask the Sender to describe, display or
          lawfully permit inspection of a Package where reasonably necessary for
          safety or compliance. Neither VaMijo nor a Partner is required to
          accept a sealed Package where its contents cannot be reasonably
          verified and there is a legitimate concern.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.6 Handover and Proof of Delivery
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Sender must hand the Package to the assigned Partner at the
          confirmed pickup point. The Recipient must be available at the
          drop-off point and may be required to provide a PIN, signature, name,
          photograph or other proof of receipt. The Recipient should not
          disclose a delivery PIN before physically receiving the Package.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.7 Door Access and Loading
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Unless the booking expressly includes door collection, door delivery,
          loading or unloading, handover occurs at a safe and accessible point
          near the Vehicle. Partners are not required to enter private premises,
          climb stairs, carry excessively heavy items or perform installation.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.8 Recipient Unavailable or Failed Delivery
        </h4>
        <p className="text-gray-600 leading-relaxed">
          If the Recipient is unavailable, unresponsive, refuses the Package or
          cannot be located using the information provided, the Partner may wait
          for the applicable period, return the Package, take it to an
          authorized holding point, or follow another lawful instruction from
          VaMijo. The Customer may be charged waiting, return, storage and
          re-delivery fees.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.9 Unclaimed Packages
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo will make reasonable efforts to notify the Sender about an
          unclaimed Package. After the published holding period, VaMijo may
          return, dispose of, surrender to authorities or otherwise deal with
          the Package in accordance with law. Hazardous, illegal or perishable
          items may be dealt with immediately where necessary for safety.
        </p>

        <h4 className="font-semibold text-dark pt-3">13.10 Delivery Timing</h4>
        <p className="text-gray-600 leading-relaxed">
          Delivery times are estimates unless a written service-level agreement
          states otherwise. Traffic, weather, safety checks, Recipient
          availability, incorrect instructions, Partner availability and events
          beyond reasonable control may affect timing.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.11 Loss, Damage or Tampering
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Sender should inspect packaging at handover and the Recipient
          should inspect visible condition at receipt. A claim should be
          reported promptly with photographs, receipts, declared value and other
          evidence. VaMijo may investigate and facilitate communication, but an
          independent Partner remains responsible for their own proven
          negligence or misconduct to the extent required by law.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.12 Package Insurance
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Unless a booking expressly states otherwise, VaMijo does not provide
          cargo insurance. The Sender should obtain appropriate insurance for
          high-value, fragile, confidential or commercially important items. No
          statement in these Terms limits rights available under an applicable
          insurance policy or non-excludable law.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          13.13 Cash-on-delivery and Collections
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner must not collect payment for goods, purchase goods, handle
          cash-on-delivery or act as a purchasing agent unless an authorized
          VaMijo feature expressly supports it. Unauthorized side arrangements
          are at the parties' own risk and may lead to suspension.
        </p>
      </div>
    ),
  },
  {
    title: "14. Driver and Delivery Partner Terms",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          14.1 Intended Independent Relationship
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The relationship between VaMijo and a Partner is intended to be that
          of independent contracting parties, subject to the actual facts and
          applicable law. A Partner is not authorized to bind VaMijo, employ
          staff on VaMijo's behalf or represent themselves as a VaMijo employee.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.2 Control of Availability
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Subject to safety, service standards and any fleet arrangement, a
          Partner chooses when and where to go online and may accept or reject
          requests. VaMijo does not guarantee requests, hours, revenue, profit
          or minimum earnings.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.3 Personal Service and Identity
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Only the approved Partner may use the Partner Account. Account
          sharing, rented Accounts, identity substitution, unauthorized
          assistants and allowing another person to provide a Service under your
          profile are strictly prohibited.
        </p>

        <h4 className="font-semibold text-dark pt-3">14.4 Active Vehicle</h4>
        <p className="text-gray-600 leading-relaxed">
          Where multiple Vehicles are registered, the Partner must select the
          Vehicle actually being used before going online. The Vehicle presented
          to a Customer must match the details shown in the App. A change may
          require approval before requests resume.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.5 Licenses and Compliance
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Partners must maintain all legally required driving or riding
          licenses, commercial permits, registrations, inspections,
          road-worthiness certificates, insurance, tax registrations, union or
          operator memberships and other approvals. VaMijo may restrict access
          before or upon expiry and may verify documents at any time.
        </p>

        <h4 className="font-semibold text-dark pt-3">14.6 Vehicle Condition</h4>
        <p className="text-gray-600 leading-relaxed">
          The Vehicle must be clean, safe, roadworthy, adequately fueled or
          charged, free from material defects, fitted with required safety
          equipment and appropriate for the selected category. Partners must
          complete reasonable daily checks and promptly address defects or
          recalls.
        </p>

        <h4 className="font-semibold text-dark pt-3">14.7 Vehicle Insurance</h4>
        <p className="text-gray-600 leading-relaxed">
          Partners must maintain insurance suitable for the lawful commercial
          use of the Vehicle and the Services provided, including passenger or
          goods carriage where required. VaMijo's verification of an insurance
          document is not a guarantee of coverage, validity or claim acceptance.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.8 Safe and Lawful Driving
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Partners must obey road traffic laws, speed limits, seat-belt and
          helmet rules, mobile-phone restrictions, loading limits and lawful
          directions. Partners must not drive while tired, ill, distracted or
          under the influence of alcohol, illegal drugs or impairing medication.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.9 Professional Conduct
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Partners must provide courteous, non-discriminatory and professional
          service; protect Customer and Package information; avoid unnecessary
          detours; use the confirmed route unless safety or Customer instruction
          requires otherwise; and not solicit off-platform bookings or personal
          payments intended to bypass VaMijo fees.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.10 Acceptance and Completion
        </h4>
        <p className="text-gray-600 leading-relaxed">
          After accepting a request, a Partner must make reasonable progress to
          the pickup point, communicate delays, verify the correct Customer,
          Rider, Sender or Package, start and complete the Service accurately in
          the App, and not falsely mark arrival, pickup, completion or
          cancellation.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.11 Cash and Payment Handling
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner must collect only the Fare or authorized amount shown.
          Partners are responsible for safeguarding cash and reconciling
          transactions. They must not retain duplicate electronic and cash
          payment, request a Customer's PIN or charge an undisclosed fee.
        </p>

        <h4 className="font-semibold text-dark pt-3">14.12 Taxes and Costs</h4>
        <p className="text-gray-600 leading-relaxed">
          Partners are responsible for fuel, data, devices, Vehicle acquisition,
          maintenance, insurance, permits, fines, taxes and other operating
          expenses unless a signed Fleet or Business agreement states otherwise.
        </p>

        <h4 className="font-semibold text-dark pt-3">14.13 No Circumvention</h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner must not use Customer information obtained through VaMijo to
          arrange repeated off-platform services, evade fees, compete unfairly,
          market unrelated products or contact a User for personal reasons. This
          does not prevent a lawful emergency communication or contact
          reasonably necessary to complete or resolve a Service.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          14.14 Audits and Inspections
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may require periodic document checks, Vehicle inspections,
          training, safety assessments, identity verification, device checks and
          interviews. Failure to cooperate may result in restriction until the
          requirement is completed.
        </p>
      </div>
    ),
  },
  {
    title: "15. Driver Access Plans, Commissions and Earnings",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">15.1 Available Plans</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may offer different Partner access plans. Current plan names,
          fees, percentages, caps, cycle start and end times, eligible
          categories and payment methods will be displayed in the Partner App
          before selection.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          15.2 Daily Subscription Plan
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Under the Daily Subscription Plan, a Partner pays a fixed
          platform-access fee for the stated cycle and, unless otherwise
          disclosed, retains the trip or delivery earnings generated during that
          cycle without a per-Service VaMijo commission. Payment does not
          guarantee requests or earnings and does not waive taxes,
          payment-provider charges, penalties, fleet deductions or other
          separately disclosed amounts.
        </p>

        <h4 className="font-semibold text-dark pt-3">15.3 Flexi Plan</h4>
        <p className="text-gray-600 leading-relaxed">
          Under the Flexi Plan, VaMijo deducts the disclosed commission
          percentage from each qualifying completed Service until the commission
          cap for that cycle is reached. After the cap is reached, no additional
          VaMijo platform commission is deducted from qualifying Services during
          the remainder of that cycle, subject to corrections, refunds,
          charge-backs and separately disclosed fees.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          15.4 Plan Selection and Switching
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner may select or change a plan only at the times permitted in
          the App, normally at the start or end of the next access cycle. A plan
          change does not retroactively alter charges from a completed or
          current cycle unless VaMijo corrects an error.
        </p>

        <h4 className="font-semibold text-dark pt-3">15.5 Payment Failure</h4>
        <p className="text-gray-600 leading-relaxed">
          If a fixed access fee cannot be collected, the Partner may be unable
          to receive requests under that plan until payment succeeds or another
          eligible plan is selected. VaMijo may provide Wallet, mobile-money,
          USSD or other approved payment option.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          15.6 Earnings Statements and Adjustments
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Partner App may display gross Fare, cash collected, platform fees,
          commissions, incentives, refunds, taxes, charge-backs, fleet
          deductions and net payable amounts. VaMijo may correct errors, reverse
          fraudulent or duplicate earnings, and recover amounts linked to
          cancelled, disputed or unpaid Services after review.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          15.7 Withdrawals and Settlements
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Electronic earnings may be settled to the Partner Wallet, mobile-money
          account, bank account or other approved destination. Settlement times,
          minimum amounts, identity checks, limits and charges may depend on the
          payment provider. A pending investigation, chargeback, court order or
          legal requirement may delay settlement.
        </p>

        <h4 className="font-semibold text-dark pt-3">15.8 Incentives</h4>
        <p className="text-gray-600 leading-relaxed">
          Bonuses, guaranteed earnings and performance incentives are governed
          by the specific promotion rules. They may depend on time online,
          location, acceptance, completion, cancellation, fraud checks and other
          disclosed conditions. Manipulated, collusive or unsafe activity does
          not qualify.
        </p>
      </div>
    ),
  },
  {
    title: "16. Fleet Owner Terms",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          16.1 Authority and Records
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Fleet Owner warrants that it owns, leases or lawfully controls each
          registered Vehicle and is authorized to enrol each Partner. It must
          maintain accurate ownership, driver assignment, insurance,
          maintenance, permit and contact records.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          16.2 Relationship with Drivers
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Fleet Owner is solely responsible for its employment, lease,
          hire-purchase, revenue-sharing or other relationship with fleet
          drivers, including wages, benefits, taxes, disciplinary procedures and
          Vehicle obligations. VaMijo is not a party to that relationship unless
          a signed agreement expressly states otherwise.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          16.3 Fleet Administration
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Fleet Administrators may assign Vehicles, view operational data,
          manage settlements and suspend fleet access within permissions. They
          must use personal data only for legitimate fleet administration and
          protect login credentials and reports.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          16.4 Joint Responsibility
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Fleet Owner may be responsible for amounts, compliance failures,
          misrepresentations, insurance gaps or Vehicle defects attributable to
          Vehicles or Partners under its control. VaMijo may restrict the
          individual Account, Vehicle or entire fleet depending on the risk.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          16.5 Removal from Fleet
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Fleet Owner must promptly notify VaMijo when a driver or Vehicle is
          no longer authorized. A Partner may request review of a disputed fleet
          association. Outstanding balances and contractual obligations between
          the Fleet Owner and Partner remain their responsibility.
        </p>
      </div>
    ),
  },
  {
    title: "17. Business Account Terms",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          17.1 Organization Authority
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The person opening or administering a Business Account confirms that
          they have authority to bind and act for the organization. VaMijo may
          request incorporation, registration, tax, address, identity and
          authorization documents before approval.
        </p>

        <h4 className="font-semibold text-dark pt-3">17.2 Authorized Users</h4>
        <p className="text-gray-600 leading-relaxed">
          The Business Account may invite employees, contractors or other
          authorized users. The organization is responsible for user
          permissions, budgets, ride or delivery policies, approval workflows
          and prompt removal of access.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          17.3 Business Use and Liability
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The organization is responsible for Services requested under its
          Business Account, subject to configured policies and any fraudulent or
          unauthorized use promptly reported to VaMijo. Individual users remain
          responsible for their own conduct and compliance with safety and
          community standards.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          17.4 Billing and Credit
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Business Accounts may use prepaid Wallets, approved payment methods,
          invoices or credit terms. Credit is subject to approval, limits, due
          dates and possible security or deposits. VaMijo may suspend billing
          privileges for overdue or disputed amounts while permitting payment by
          another method.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          17.5 Reports and Records
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Business Administrators may access booking, user, expense, delivery,
          fleet and transaction reports. The organization must use reports
          lawfully, restrict access to those with a need to know and comply with
          applicable data-protection and employment obligations.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          17.6 Enterprise Agreements
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A signed enterprise, service-level, fleet, executive transport or
          logistics agreement may supplement these Terms. If there is a
          conflict, the signed agreement prevails for the subject matter it
          expressly covers.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          17.7 Employee Personal Use
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The organization must clearly communicate when a booking is personal
          and who is responsible for payment. VaMijo is not responsible for
          internal reimbursement disputes between an organization and its users.
        </p>
      </div>
    ),
  },
  {
    title: "18. Cancellations, Failed Services and Refunds",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          18.1 Customer Cancellations
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Customer may cancel before or after matching. A cancellation charge
          may apply after a Partner accepts, begins travelling, arrives, waits
          beyond the free period, incurs an external charge, or begins the
          Service. The applicable amount will be displayed or calculated under
          the current policy.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.2 Partner Cancellations
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner may cancel for a legitimate reason, including safety risk,
          prohibited Package, incorrect category, Vehicle failure, inaccessible
          location, Customer or Recipient unavailability, abusive conduct or
          legal restriction. Partners must select the accurate reason and must
          not misuse cancellations to manipulate pricing or request allocation.
        </p>

        <h4 className="font-semibold text-dark pt-3">18.3 No-show</h4>
        <p className="text-gray-600 leading-relaxed">
          A no-show may be recorded where the Partner arrives at the confirmed
          location, makes reasonable contact attempts, waits for the applicable
          period and the Rider, Sender or Recipient cannot be found or is not
          ready. A no-show charge, full Fare, return charge or other disclosed
          amount may apply depending on the Service.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.4 Failed Electronic Payment
        </h4>
        <p className="text-gray-600 leading-relaxed">
          If payment fails after a Service, the amount remains due. VaMijo may
          retry the authorized payment method, apply available Wallet credits,
          restrict the Account, or require settlement before another booking.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.5 Refund Eligibility
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A refund or Fare adjustment may be considered for a duplicate charge,
          verifiable platform billing error, electronic payment collected for a
          Service that did not commence, unauthorized transaction not caused by
          the User, approved cancellation, material service failure attributable
          to VaMijo, or another circumstance required by law or the published
          Refund Policy.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.6 Generally Non-refundable Circumstances
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Completed Services are generally non-refundable merely because the
          User changes their mind or disagrees with a correctly disclosed Fare.
          A refund may be declined where the issue results from incorrect
          booking information, Recipient unavailability, unsafe or prohibited
          items, inadequate packaging, User-caused delay, undisclosed package
          size or value, abusive conduct, an off-platform arrangement, or a
          valid cancellation/no-show charge.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.7 Submitting a Request
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A refund request should be submitted through in-app support or the
          official support email within forty-eight (48) hours of the incident,
          or within any longer period required by law or stated in the Refund
          Policy. The request should include the booking or transaction
          reference, explanation and supporting evidence.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.8 Review and Processing
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may review platform logs, payment records, GPS data,
          communications, photographs and Partner or Customer statements.
          Approved refunds will normally be returned to the original payment
          method or, where that is not technically possible, to an approved
          Wallet or alternative method. Payment-provider processing times may
          apply.
        </p>

        <h4 className="font-semibold text-dark pt-3">18.9 Cash Transactions</h4>
        <p className="text-gray-600 leading-relaxed">
          For a cash-paid Service, VaMijo may facilitate a credit or other
          remedy where a verified VaMijo error occurred, but may not be able to
          reverse cash directly. A direct cash dispute between a Customer and
          independent Partner may require evidence and may remain a dispute
          between those parties.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          18.10 No Double Recovery
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A User may not receive both a payment-provider charge back and a
          VaMijo refund for the same amount. VaMijo may reverse a duplicate
          credit after notice.
        </p>
      </div>
    ),
  },
  {
    title: "19. Promotions, Credits, Referrals and Incentives",
    content: (
      <div className="text-gray-600 space-y-2 leading-relaxed">
        <p>
          <span className="font-medium text-dark pr-1">19.1</span>
          Promotions, free rides, discounts, subscription trials, referral
          rewards, loyalty points and Partner incentives may have separate
          eligibility, location, time, usage, expiry and redemption rules.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">19.2</span>
          Promotional value is not cash, may not be transferred, sold or
          combined unless expressly permitted, and may be limited to specified
          categories or payment methods.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">19.3</span>
          VaMijo may withhold or reverse a reward obtained through duplicate
          Accounts, self-referral, collusion, fake bookings, payment abuse, GPS
          manipulation, cancellation manipulation or other fraudulent conduct.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">19.4</span>A free trial
          will not convert into a paid plan unless the App clearly discloses the
          conversion, price, cycle and cancellation method before the User
          confirms. Where automatic renewal is offered, the User will receive
          the disclosures and controls required by applicable law.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">19.5</span>
          VaMijo may end or modify a promotion prospectively, but will honour a
          properly earned reward unless the promotion rules, fraud, legal
          requirements or technical impossibility justify otherwise.
        </p>
      </div>
    ),
  },
  {
    title: "20. Safety, Emergencies, Accidents and Insurance",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          20.1 Shared Responsibility
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Safety is a shared responsibility. Users must exercise reasonable
          care, follow applicable law and comply with lawful safety
          instructions. No technology feature eliminates the risks inherent in
          road transport, public interaction or goods carriage.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          20.2 Emergency Services
        </h4>
        <p className="text-gray-600 leading-relaxed">
          In an emergency or immediate danger, contact the Ghana Police Service,
          Ghana National Fire Service, National Ambulance Service or other
          appropriate emergency authority before contacting VaMijo. In-app
          safety tools are supplemental and may depend on connectivity.
        </p>

        <h4 className="font-semibold text-dark pt-3">20.3 Accidents</h4>
        <p className="text-gray-600 leading-relaxed">
          Following a crash or incident, the Partner should stop where safe,
          assist as required by law, contact emergency and law-enforcement
          services where appropriate, exchange required information, preserve
          evidence and report the incident to VaMijo promptly. Users must
          cooperate with reasonable investigations and insurance claims.
        </p>

        <h4 className="font-semibold text-dark pt-3">20.4 Insurance Claims</h4>
        <p className="text-gray-600 leading-relaxed">
          Claims relating to a Partner's Vehicle or driving may be handled by
          the Partner's or Fleet Owner's insurer. VaMijo may share relevant
          records with Users, insurers, regulators and authorities where lawful,
          but does not control claim acceptance or settlement.
        </p>

        <h4 className="font-semibold text-dark pt-3">20.5 Safety Checks</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may use identity verification, document expiry alerts, route
          monitoring, fraud detection, ratings, incident reports, vehicle
          inspections, training and other safety measures. These measures reduce
          risk but do not guarantee a User's identity, conduct, reliability or
          safety.
        </p>
      </div>
    ),
  },
  {
    title: "21. Community Standards and Prohibited Conduct",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          Users must not use VaMijo to:
        </p>
        <ul className="list-inside text-gray-600 space-y-1 pt-2">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            break any law, licence condition, court order or regulatory
            requirement;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            commit fraud, theft, money laundering, payment abuse, identity fraud
            or account trading;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            harass, threaten, assault, stalk, discriminate against or sexually
            exploit another person;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            exploit or endanger a child or vulnerable person;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            arrange unlawful transport, courier or commercial motorcycle
            activity;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            carry illegal, stolen, dangerous, hazardous or prohibited items;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            interfere with the App, use malware, scrape data, reverse engineer
            security controls or gain unauthorized access;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            manipulate GPS, routes, Fares, waiting time, ratings, cancellations,
            incentives or matching;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            create false bookings, collude with another User or simulate
            Services to generate earnings or rewards;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            solicit off-platform payment or Services to avoid disclosed VaMijo
            fees;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            use personal information obtained through VaMijo for unrelated
            marketing, harassment or surveillance;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            publish false, defamatory, obscene, hateful or privacy-invasive
            content;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            impersonate VaMijo, a regulator, another User or any other person;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            cause unreasonable nuisance, vehicle damage, contamination or safety
            risk.
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          Serious conduct may be reported to law-enforcement, transport,
          courier, data-protection, payment, insurance or other authorities
          where permitted or required by law.
        </p>
      </div>
    ),
  },
  {
    title: "22. Ratings, Reviews, Matching and Platform Integrity",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">22.1 Ratings</h4>
        <p className="text-gray-600 leading-relaxed">
          Customers and Partners may rate each other and provide feedback after
          a Service. Ratings should be honest, relevant and based on first-hand
          experience. VaMijo may remove content that is fraudulent, abusive,
          discriminatory, irrelevant or violates these Terms.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          22.2 Service Quality Metrics
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may use ratings, acceptance, cancellations, completion,
          lateness, safety reports, complaints, document compliance and other
          metrics to support matching, coaching, incentives, tiering, quality
          assurance and account review.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          22.3 No Guaranteed Ranking
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A Partner's location, tier, subscription status or rating may affect
          request priority, but no metric guarantees a request, rank, income or
          particular Customer type. VaMijo may adjust matching logic to improve
          safety, fairness, reliability or regulatory compliance.
        </p>
      </div>
    ),
  },
  {
    title: "23. Communications and Electronic Records",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          23.1 Operational Communications
        </h4>
        <p className="text-gray-600 leading-relaxed">
          By using VaMijo, you agree to receive communications reasonably
          necessary for account verification, bookings, receipts, payment,
          security, safety, support, policy changes, legal notices and service
          administration through push notification, in-app message, SMS, email,
          telephone or other available channels.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          23.2 Marketing Communications
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Marketing, promotional or newsletter communications will be sent in
          accordance with the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>{" "}
          and applicable consent requirements. You may opt out of marketing
          without opting out of essential operational or legal messages.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          23.3 Call and Message Features
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may provide masked calling, in-app chat or other contact tools.
          Communications may be logged or monitored for safety, quality and
          dispute resolution where permitted by law and disclosed in the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>{" "}
          or at the time of collection.
        </p>

        <h4 className="font-semibold text-dark pt-3">23.4 Records</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo's electronic records, including timestamps, GPS logs, payment
          records and in-app confirmations, are admissible evidence to the
          extent permitted by law, but a User may present contrary evidence.
        </p>
      </div>
    ),
  },
  {
    title: "24. Privacy and Data Protection",
    content: (
      <div className="text-gray-600 space-y-2 leading-relaxed">
        <p>
          <span className="font-medium text-dark pr-1">24.1</span>
          VaMijo processes personal information in accordance with the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            VaMijo Privacy Policy
          </a>{" "}
          and applicable data-protection law. The{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>{" "}
          explains the categories of information collected, purposes, lawful
          bases, sharing, retention, security, international transfers and User
          rights.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">24.2</span>
          Location information is central to ride and Delivery matching,
          navigation, Fare calculation, safety, fraud prevention and live
          service monitoring. Drivers and Delivery Partners may need to enable
          background location while online or performing Services.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">24.3</span>
          VaMijo does not currently track Users across third-party apps or
          websites for targeted advertising as defined by Apple's App Tracking
          Transparency framework, as stated in the{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>
          .
        </p>
        <p>
          <span className="font-medium text-dark pr-1">24.4</span>A User who
          provides information about another person, including a Rider,
          Recipient, employee or fleet driver, confirms that they are authorized
          to do so and have provided any required notice.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">24.5</span>
          Privacy requests should be directed to{" "}
          <a
            href="mailto:privacy@vamijogh.com"
            className="text-primary hover:underline"
          >
            privacy@vamijogh.com
          </a>
          . Account deletion or consent withdrawal may limit Services and does
          not affect lawful processing already completed or required for legal,
          safety, payment or dispute purposes.
        </p>
      </div>
    ),
  },
  {
    title: "25. User Content and Feedback",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">25.1 Your Content</h4>
        <p className="text-gray-600 leading-relaxed">
          You retain ownership of photographs, reviews, messages, delivery
          notes, documents and other content you submit, subject to the rights
          granted below and the rights of third parties.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          25.2 License to Operate the Service
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You grant VaMijo a non-exclusive, worldwide, royalty-free licence to
          host, store, reproduce, adapt, transmit and display your content only
          as reasonably necessary to operate, support, secure, improve and
          legally comply with the Services. This licence ends when the content
          is no longer required, subject to retention and backup obligations.
        </p>

        <h4 className="font-semibold text-dark pt-3">25.3 Content Standards</h4>
        <p className="text-gray-600 leading-relaxed">
          You must have the right to submit content and must not upload
          unlawful, infringing, malicious, misleading, discriminatory, obscene
          or privacy-invasive material. VaMijo may remove or restrict content
          that violates these Terms or law.
        </p>
      </div>
    ),
  },
  {
    title: "26. Intellectual Property and App License",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">26.1 Ownership</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo and Afrifanom own the Platform, software, databases, designs,
          trademarks, logos, content and related intellectual property,
          excluding User Content and third-party materials.
        </p>

        <h4 className="font-semibold text-dark pt-3">26.2 Limited License</h4>
        <p className="text-gray-600 leading-relaxed">
          Subject to these Terms, VaMijo grants you a limited, personal,
          revocable, non-exclusive, non-transferable licence to install and use
          the App on supported devices solely to access the Services for their
          intended purpose.
        </p>

        <h4 className="font-semibold text-dark pt-3">26.3 Restrictions</h4>
        <p className="text-gray-600 leading-relaxed">
          You must not copy, modify, distribute, sell, lease, sublicense,
          reverse engineer, decompile, scrape, frame, mirror, bypass security,
          create derivative works from or commercially exploit the Platform
          except where applicable law expressly permits and cannot be excluded.
        </p>

        <h4 className="font-semibold text-dark pt-3">26.4 Brand Use</h4>
        <p className="text-gray-600 leading-relaxed">
          Partners and Fleet Owners may use approved VaMijo decals, uniforms or
          marketing materials only in accordance with current brand guidelines
          and while authorized. They must remove or stop using them when
          authorization ends.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          26.5 Infringement Notices
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A person who believes content on VaMijo infringes intellectual
          property rights may contact{" "}
          <a
            href="mailto:support@vamijogh.com"
            className="text-primary hover:underline"
          >
            support@vamijogh.com
          </a>{" "}
          with sufficient details to identify the work, content, rights owner,
          contact information and requested action. VaMijo may remove content
          and request further evidence.
        </p>
      </div>
    ),
  },
  {
    title: "27. Third-Party Services and App Stores",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          27.1 Third-party Technology
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may rely on mapping, navigation, cloud hosting, identity
          verification, communications, analytics, payment, insurance and
          customer-support providers. Their availability and terms may affect
          features. VaMijo remains responsible for selecting and managing
          providers as required by law but does not control independent
          third-party outages.
        </p>

        <h4 className="font-semibold text-dark pt-3">27.2 External Links</h4>
        <p className="text-gray-600 leading-relaxed">
          Links to third-party websites or services are provided for
          convenience. VaMijo is not responsible for independent content,
          products, security or privacy practices. You should review the third
          party's terms and privacy notice.
        </p>

        <h4 className="font-semibold text-dark pt-3">27.3 Apple and Google</h4>
        <p className="text-gray-600 leading-relaxed">
          These Terms are between you and Afrifanom Limited, not Apple Inc.,
          Google LLC or another app-store provider. The app-store provider is
          not responsible for VaMijo or its support, maintenance, claims or
          content, except for any obligations it expressly assumes under its own
          terms. Your use of the App must also comply with the applicable store
          rules.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          27.4 Device and Telecommunications Costs
        </h4>
        <p className="text-gray-600 leading-relaxed">
          You are responsible for a compatible device, data connection, airtime,
          operating-system updates and related costs. Connectivity may affect
          matching, tracking, communications, payment and safety features.
        </p>
      </div>
    ),
  },
  {
    title: "28. Availability, Maintenance and Changes to Services",
    content: (
      <div className="text-gray-600 space-y-2 leading-relaxed">
        <p>
          <span className="font-medium text-dark pr-1">28.1</span>
          VaMijo may maintain, update, test, suspend, replace or discontinue a
          feature, category or Service for safety, security, legal, commercial
          or technical reasons.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">28.2</span>
          VaMijo will use reasonable efforts to provide notice of planned
          interruptions or permanent discontinuation where practicable, but
          emergency maintenance or legal restrictions may require immediate
          action.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">28.3</span>
          Beta, pilot or experimental features may be less reliable, may change
          without notice and may be subject to additional terms. Participation
          is voluntary unless required for a Partner compliance process.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">28.4</span>
          VaMijo does not guarantee uninterrupted, error-free or universally
          compatible access. Where a platform error causes an incorrect charge
          or prevents a paid Service, the remedy provisions in these Terms and
          the Refund Policy apply.
        </p>
      </div>
    ),
  },
  {
    title: "29. Suspension, Restriction, Deactivation and Termination",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          29.1 Reasons for Action
        </h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may warn, restrict a feature, place an Account under review,
          temporarily suspend, deactivate or terminate access where reasonably
          necessary because of:
        </p>
        <ul className="list-inside text-gray-600 space-y-1 pt-2">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>a breach of
            these Terms, Community Guidelines or a service-specific policy;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            fraud, identity mismatch, account sharing, payment abuse or
            manipulation;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            expired, invalid or missing licenses, insurance, road-worthiness or
            other required documents;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            serious or repeated safety incidents, cancellations, non-movement,
            false completion, low ratings or service-quality failures;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            non-payment, negative balances, charge-backs or unpaid fees;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            abusive, discriminatory, threatening, unlawful or dangerous conduct;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            prohibited Packages, illegal activity or a regulator, court, insurer
            or law-enforcement request;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>a
            cyber-security, privacy, platform-integrity or public-safety risk;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>a Fleet Owner's
            loss of authority over a Vehicle or driver;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            cessation of a Service category or legal inability to continue
            providing access.
          </li>
        </ul>

        <h4 className="font-semibold text-dark pt-3">29.2 Immediate Action</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo may act immediately and without advance notice where delay
          could create a safety, fraud, legal, financial, privacy or security
          risk. Where appropriate, an Active Service may be allowed to end
          safely before restriction takes effect.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          29.3 Notice and Reasons
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Where lawful and reasonably safe, VaMijo will provide the reason or
          category of reason, the effect of the action, any corrective steps and
          the review method. VaMijo may withhold details that would compromise
          another person's privacy, a confidential investigation, fraud controls
          or legal obligations.
        </p>

        <h4 className="font-semibold text-dark pt-3">29.4 Review and Appeal</h4>
        <p className="text-gray-600 leading-relaxed">
          A User may request review through support and provide relevant
          documents or explanation. VaMijo will assess the Account using
          available evidence and may uphold, modify or reverse the action.
          Serious permanent deactivation decisions should receive a second-level
          review where practicable.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          29.5 Effect of Termination
        </h4>
        <p className="text-gray-600 leading-relaxed">
          On termination, the licence to use VaMijo ends and outstanding amounts
          remain due. VaMijo may retain records, settle valid earnings, process
          refunds, investigate incidents and enforce rights as permitted by law.
          Termination does not affect provisions intended to survive, including
          payment, liability, intellectual property, privacy, dispute and
          indemnity clauses.
        </p>

        <h4 className="font-semibold text-dark pt-3">29.6 User Termination</h4>
        <p className="text-gray-600 leading-relaxed">
          You may stop using VaMijo and request Account closure at any time,
          subject to outstanding Services, balances, investigations and
          contractual commitments.
        </p>
      </div>
    ),
  },
  {
    title: "30. Disclaimers",
    content: (
      <div className="text-gray-600 space-y-2 leading-relaxed">
        <p>
          <span className="font-medium text-dark pr-1">30.1</span>
          To the fullest extent permitted by law, the Platform is provided on an
          "as available" basis. VaMijo does not warrant that matching, maps,
          arrival times, routes, Fares, ratings, Partner availability or
          third-party services will always be accurate, uninterrupted or
          error-free.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">30.2</span>
          Arrival, journey and Delivery times are estimates and may be affected
          by traffic, weather, roadworks, security events, network failure,
          Partner supply and other circumstances.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">30.3</span>
          VaMijo performs onboarding and compliance checks but cannot guarantee
          the identity, conduct, solvency, reliability, driving ability or
          intentions of every User at all times.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">30.4</span>
          VaMijo is not responsible for a side agreement, cash collection,
          purchase, route, Service or payment arranged outside the Platform or
          contrary to these Terms.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">30.5</span>
          Nothing in this clause excludes any warranty, duty or consumer
          protection that applies by law and cannot be excluded.
        </p>
      </div>
    ),
  },
  {
    title: "31. Limitation of Liability",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          31.1 Non-excludable Liability
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Nothing in these Terms excludes or limits liability for fraud,
          fraudulent misrepresentation, death or personal injury caused by
          negligence, wilful misconduct, gross negligence where it cannot
          lawfully be limited, breach of data-protection obligations that cannot
          be limited, or any other liability that applicable law prohibits
          VaMijo from excluding or limiting.
        </p>

        <h4 className="font-semibold text-dark pt-3">31.2 Indirect Loss</h4>
        <p className="text-gray-600 leading-relaxed">
          To the fullest extent permitted by law, VaMijo is not liable for
          indirect, incidental, special, punitive or consequential loss; loss of
          profit, revenue, goodwill, opportunity, data or anticipated savings;
          or business interruption, except where such loss was reasonably
          foreseeable and cannot lawfully be excluded.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          31.3 Independent Partner Conduct
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Where an independent Partner provides the underlying Service, the
          Partner is responsible for their own driving, handling, conduct, legal
          compliance and proven negligence. VaMijo is not automatically liable
          for the Partner's acts or omissions, but remains liable for VaMijo's
          own obligations and conduct.
        </p>

        <h4 className="font-semibold text-dark pt-3">31.4 User-Caused Loss</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo is not liable to the extent a loss results from inaccurate
          information, failure to follow safety instructions, prohibited
          conduct, inadequate packaging, Recipient unavailability, failure to
          secure property, off-platform arrangements or another act or omission
          of the claiming User.
        </p>

        <h4 className="font-semibold text-dark pt-3">31.5 Liability Cap</h4>
        <p className="text-gray-600 leading-relaxed">
          Subject to clause 31.1 and to the fullest extent permitted by law,
          VaMijo's total aggregate liability to a User for claims arising from
          the same event or series of connected events will not exceed the
          greater of: (a) GHS 500; and (b) the total platform or service fees
          paid by that User to VaMijo during the six (6) months immediately
          before the event. This cap does not limit a direct claim against an
          independent Partner or insurer where applicable.
        </p>

        <h4 className="font-semibold text-dark pt-3">31.6 Package Claims</h4>
        <p className="text-gray-600 leading-relaxed">
          For a Package loss or damage claim against VaMijo, any liability is
          further limited to the properly declared and evidenced value of the
          Package, subject to the cap above, unless VaMijo expressly accepted a
          higher insured or guaranteed value in writing or liability cannot
          lawfully be limited.
        </p>

        <h4 className="font-semibold text-dark pt-3">31.7 Mitigation</h4>
        <p className="text-gray-600 leading-relaxed">
          A person claiming loss must take reasonable steps to reduce it and
          provide timely evidence. VaMijo is not responsible for avoidable loss
          caused by unreasonable delay or failure to mitigate.
        </p>
      </div>
    ),
  },
  {
    title: "32. Indemnity",
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed">
          To the extent permitted by law, you agree to indemnify and hold
          harmless Afrifanom, VaMijo and their directors, officers, employees
          and agents from third-party claims, penalties, reasonable legal costs
          and losses arising from your:
        </p>
        <ul className="list-inside text-gray-600 space-y-1 pt-2">
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            illegal or fraudulent use of the Services;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            material breach of these Terms;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            infringement of another person's rights;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            prohibited or falsely described Package;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            unauthorized use of another person's information or payment method;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            negligent or wilful damage to property or injury to another person;
          </li>
          <li>
            <span className="font-medium text-dark pr-2">✓</span>
            failure, as a Partner or Fleet Owner, to maintain required licences,
            insurance, tax compliance, Vehicle condition or authority.
          </li>
        </ul>
        <p className="pt-2 text-gray-600 leading-relaxed">
          This indemnity does not require you to indemnify VaMijo for VaMijo's
          own negligence, fraud, wilful misconduct or liability that cannot
          lawfully be transferred.
        </p>
      </div>
    ),
  },
  {
    title: "33. Complaints and Dispute Resolution",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          33.1 Contact Support First
        </h4>
        <p className="text-gray-600 leading-relaxed">
          A User should first submit a complaint through in-app Help & Support
          or{" "}
          <a
            href="mailto:support@vamijogh.com"
            className="text-primary hover:underline"
          >
            support@vamijogh.com
          </a>
          , including the relevant booking, payment or Account reference and
          supporting information. VaMijo will make reasonable efforts to
          acknowledge, investigate and respond within an appropriate period
          based on complexity and applicable regulatory requirements.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          33.2 Good-faith Resolution
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The parties will attempt in good faith to resolve a dispute through
          direct discussion. Either party may request escalation to a
          supervisor, compliance officer or designated dispute-resolution
          representative.
        </p>

        <h4 className="font-semibold text-dark pt-3">33.3 Mediation</h4>
        <p className="text-gray-600 leading-relaxed">
          If a dispute is not resolved through support, the parties may agree to
          mediation in Accra under the Alternative Dispute Resolution Act, 2010
          (Act 798) or another mutually agreed process. Mediation does not
          prevent urgent court relief or a regulatory complaint.
        </p>

        <h4 className="font-semibold text-dark pt-3">33.4 Courts</h4>
        <p className="text-gray-600 leading-relaxed">
          Unless the parties agree in writing to arbitration or another lawful
          process, the courts of competent jurisdiction in Ghana will have
          jurisdiction. A consumer may also use any court or complaint mechanism
          available under mandatory law.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          33.5 Regulatory Complaints
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Nothing in these Terms prevents a User from contacting an applicable
          regulator, including the Data Protection Commission for privacy
          matters, the Postal and Courier Services Regulatory Commission for
          regulated courier matters, or the relevant payment provider or Bank of
          Ghana channel for payment matters.
        </p>

        <h4 className="font-semibold text-dark pt-3">33.6 Time and Evidence</h4>
        <p className="text-gray-600 leading-relaxed">
          Users should raise operational and payment issues promptly so that
          GPS, communication, payment and other records remain available. A
          contractual reporting deadline does not remove a statutory right that
          applies for a longer period.
        </p>
      </div>
    ),
  },
  {
    title: "34. Governing Law",
    content: (
      <p className="text-gray-600 leading-relaxed">
        These Terms and any non-contractual obligations arising from them are
        governed by the laws of the Republic of Ghana, including applicable
        electronic transactions, data protection, payment services, road
        traffic, courier, cyber-security, intellectual property and alternative
        dispute-resolution laws and regulation.
      </p>
    ),
  },
  {
    title: "35. Changes to these Terms",
    content: (
      <div className="text-gray-600 space-y-2 leading-relaxed">
        <p>
          <span className="font-medium text-dark pr-1">35.1</span>
          VaMijo may update these Terms to reflect legal, regulatory, safety,
          security, operational, product or commercial changes.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">35.2</span>
          The "Last Updated" date will be revised. Material changes may also be
          communicated through the App, email, SMS or website before they take
          effect where practicable or required by law.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">35.3</span>
          Continued use after the effective date constitutes acceptance where
          permitted by law. If you do not agree, you must stop using the
          affected Services and may close your Account, subject to outstanding
          obligations.
        </p>
        <p>
          <span className="font-medium text-dark pr-1">35.4</span>A change will
          not retroactively alter a completed transaction unless required by
          law, agreed by the parties or necessary to correct an error or fraud.
        </p>
      </div>
    ),
  },
  {
    title: "36. General Provisions",
    content: (
      <div>
        <h4 className="font-semibold text-dark pt-1">
          36.1 Order of Precedence
        </h4>
        <p className="text-gray-600 leading-relaxed">
          If documents conflict, the following order generally applies: (a) a
          signed enterprise, fleet or service agreement; (b) booking-specific
          terms or a confirmed quote; (c) service-specific terms and policies;
          (d) these Terms. The{" "}
          <a
            href="/privacy"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </a>{" "}
          controls specifically for personal-information processing.
        </p>

        <h4 className="font-semibold text-dark pt-3">36.2 Severability</h4>
        <p className="text-gray-600 leading-relaxed">
          If a provision is invalid or unenforceable, it will be modified to the
          minimum extent necessary or severed, and the remaining provisions will
          continue in effect.
        </p>

        <h4 className="font-semibold text-dark pt-3">36.3 No Waiver</h4>
        <p className="text-gray-600 leading-relaxed">
          A failure or delay to enforce a right is not a waiver. A waiver is
          effective only if expressly made by an authorized representative.
        </p>

        <h4 className="font-semibold text-dark pt-3">36.4 Assignment</h4>
        <p className="text-gray-600 leading-relaxed">
          You may not transfer your Account or rights under these Terms without
          VaMijo's written consent. Afrifanom may assign these Terms as part of
          a merger, restructuring, financing, sale of business or transfer to an
          affiliate, subject to applicable law and notice where required.
        </p>

        <h4 className="font-semibold text-dark pt-3">36.5 Force Majeure</h4>
        <p className="text-gray-600 leading-relaxed">
          VaMijo is not liable for delay or failure caused by events beyond
          reasonable control, including natural disaster, epidemic, war, civil
          disorder, fuel shortage, strike, government action, road closure,
          telecommunications failure, payment-system outage, cyberattack or
          widespread service-provider failure. Payment and safety obligations
          already due remain unaffected where performance is still possible.
        </p>

        <h4 className="font-semibold text-dark pt-3">36.6 Entire Agreement</h4>
        <p className="text-gray-600 leading-relaxed">
          These Terms and incorporated documents form the entire agreement
          regarding general use of VaMijo and replace prior general terms on the
          same subject, without cancelling a separate signed enterprise or fleet
          agreement.
        </p>

        <h4 className="font-semibold text-dark pt-3">
          36.7 No Partnership with Users
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Except for an expressly signed partnership agreement, these Terms do
          not create a partnership, joint venture, franchise, fiduciary or
          agency relationship between VaMijo and a User.
        </p>
      </div>
    ),
  },
  {
    title: "37. Contact Us",
    content: (
      <div className="text-gray-600 leading-relaxed space-y-1">
        <p>
          Questions, support requests, complaints and legal notices may be
          directed to Afrifanom Limited - VaMijo Office.
        </p>
        <p>
          General Enquiries & Support:{" "}
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
          A formal legal notice should identify the sender, Account details
          where relevant, the subject matter, the requested action and reliable
          contact information. VaMijo may publish additional physical-address or
          telephone details on its official website or in the App.
        </p>
      </div>
    ),
  },
];

const TermsOfService = () => {
  return (
    <Section
      title="Terms & Conditions"
      subtitle="Effective Date: 7th July, 2026"
      centered
    >
      <div className="max-w-3xl mx-auto space-y-8 text-left">
        {clauses.map((clause) => (
          <div
            key={clause.title}
            id={slugifyClauseTitle(clause.title)}
            className="space-y-2 scroll-mt-32 pt-[30px]"
          >
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
