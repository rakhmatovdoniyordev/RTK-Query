import React, { useState } from "react";
import { useCreateCardMutation, useDeleteCardMutation, useGetCardsQuery } from "../../redux/api/cards-api";
import { FaPhotoVideo, FaRegSmile } from "react-icons/fa";
import {
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaHeart,
    FaEdit
  } from "react-icons/fa";
  import { RiDeleteBin7Line } from "react-icons/ri";
  import male from "../../assets/male.png"
  import female from "../../assets/female.png"
  import { toggleWishlist } from "../../redux/slice/wishlistSlice"
  import { useDispatch, useSelector } from "react-redux";
import CardUpdateModal from "../../components/CardUpdate/CardUpdateModal";

const Addtweet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleEditClick = (card) => {
      setSelectedCard(card);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedCard(null);
    };


    const [deleteCard] = useDeleteCardMutation()
    const { data, isLoading } = useGetCardsQuery();
    const dispatch = useDispatch()
    const wishlistItems = useSelector((state) => state.wishlist.items);

    const handleWishlist = (twit) => {
        dispatch(toggleWishlist(twit))
    }

    const isInWishlist = (id) => wishlistItems.some(item => item.id === id)


    const [createCard, {}] = useCreateCardMutation();
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target)
      console.log(data);
      createCard(Object.fromEntries(data))
    };
    const handleDelete = id => {
        deleteCard(id)
      }
  return (
    <section className="my-24">
      <div className="container__person">
        <div className="max-w-xl mx-auto mt-10 p-4 border border-gray-600 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Add Tweet</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <textarea
                className="w-full p-4 border border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Tweet..."
                name="desc"
              ></textarea>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name or Username"
                name="title"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
                <label htmlFor="">Select gender:</label>
                <select name="gender" id="" className=" p-2 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-500">
                <FaPhotoVideo className="w-6 h-6" />
                <FaRegSmile className="w-6 h-6" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300"
              >
                Add Tweet
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10 max-[740px]:grid-cols-1">
        {isLoading && (
            <div className="loading">
              <div class="container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          )}
          {
            data?.map(item => (
              <div className="p-4 border border-gray-800 rounded-xl" key={item.id}>
                <div className="flex items-start space-x-3 gap-5">
                  <img
                    src={item.gender === "male" ? male : female}
                    alt="Foydalanuvchi avatari"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      <h4 className="font-bold">{item.title}</h4>
                      <span className="text-gray-500">@username · 2s</span>
                    </div>
                    <p className="mt-2 text-lg">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        <FaRegComment className="w-5 h-5" />
                        <span>42</span>
                      </button>
                      <button onClick={() => handleEditClick(item)} className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors duration-200">
                        <FaEdit className="w-5 h-5" />
                      </button>
                      <button
                        className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
                      >
                        {isInWishlist(item.id) ? (
                          <FaHeart onClick={() => handleWishlist(item)} className="w-5 h-5 text-red-500 animate-like" />
                        ) : (
                          <FaRegHeart onClick={() => handleWishlist(item)} className="w-5 h-5" />
                        )}
                      </button>
                      <button onClick={()=> handleDelete(item.id)} className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        <RiDeleteBin7Line className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <style >{`
                  @keyframes likeAnimation {
                    0% {
                      transform: scale(1);
                    }
                    50% {
                      transform: scale(1.2);
                    }
                    100% {
                      transform: scale(1);
                    }
                  }
                  .animate-like {
                    animation: likeAnimation 0.3s ease-in-out;
                  }
                `}</style>
              </div>
            ))
          }
        </div>
      </div>
      <CardUpdateModal
        card={selectedCard}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Addtweet;
