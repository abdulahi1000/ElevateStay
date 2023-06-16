import React from 'react';
import ImageSlider from '../../components/ImageSlider';
import { useParams } from 'react-router-dom';
import { images } from '../../database/data';
import WebsiteLayout from '../../layouts/WebsiteLayout';

const ApartmentDetailPage = () => {
    const { id } = useParams();
  const apartment = {
    id: 1,
    images: images,
    address: '123 Main St, City',
    description: 'Spacious apartment with stunning views',
    rating: 4.5,
    price: '100k/month',
    facilities: ['Swimming pool', 'Gym', 'Parking'],
    comments: [
      { id: 1, user: 'John', comment: 'Great place to stay!' },
      { id: 2, user: 'Emily', comment: 'Beautiful apartment with excellent amenities' },
    ],
  };

  return (
    <WebsiteLayout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Apartment Detail</h1>

      <ImageSlider images={apartment.images} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">{apartment.address}</h2>
        <p className="text-gray-600 mb-4">{apartment.description}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-2">&#9733;</span>
          <span className="text-sm text-gray-600">{apartment.rating}</span>
        </div>
        <div className="text-lg font-bold mb-4">{apartment.price}</div>

        <h3 className="text-xl font-bold mb-2">Facilities:</h3>
        <ul className="list-disc ml-8 mb-4">
          {apartment.facilities.map((facility, index) => (
            <li key={index} className="text-gray-600">
              {facility}
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mb-2">User Comments & Reviews:</h3>
        <ul className="mb-4">
          {apartment.comments.map((comment) => (
            <li key={comment.id} className="mb-2">
              <strong className="text-gray-700">{comment.user}: </strong>
              <span className="text-gray-600">{comment.comment}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </WebsiteLayout>
  );
};

export default ApartmentDetailPage;
