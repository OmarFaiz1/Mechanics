import React, { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Message from "../message";

// Define the message type
interface MessageType {
  text: string;
  time: string;
  fromMe: boolean;
  image?: string; // optional image
}

// Define the structure of the messages object
const messages: { [key: number]: MessageType[] } = {
  0: [
    { text: "Can you send the photo?", time: "4:32 AM", fromMe: false },
    {
      text: "Here is the picture.",
      time: "4:35 AM",
      fromMe: true,
      image: "https://placehold.co/100x100",
    },
  ],
};

// Define props type for the ChatWindow component
interface ChatWindowProps {
  activeChat: number;
  offersLeft: number; // Add offersLeft
  setOffersLeft: Dispatch<SetStateAction<number>>; // Add setOffersLeft
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  activeChat,
  offersLeft,
  setOffersLeft,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);
  const [offerSent, setOfferSent] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the selected image

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" || selectedImage) {
      messages[activeChat].push({
        text: newMessage,
        time: "Now",
        fromMe: true,
        image: selectedImage || undefined, // Include image if selected
      });
      // Reset the input and image states
      setNewMessage("");
      setSelectedImage(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleOfferClick = (offer: number) => {
    setSelectedOffer(offer);
    setOfferSent(false);
  };

  const handleSendOffer = () => {
    if (selectedOffer !== null && offersLeft > 0) {
      setOffersLeft(offersLeft - 1);
      setOfferSent(true);
    }
  };

  // Function to handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string); // Set the selected image
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gray-200">
        <img
          src="https://placehold.co/50x50"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h3 className="font-semibold">ARLENE MCCOY</h3>
        </div>
      </div>

      {/* Offers Left */}
      <div className="p-2 text-center text-gray-700 border-b border-gray-200">
        {offersLeft} offers left
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages[activeChat] && messages[activeChat].length > 0 ? (
          messages[activeChat].map((msg: MessageType, index: number) => (
            <Message
              key={index}
              text={msg.text}
              time={msg.time}
              fromMe={msg.fromMe}
              image={msg.image}
            />
          ))
        ) : (
          <p>No messages in this chat.</p>
        )}

        {/* Offer Sent Confirmation */}
        {offerSent && (
          <div className="bg-red-500 text-white text-center p-2 rounded-md mt-2 w-1/2 mx-auto">
            Offer of ${selectedOffer} sent!
          </div>
        )}
      </div>

      {/* Offer and Message Input */}
      <div className="p-4 border-t border-gray-200 flex flex-col space-y-4">
        {/* Offers Selection */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {[1100, 1000, 900, 800].map((offer, i) => (
              <button
                key={i}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => handleOfferClick(offer)}
              >
                ${offer}
              </button>
            ))}
          </div>
          <div className="text-gray-700">Selected Offer: ${selectedOffer}</div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSendOffer}
            disabled={selectedOffer === null || offersLeft === 0}
          >
            Send Offer
          </button>
        </div>

        {/* Message Input */}
        <div className="flex items-center space-x-2">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageUpload"
            onChange={handleImageUpload}
          />
          <label htmlFor="imageUpload">
            <FontAwesomeIcon
              icon={faImage}
              className="text-gray-500 cursor-pointer"
            />
          </label>
          <input
            type="text"
            placeholder="Enter your message..."
            className="flex-1 p-2 border rounded-md"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-gray-500 cursor-pointer ml-4"
            onClick={handleSendMessage}
          />
        </div>

        {/* Display selected image preview */}
        {selectedImage && (
          <div className="mt-2">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-24 h-24 rounded-md object-cover border-2 border-gray-300"
            />
            <button
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setSelectedImage(null)} // Clear selected image
            >
              Remove Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
