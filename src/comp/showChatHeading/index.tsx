import React, { useState } from "react";
import ReactDOM from "react-dom";

const ShowChatHeading = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeButton, setActiveButton] = useState("");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Chats</h1>
      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search chat"
            className="w-full p-2 pl-10 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            onClick={() => handleTabClick("All")}
            className={`text-${
              activeTab === "All" ? "red" : "gray"
            }-500 font-bold border-b-2 ${
              activeTab === "All" ? "border-red-500" : "border-transparent"
            } pb-2`}
          >
            All
          </button>
          <button
            onClick={() => handleTabClick("Buying")}
            className={`text-${
              activeTab === "Buying" ? "red" : "gray"
            }-500 font-medium border-b-2 ${
              activeTab === "Buying" ? "border-red-500" : "border-transparent"
            } pb-2`}
          >
            Buying
          </button>
          <button
            onClick={() => handleTabClick("Selling")}
            className={`text-${
              activeTab === "Selling" ? "red" : "gray"
            }-500 font-medium border-b-2 ${
              activeTab === "Selling" ? "border-red-500" : "border-transparent"
            } pb-2`}
          >
            Selling
          </button>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        {["All", "Unread", "Archived"].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={`px-4 py-2 rounded-full ${
              activeButton === button
                ? "bg-gray-400 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ShowChatHeading;
