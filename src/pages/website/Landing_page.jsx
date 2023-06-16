import React, { useState } from 'react'
import WebsiteLayout from '../../layouts/WebsiteLayout'
import { AiOutlineSearch } from 'react-icons/ai'
import { data, images } from '../../database/data';
import TopPickCard from '../../components/TopPickCard';
import ImageSlider from '../../components/ImageSlider';
import Card from '../../components/Card';
import CallToAction from '../../components/CallToAction';
import openNotification from '../../components/Notification';

function Landing_page() {
  const apartmentsApi = data
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apartmentsToShow, setApartmentsToShow] = useState(8);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setApartmentsToShow(8);
  };
  const subMenu = [
    "All",
    ...new Set(apartmentsApi.map((apartment) => apartment.category)),
  ];
  console.log(subMenu)
  const filteredApartments = apartmentsApi.filter(
    (apartment) =>
      selectedCategory === "All" || apartment.category === selectedCategory
  );
  const apartments = filteredApartments.slice(0, apartmentsToShow);

  const handleLoadMore = () => {
    setApartmentsToShow(apartmentsToShow + 8);
  };
  
  const homeCard = [
    {
      text: "Easy Booking",
      bg: "bg-hero-1",
    },
    {
      text: "Amazing Holiday",
      bg: "bg-hero-2",
    },
    {
      text: "Complete Transaction",
      bg: "bg-hero-3",
    },
  ];

  const addToCart = (item) => {
    // Get the current cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists, increment its quantity
      cartItems[existingItemIndex].quantity += 1;
    } else {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      const newItem = { ...item, quantity: 1 };
      cartItems.push(newItem);
    }

    // Update the cart count
    const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount);

    // Update the cart number in the menu (if applicable)
    const cartNumberElement = document.getElementById('cartNumber');
    if (cartNumberElement) {
      cartNumberElement.textContent = cartCount.toString();
    }
  };


  const handleAddToCart = (data) => {
    addToCart(data);
    openNotification(
      "success",
      "Cart update",
      "Item added to your cart"
    );

  };
  return (
    <>
    <WebsiteLayout>
      <main>
    <section className="bg-hero-bg bg-cover bg-center pt-14">
          <div className="flex pt-20 min-h-min gap-8 flex-col ">
            <h1 className="font-bold text-secondary text-center  text-3xl md:text-6xl">
              Find an amazing perfect
              <br /> home for your vacation
            </h1>
            <p className="text-secondary text-center mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam vel explicabo, soluta temporibus 
            </p>
            {/* <SearchForm /> */}
            <div className='text-center mb-16'>
              <div className="flex items-center justify-center">
              <input type="text" className='rounded-3xl min-w-[300px] md:min-w-[560px] h-16 border-none p-3 focus:border-none ' placeholder='Enter an address, city, zip or landmark ' />
              <button className='rounded-full bg-secondary text-white p-1 -ml-14 text-center'><AiOutlineSearch className=''  fontSize={40}/></button>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-2 md:px-7 ">
          <div className="px-5 py-5 md:py-9 md:px-10 bg-ash-200  rounded-lg relative -mt-5">
            <h3 className="font-medium  text-2xl lg:text-4xl text-center text-secondary">
              Better Experience on Here
            </h3>
            <div className="grid mt-4 md:mt-8 md:grid-cols-3 gap-5 lg:gap-10">
              {homeCard.map((items, index) => {
                const { bg, btn, text } = items;
                return (
                  <div
                    key={index}
                    className={`rounded-lg bg-cover bg-no-repeat bg-bottom p-8 md:p-3 lg:p-8
									${bg}`}
                  >
                    <div className="flex flex-col justify-between h-52">
                      <h4 className="text-2xl lg:text-4xl text-secondary font-medium">
                        {text}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-8 px-2 md:px-7">
          <h4 className="text-xl font-medium ">Categories</h4>
          <div className="flex gap-1 justify-evenly md:justify-start flex-wrap py-3 text-ash-300">
            {subMenu.map((category) => (
              <button
                className={`px-2 md:px-5 pb-2 transition duration-500 ${
                  (filteredApartments !== apartmentsApi &&
                  category === selectedCategory
                    ? "active-type"
                    : "") ||
                  (filteredApartments === apartmentsApi && category === "All")
                    ? "active-type"
                    : ""
                }`}
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {apartments?.length > 0 ? (
            <div className="grid md:grid-cols-3 py-3 gap-y-10 gap-x-6 lg:grid-cols-4 sm:content-center">
              {apartments?.map((apartment, index) => (

                  <Card key={index} 
                  id={apartment?.id}
                  image={apartment?.img} 
                  name={apartment?.name} 
                  description={apartment?.description}
                  price={`$${apartment?.price}/day `}
                  rating={apartment?.rating}
                  onAddToCartClick={()=>handleAddToCart(apartment)}
                  />
                  
              ))}
            </div>
          ) : (
            <h1 className="mt-9 text-center text-xl">Loading.....</h1>
          )}
          {apartmentsToShow < filteredApartments.length && (
            <div className="text-center pb-8 border-b-2">
              <button
                className="text-pur shadow-btn py-2.5 px-14 text-lg mt-8 rounded-lg"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </section>

        <section className="container mx-auto pt-1 md:pb-16 pb-8 px-2 md:px-7">
          <div className="flex justify-between pb-4">
            <h4 className="text-xl font-medium ">Top Picks</h4>
            <button className="text-pur">View all</button>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 py-3 gap-5 md:gap-8 lg:grid-cols-6">
            {data.slice(0, 6).map((typ, index) => {
              return <TopPickCard key={index} {...typ} />;
            })}
          </div>
        </section>
        <CallToAction/>
        </main>
    </WebsiteLayout>
    </>
  )
}

export default Landing_page