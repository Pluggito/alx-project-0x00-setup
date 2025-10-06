import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen justify-center bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Button Variants Demo</h1>

      {/* Small Buttons */}
      <div className="flex gap-3">
        <Button title="Small - Rounded Sm" size="small" shape="rounded-sm" />
        <Button title="Small - Rounded Md" size="small" shape="rounded-md" />
        <Button title="Small - Full" size="small" shape="rounded-full" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-3">
        <Button title="Medium - Rounded Sm" size="medium" shape="rounded-sm" />
        <Button title="Medium - Rounded Md" size="medium" shape="rounded-md" />
        <Button title="Medium - Full" size="medium" shape="rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-3">
        <Button title="Large - Rounded Sm" size="large" shape="rounded-sm" />
        <Button title="Large - Rounded Md" size="large" shape="rounded-md" />
        <Button title="Large - Full" size="large" shape="rounded-full" />
      </div>

      <Card />
    </div>
  );
};

export default LandingPage;
