import React from "react";

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "$5 / month",
    benefits: ["Access to free ebooks", "5% discount on books"],
  },
  {
    id: 2,
    name: "Premium",
    price: "$10 / month",
    benefits: [
      "Unlimited free ebooks",
      "15% discount on books",
      "Early access to new releases",
    ],
  },
  {
    id: 3,
    name: "VIP",
    price: "$20 / month",
    benefits: [
      "Unlimited free ebooks",
      "25% discount on books",
      "Exclusive author webinars",
      "Priority support",
    ],
  },
];

const Membership = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">
        Membership Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-lg p-6 shadow text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-2xl font-semibold mt-2">{plan.price}</p>
            <ul className="text-gray-600 mt-4 space-y-2">
              {plan.benefits.map((benefit, index) => (
                <li key={index}>✔ {benefit}</li>
              ))}
            </ul>
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
