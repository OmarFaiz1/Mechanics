import React from "react";
import ShowChatHeading from "../showChatHeading";
import "./style.scss";

// Dummy chat data
const chats = [
  {
    id: 1,
    name: "In Search Of F2 Roost Deflector",
    lastMessage: "Can you send the photo?",
    time: "30/10/2022",
    unread: 12,
  },
  {
    id: 2,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 3,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 4,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 6,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 7,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 8,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 9,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 10,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },
  {
    id: 11,
    name: "Looking for Laptop",
    lastMessage: "Is it still available?",
    time: "29/10/2022",
    unread: 5,
  },

  // Add more chats dynamically
];

// Define props type
interface ChatListProps {
  activeChat: number;
  handleChatClick: (index: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ activeChat, handleChatClick }) => {
  return (
    <div className="p-4 border-b border-gray-200 overflow-y-auto h-full custom-scrollbar">
      <ShowChatHeading />
      {chats.map((chat, index) => (
        <div
          key={index}
          className={`flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer ${
            activeChat === index ? "bg-gray-100" : ""
          }`}
          onClick={() => handleChatClick(index)}
        >
          <img
            src="https://placehold.co/50x50"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-gray-500">{chat.lastMessage}</p>
          </div>
          <div className="ml-auto text-gray-500 text-sm">
            {chat.time}
            {chat.unread > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 ml-2">
                {chat.unread}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
