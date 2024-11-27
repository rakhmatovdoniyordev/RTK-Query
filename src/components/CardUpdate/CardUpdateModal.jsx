import React, { useEffect, useState } from "react";
import { useUpdateCardMutation } from "../../redux/api/cards-api";

const CardUpdateModal = ({ card, isOpen, onClose }) => {
  const [updatedCard, setUpdatedCard] = useState({});
  const [updateCard, { isLoading, isError }] = useUpdateCardMutation();

  useEffect(() => {
    if (card) {
      setUpdatedCard({ ...card });
    }
  }, [card]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const cardData = Object.fromEntries(data);
    updateCard({
      id: card.id,
      body: cardData,
    }).unwrap();
    onClose();
  };

  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0  bg-black bg-opacity-50 z-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99]">
        <h2 className="text-xl font-semibold mb-4">Edit Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={updatedCard.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={updatedCard.desc}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {isLoading ? "Updating..." : "Update Card"}
            </button>
          </div>
        </form>
        {isError && (
          <div className="mt-4 text-red-500">
            Error updating card. Please try again.
          </div>
        )}
      </div>
    </>
  );
};

export default CardUpdateModal;
