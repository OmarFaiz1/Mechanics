import React, { useState } from "react";
import styles from "./_shared/utils/responsive.module.scss";
import ChatList from "./comp/chatList";
import ChatWindow from "./comp/chatWindow";
import Header from "./_shared/components/header";
import Footer from "./_shared/components/footer";
import classNames from "classnames";

const App = () => {
  const [activeChat, setActiveChat] = useState<number>(0); // Default to the first chat
  const [offersLeft, setOffersLeft] = useState(3); // Maximum 3 offers allowed

  const handleChatClick = (index: number) => {
    setActiveChat(index);
  };

  return (
    <>
      <Header />

      {/* New div with gray border */}
      <div className={classNames(styles.customContainer, "p-10")}>
        <div className="border border-pink-400 p-4">
          {" "}
          <div className="flex h-screen">
            {/* Chat List */}
            <div className="w-1/3 bg-white border-r border-gray-200">
              <ChatList
                activeChat={activeChat}
                handleChatClick={handleChatClick}
              />
            </div>
            {/* Chat Window */}
            <div className="w-2/3 flex flex-col">
              {activeChat !== null && (
                <ChatWindow
                  activeChat={activeChat}
                  offersLeft={offersLeft}
                  setOffersLeft={setOffersLeft}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
