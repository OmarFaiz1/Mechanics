import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Icons, Images } from "../../../../assets";
// Define the types for the Message component props
interface MessageProps {
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

// Message component to render each message
const Message: React.FC<MessageProps> = ({
  content,
  timestamp,
  isCurrentUser,
}) => {
  const messageClass = isCurrentUser
    ? "bg-blue-600 text-white p-3 rounded-lg self-end ml-16 mr-4 w-2/3" // Changed to w-2/3 for wider message boxes
    : "bg-gray-100 p-3 rounded-lg mb-2 self-start mr-16 w-2/3"; // Same for received messages

  return (
    <div
      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div className={messageClass}>
        <p>{content}</p>
        <div className="text-gray-500 text-xs mt-1">{timestamp}</div>
      </div>
    </div>
  );
};

// Main component to display the chat interface
const ShowMessages: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      content: "Hi, I'm interested in the product.",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isCurrentUser: false,
    },
    {
      content: "Can you send me more details?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isCurrentUser: false,
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [showAd, setShowAd] = useState(true); // State to toggle ad visibility

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newMessage: MessageProps = {
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isCurrentUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const handleAdClick = () => {
    setShowAd(false);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <img
          src={Images.person_image}
          alt="User profile picture"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-bold">ARLENE MCCOY</span>
      </div>

      {/* Ad section */}
      {showAd && (
        <div className="p-4 border-b bg-gray-200">
          <div className="flex items-center">
            <img
              src={Images.person_image}
              alt="Product image"
              className="w-8 h-8 rounded mr-3"
            />
            <div>
              <div className="text-gray-500 text-sm">July 25, 2023</div>
              <div className="font-bold text-red-600">
                In Search Of F2 Roost Deflector
              </div>
            </div>
            <div className="ml-auto flex space-x-2">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleAdClick}
              >
                View Listing
              </button>
              <button
                className="border border-red-600 text-red-600 px-4 py-2 rounded relative"
                onClick={handleAdClick}
              >
                Send an Offer
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Messages display area */}
      <div className="p-4 flex flex-col">
        {/* Render existing messages (both current user and other user) */}
        {messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}

        {/* Input area to send a message */}
        <div className="p-4 border-t flex items-center">
          <input
            type="text"
            placeholder="Write message"
            className="flex-1 border rounded-full px-4 py-2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button className="ml-2 text-red-600" onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowMessages;
