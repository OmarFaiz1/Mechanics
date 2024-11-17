import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Icons, Images } from "../../../../assets";
import styles from "./style.module.scss";
import ShowMessages from "../showMessages";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllContactMessages = () => {
  const [activeText, setActiveText] = useState("All");
  const [activeMessageId, setActiveMessageId] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAllContacts, setShowAllContacts] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowAllContacts(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTextClick = (text: any) => {
    setActiveText(text);
  };

  const messages = [
    {
      id: 1,
      imgSrc: Images.person_image,
      title: "In Search Of F2 Roost Deflector",
      question: "Can you send me the photo?",
      date: "Today",
    },
    {
      id: 2,
      imgSrc: Images.person_image,
      title: "Looking for spare parts",
      question: "Do you have any available?",
      date: "Yesterday",
    },
  ];

  const handleMessageClick = (id: number) => {
    setActiveMessageId(id === activeMessageId ? null : id);
    if (isMobileView) setShowAllContacts(false);
  };

  const toggleView = () => {
    setShowAllContacts((prev) => !prev);
  };

  return (
    <div className="flex h-full mt-10 mb-10">
      <div className={classNames(styles.customContainer, "flex w-full")}>
        {showAllContacts ? (
          <div
            className={classNames(
              styles.chatContainer,
              "bg-white flex flex-col w-full md:w-1/3 border-r border-gray-400"
            )}
          >
            <div
              className={classNames(styles.customContainer, "w-full text-left")}
            >
              <h3 className="text-black-500 font-bold">CHATS</h3>

              <div
                className={classNames(
                  styles.searchBar,
                  "bg-gray-200 p-2 mt-2 rounded flex items-center"
                )}
              >
                <Icons.searchIcon className="text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-200 border-none outline-none flex-grow"
                />
              </div>

              <div className={classNames(styles.navigationLinks, "flex mt-2")}>
                {["All", "Buying", "Selling"].map((text) => (
                  <span
                    key={text}
                    onClick={() => handleTextClick(text)}
                    className={classNames(
                      "cursor-pointer",
                      activeText === text ? "text-red-500" : "text-gray-500"
                    )}
                  >
                    {text}
                  </span>
                ))}
              </div>

              <hr className="my-2 border-gray-400" />

              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={classNames(
                      styles.allChats,
                      "flex flex-row items-start my-2 cursor-pointer",
                      { "bg-gray-200": activeMessageId === message.id }
                    )}
                    onClick={() => handleMessageClick(message.id)}
                  >
                    <div>
                      <img
                        className={classNames(styles.chatPic, "rounded-full")}
                        src={message.imgSrc}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-2">
                      <p
                        className={classNames(
                          "font-bold text-black",
                          styles.truncate
                        )}
                      >
                        {message.title}
                      </p>
                      <p
                        className={classNames(
                          "text-gray-500 text-sm",
                          styles.truncate
                        )}
                      >
                        {message.question}
                      </p>
                    </div>
                    <p className="ml-auto">{message.date}</p>
                  </div>

                  <hr className="my-2 border-gray-400" />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {isMobileView && !showAllContacts && (
          <div className="absolute top-4 left-4">
            <button
              onClick={toggleView}
              className="bg-gray-200 p-2 rounded-full shadow-md"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-black" />
            </button>
          </div>
        )}

        {(!isMobileView || !showAllContacts) && (
          <div className="w-full md:w-2/3 bg-gray-50 flex flex-col">
            <ShowMessages />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllContactMessages;
