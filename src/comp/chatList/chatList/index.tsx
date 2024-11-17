import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "../../message";

// Define the type for a message
interface MessageType {
  text: string;
  time: string;
  fromMe: boolean;
  image?: string;
}

interface ChatWindowProps {
  activeChat: number; // Assuming activeChat is a number
  offersLeft: number; // Number of remaining offers
  setOffersLeft: (value: number) => void; // Function to update offers left
}

// Messages object type
interface MessagesType {
  [key: number]: MessageType[];
}

const messages: MessagesType = {
  0: [
    // First chat messages
    { text: "Can you send the photo?", time: "4:32 AM", fromMe: false },
    {
      text: "Here is the picture.",
      time: "4:35 AM",
      fromMe: true,
      image: "https://placehold.co/100x100",
    },
  ],
  // Add messages for other chats dynamically
};

// const ChatWindow: React.FC<ChatWindowProps> = ({
//   activeChat,
//   offersLeft,
//   setOffersLeft,
// }) => {
//   const [newMessage, setNewMessage] = useState<string>("");

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "") {
//       messages[activeChat].push({
//         text: newMessage,
//         time: "Now",
//         fromMe: true,
//       });
//       setNewMessage("");
//     }
//   };

//   const handleOfferClick = (offer: number) => {
//     if (offersLeft > 0) {
//       setOffersLeft(offersLeft - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Chat Header */}
//       <div className="flex items-center p-4 border-b border-gray-200">
//         <img
//           src="https://placehold.co/50x50"
//           alt="Profile"
//           className="w-12 h-12 rounded-full"
//         />
//         <div className="ml-4">
//           <h3 className="font-semibold">ARLENE MCCOY</h3>
//         </div>
//       </div>
//       {/* Chat Messages */}
//       <div className="flex-1 p-4 overflow-y-auto">
//         {messages[activeChat] && messages[activeChat].length > 0 ? (
//           messages[activeChat].map((msg, index) => (
//             <Message
//               key={index}
//               text={msg.text}
//               time={msg.time}
//               fromMe={msg.fromMe}
//               image={msg.image}
//             />
//           ))
//         ) : (
//           <p>No messages in this chat.</p>
//         )}
//       </div>
//       {/* Offer and Message Input */}
//       <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
//         <div className="flex space-x-2">
//           {[1100, 1000, 900, 800].map((offer, i) => (
//             <button
//               key={i}
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
//               onClick={() => handleOfferClick(offer)}
//             >
//               ${offer}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Enter your message..."
//           className="flex-1 mx-4 p-2 border rounded-md"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <FontAwesomeIcon
//           icon={faImage}
//           className="text-gray-500 cursor-pointer"
//         />
//         <FontAwesomeIcon
//           icon={faPaperPlane}
//           className="text-gray-500 cursor-pointer ml-4"
//           onClick={handleSendMessage}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
