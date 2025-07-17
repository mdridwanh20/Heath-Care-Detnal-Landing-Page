import Line from "../Component/Share/Line";
import { HeadingH2 } from "../Component/Share/Typography";
import { FaCheck } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Basic",
    price: "$9",
    period: "month",
    description: "Ideal for beginners starting their fitness journey.",
    features: [
      "Access to gym equipment",
      "1 group fitness class per week",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    description: "Advanced features for professionals.",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Priority email support",
      "Advanced analytics",
      "Service level agreement",
      "Custom integrations",
    ],
  },
  {
    name: "Elite",
    price: "$29",
    period: "month",
    description: "All-inclusive access for fitness enthusiasts.",
    features: [
      "Personal trainer sessions",
      "Unlimited fitness classes",
      "Nutrition planning",
      "24/7 gym access",
      "Priority support",
    ],
  },
];

export default function PricingTable() {
  return (

    <div id="price" className="py-12 flex items-center justify-center flex-col scroll-mt-20">
      <div className="flex flex-col items-center justify-center mb-10">
        <HeadingH2
          headH2={"Pricing Tables"}
          className={"text-[var(--primaryColor)]"}
        />
        <Line />
      </div>

      <div className="lg:flex items-center  justify-center">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="p-6 bg-[var(--cardBodyColor)] h-110 lg:mx-5 mx-0 m-5 rounded-lg text-white w-72 shadow-lg flex flex-col"
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

            <button className="w-full py-2 px-4 bg-[var(--primaryColor)] rounded text-[var(--deepColor)] font-semibold transition-colors text-sm">
              Get Started
            </button>

          </div>


        ))}
      </div>

    </div>
  );
}
