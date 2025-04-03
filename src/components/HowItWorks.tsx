
import { Clock, Search, UserCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Find a service",
    description: "Browse through our wide range of professional home services tailored to your needs.",
    icon: <Search className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Book an appointment",
    description: "Choose a convenient time slot that fits your schedule and confirm your booking.",
    icon: <Clock className="h-8 w-8" />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Get your service done",
    description: "Our verified professionals will arrive at your doorstep to complete the service.",
    icon: <UserCheck className="h-8 w-8" />,
    color: "bg-purple-100 text-purple-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-helpy-dark mb-4">How it works</h2>
          <p className="text-helpy-gray text-lg max-w-2xl mx-auto">
            Getting help at home has never been easier with our simple process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className={`p-5 rounded-full mb-6 ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-helpy-dark mb-3">{step.title}</h3>
              <p className="text-helpy-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
