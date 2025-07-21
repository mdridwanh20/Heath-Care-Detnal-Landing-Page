import Line from "../Component/Share/Line";
import { HeadingH2 } from "../Component/Share/Typography";
import { FaCheck } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic Care",
    price: "$49",
    period: "visit",
    description: "Essential dental services for routine checkups.",
    features: [
      "Dental exam & consultation",
      "Basic cleaning",
      "X-rays included",
    ],
  },
  {
    name: "Advanced Care",
    price: "$99",
    period: "visit",
    description: "Comprehensive dental care with added benefits.",
    features: [
      "Everything in Basic",
      "Deep cleaning",
      "Fluoride treatment",
      "Treatment planning",
      "Priority scheduling",
    ],
  },
  {
    name: "Smile Makeover",
    price: "$199",
    period: "visit",
    description: "Premium cosmetic and restorative dental solutions.",
    features: [
      "Teeth whitening",
      "Cosmetic consultation",
      "Digital smile design",
      "Veneer assessment",
      "Follow-up visit included",
    ],
  },
];

export default function PricingTable() {
  return (
    <div
      id="price"
      className=" flex items-center justify-center flex-col scroll-mt-20"
    >
      <div className="flex flex-col items-center justify-center mb-2">
        <HeadingH2
          headH2={"Dental Pricing Plans"}
          className={"text-[var(--primaryColor)]"}
        />
      </div>

      <div className="lg:flex items-center justify-center">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="p-6 border border-[var(--borderColor)] bg-[var(--cardBodyColor)] h-110 lg:mx-5 mx-0 m-5 rounded-lg text-white w-72 shadow-lg flex flex-col"
          >
            <h3 className="text-xl text-[var(--primaryColor)] font-bold mb-2">
              {plan.name}
            </h3>

            <div className="mb-4">
              <span className="text-4xl text-[var(--primaryColor)] font-bold">
                {plan.price}
              </span>
              <span className="text-[var(--deepColor)]">/{plan.period}</span>
            </div>

            <p className="text-[var(--deepColor)] mb-6">{plan.description}</p>

            <ul className="space-y-1.5 mb-6 text-sm flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <FaCheck className="text-[var(--primaryColor)] mr-2 flex-shrink-0" />
                  <span className="text-[var(--deepColor)]">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-2 px-4 bg-[var(--primaryColor)] rounded text-[var(--lightColor)] font-semibold transition-colors text-sm">
              Book Appointment
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
