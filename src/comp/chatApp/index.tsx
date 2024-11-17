import React, { useState } from "react";
import ChatList from "../chatList";
import ChatWindow from "../chatWindow";

// const ChatApp: React.FC = () => {
//   const [activeChat, setActiveChat] = useState<number>(-1);
//   const [offersLeft, setOffersLeft] = useState<number>(3); // Example state for offers left

//   const handleChatClick = (index: number) => {
//     setActiveChat(index);
//   };

//   const handleBack = () => {
//     setActiveChat(-1); // Go back to chat list
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Chat List */}
//       <div
//         className={`md:w-1/3 border-r border-gray-200 ${
//           activeChat >= 0 ? "hidden md:flex" : "flex"
//         }`}
//       >
//         <ChatList activeChat={activeChat} handleChatClick={handleChatClick} />
//       </div>

//       {/* Chat Window */}
//       <div className={`md:w-2/3 ${activeChat < 0 ? "hidden" : "flex"}`}>
//         <ChatWindow
//           activeChat={activeChat}
//           offersLeft={offersLeft}
//           setOffersLeft={setOffersLeft}
//           onBack={handleBack}
//         />
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
