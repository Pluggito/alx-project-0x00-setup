import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Button Variants Demo</h1>

      {/* Small Buttons */}
      <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <Button title="Small Button" styles="px-3 py-1 rounded-sm bg-blue-500 text-white" />
      <Button title="Medium Button" styles="px-4 py-2 rounded-md bg-green-500 text-white" />
      <Button title="Large Button" styles="px-6 py-3 rounded-full bg-red-500 text-white" />
      <Button title="Extra Button" styles="px-5 py-2 rounded-lg bg-purple-500 text-white" />
    </main>

      <Card />
    </div>
  );
};

export default LandingPage;
