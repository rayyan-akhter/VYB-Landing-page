"use client";
import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Travel");

  const tabs = ["Travel", "Digital", "Brand", "Merch"];

  return (
    <ul className="flex items-center justify-between bg-primary-text h-[112px] rounded-[24px] text-web-h2 font-bold  p-6 ">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer px-4 relative`}
        >
          <p className="text-web-h2 text-white">{tab}</p>
          {activeTab === tab && (
            <div
              className="absolute bottom-[-10px] left-0 right-0 h-[0.5px] bg-primary rounded-full mt-1"
              style={{ transition: "width 0.3s ease" }}
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
};
