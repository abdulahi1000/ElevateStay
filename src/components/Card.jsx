import React from 'react';
import { FaStar, FaRegBookmark, FaWifi, FaBed, FaCloudShowersHeavy, FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ id,image, name, description, price, rating, onAddToCartClick }) => {
    const renderRatingStars = () => {
        const maxRating = 5; // Maximum rating scale
        const ratingColor = rating >= maxRating ? "text-yellow-500" : "text-red-500"; // Change color if rating is less than 5
      
        const stars = [];
        for (let i = 0; i < maxRating; i++) {
          stars.push(
            <FaStar
              key={i}
              className={`text-xl ${i < rating ? ratingColor : "text-gray-300"}`}
            />
          );
        }
        return stars;
      };

  return (
    <div className="rounded overflow-hidden shadow-xl">
      <img className="w-full h-52 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="flex justify-between">
        <Link to={`/apartment/${id}`} className="font-bold text-xl mb-2 hover:underline">{name}</Link>
        <div className="flex items-center mb-2">
          {renderRatingStars()}
        </div>
        </div>
        <h3 className='text-2xl font-bold'>{price}</h3>
     
        
        <p className="text-gray-700 text-base">{description}</p>
        <div className="pt-1 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <FaWifi/>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <FaBed/>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <FaCloudShowersHeavy/>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <FaCoffee/>
        </span>
      </div>
      </div>
      <div className="px-6 -mt-2 mb-3 flex items-center justify-between">
        <div className="flex items-center">
            <button>
          <FaRegBookmark fontSize={25} className="text-blue-500 mr-2" />
                
            </button>
        </div>
        <button onClick={onAddToCartClick} className="bg-secondary  text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
      
    </div>
  );
};

export default Card;
