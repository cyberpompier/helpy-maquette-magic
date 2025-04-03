
import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, Paintbrush, Trash2, Leaf, Car, Palette, Utensils } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "House Cleaning",
    icon: <Home className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "Plumbing & Repairs",
    icon: <Wrench className="h-6 w-6" />,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    name: "Painting",
    icon: <Paintbrush className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    name: "Waste Disposal",
    icon: <Trash2 className="h-6 w-6" />,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 5,
    name: "Gardening",
    icon: <Leaf className="h-6 w-6" />,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 6,
    name: "Car Wash",
    icon: <Car className="h-6 w-6" />,
    color: "bg-sky-100 text-sky-700",
  },
  {
    id: 7,
    name: "Interior Design",
    icon: <Palette className="h-6 w-6" />,
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 8,
    name: "Cooking",
    icon: <Utensils className="h-6 w-6" />,
    color: "bg-amber-100 text-amber-700",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-helpy-dark mb-4">Browse by category</h2>
          <p className="text-helpy-gray text-lg max-w-2xl mx-auto">
            Explore services across various categories to find exactly what you need for your home
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className={`p-3 rounded-full mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-medium text-helpy-dark text-center">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
