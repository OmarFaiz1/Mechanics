import React, { useState } from "react";
import classNames from "classnames";
import { Icons } from "../../../assets";
import { Images } from "../../../assets";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSpanClick = (index: number) => {
    setSelectedItem(index);
    setIsSidebarOpen(false); // Close sidebar after a link is clicked
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={classNames(styles.headerContainer)}>
        <div className={classNames(styles.customContainer)}>
          <div
            className={classNames(
              styles.navBar,
              "flex items-center justify-between w-full"
            )}
          >
            {/* Left Navbar Elements: Logo */}
            <div
              className={classNames(
                styles.leftNavbarElements,
                "flex items-center"
              )}
            >
              <Icons.powerSportsLogo />

              {/* Center Navigation Links (Visible on medium and larger screens) */}
              <div className="hidden md:flex items-center space-x-6 ml-4">
                <span
                  className={classNames(
                    selectedItem === 0 ? "text-red-500" : "text-gray-500",
                    "cursor-pointer"
                  )}
                  onClick={() => handleSpanClick(0)}
                >
                  Home
                </span>
                <span
                  className={classNames(
                    selectedItem === 1 ? "text-red-500" : "text-gray-500",
                    "cursor-pointer"
                  )}
                  onClick={() => handleSpanClick(1)}
                >
                  Why ISO
                </span>
                <span
                  className={classNames(
                    selectedItem === 2 ? "text-red-500" : "text-gray-500",
                    "cursor-pointer"
                  )}
                  onClick={() => handleSpanClick(2)}
                >
                  In Search Of Listings
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-gray-500 ml-2"
                  />
                </span>
                <span
                  className={classNames(
                    selectedItem === 3 ? "text-red-500" : "text-gray-500",
                    "cursor-pointer"
                  )}
                  onClick={() => handleSpanClick(3)}
                >
                  For Sale Listings
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-gray-500 ml-2"
                  />
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="ml-auto">
                <Icons.searchIcon />
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Icons.MessageIcon className="text-gray-500" />

                <Icons.Notification_icon className="text-gray-500" />

                <div className="bg-red-500 text-white px-4 py-2 rounded">
                  + Create a Listing
                </div>
              </div>

              <div className="md:hidden">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-2xl cursor-pointer text-gray-500"
                  onClick={toggleSidebar}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar (Slide In from the Left on small screens) */}
        <div
          className={classNames(
            styles.sidebar,
            "fixed top-0 left-0 h-full bg-white z-50 transition-transform transform",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
          style={{ width: "250px" }} // Restrict sidebar width
        >
          {/* Sidebar Header with Close Icon */}
          <div className="flex justify-between items-center p-4 bg-gray-200">
            <h2 className="text-lg font-bold">Menu</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col p-4 space-y-4">
            <span
              className={classNames(
                selectedItem === 0 ? "text-red-500" : "text-gray-500",
                "cursor-pointer"
              )}
              onClick={() => handleSpanClick(0)}
            >
              Home
            </span>
            <span
              className={classNames(
                selectedItem === 1 ? "text-red-500" : "text-gray-500",
                "cursor-pointer"
              )}
              onClick={() => handleSpanClick(1)}
            >
              Why ISO
            </span>
            <span
              className={classNames(
                selectedItem === 2 ? "text-red-500" : "text-gray-500",
                "cursor-pointer"
              )}
              onClick={() => handleSpanClick(2)}
            >
              In Search Of Listings
            </span>
            <span
              className={classNames(
                selectedItem === 3 ? "text-red-500" : "text-gray-500",
                "cursor-pointer"
              )}
              onClick={() => handleSpanClick(3)}
            >
              For Sale Listings
            </span>
          </div>
        </div>

        {/* Background Image Section */}
        <div className={classNames(styles.backgroundImage, "relative w-full")}>
          <img
            src={Images.bg_image}
            alt="Background"
            className="w-full h-full object-cover"
          />

          {/* Text in the middle */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className={classNames(styles.imgText)}>
              <span className="text-white">My </span>
              <span className="text-red-500">Messages</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
