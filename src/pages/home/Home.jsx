import React, { useState } from "react";
import {
  useDeleteCardMutation,
  useGetCardsQuery,
} from "../../redux/api/cards-api";
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import { toggleWishlist } from "../../redux/slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleWishlist = (twit) => {
    dispatch(toggleWishlist(twit));
  };

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const { data, isLoading } = useGetCardsQuery();
  const [deleteCard] = useDeleteCardMutation();
  const handleDelete = (id) => {
    deleteCard(id);
  };
  return (
    <section className="my-24">
      <div className="container__person">
        <div className="grid grid-cols-2 gap-4 max-[740px]:grid-cols-1">
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
          {data?.map((item) => (
            <div
              className="p-4 border border-gray-800 rounded-xl"
              key={item.id}
            >
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
                  <p className="mt-2 text-lg">{item.desc}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                      <FaRegComment className="w-5 h-5" />
                      <span>42</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors duration-200">
                      <FaRetweet className="w-5 h-5" />
                      <span>69</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors duration-200">
                      {isInWishlist(item.id) ? (
                        <FaHeart
                          onClick={() => handleWishlist(item)}
                          className="w-5 h-5 text-red-500 animate-like"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() => handleWishlist(item)}
                          className="w-5 h-5"
                        />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200"
                    >
                      <RiDeleteBin7Line className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <style>{`
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
