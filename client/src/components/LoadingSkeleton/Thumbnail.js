import React from "react";
import { Animation } from "./Animation";

export const Thumbnail = () => {
  return (
    <div className={`w-full min-h-[50px] bg-gray-300 overflow-hidden relative`}>
      <Animation></Animation>
    </div>
  );
};