import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

// Define the prop types for the Message component
interface MessageProps {
  text: string;
  time: string;
  fromMe: boolean;
  image?: string; // image is optional
}

const Message: React.FC<MessageProps> = ({ text, time, fromMe, image }) => {
  return (
    <div className={`flex ${fromMe ? "justify-end" : "justify-start"} mb-4`}>
      {image && (
        <img src={image} alt="Sent" className="w-24 h-24 rounded-md mr-4" />
      )}
      <div
        className={`p-4 rounded-md ${
          fromMe ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        } max-w-md`}
      >
        <p>{text}</p>
        <div className="text-xs text-gray-400 flex items-center justify-between mt-1">
          <span>{time}</span>
          {fromMe && (
            <FontAwesomeIcon
              icon={faCheckDouble}
              className="ml-2 text-blue-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
