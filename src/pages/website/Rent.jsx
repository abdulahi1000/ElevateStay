import React from 'react'
import WebsiteLayout from '../../layouts/WebsiteLayout'
import { data } from '../../database/data'
import Card from '../../components/Card'
import { FaHamburger } from 'react-icons/fa'

function Rent() {
    const apartments = data
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
        const itemToAdd = { id: 1, name: 'Product 1', price: 10 };
        addToCart(data);
      }
  return (
    <WebsiteLayout>
         <main className="pb-32 pt-10 px-9">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-[#161518] mb-7">
            Properties for <span className="text-primary ">Rent</span> in
            “Nigeria”
          </h1>
          <div>
            <FaHamburger />
          </div>{" "}
        </div>
        {apartments?.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apartments &&
              apartments?.map((apartment, index) => (
                <Card key={index} 
                  id={apartment?.id}
                  image={apartment?.img} 
                  name={apartment?.name} 
                  description={apartment?.description}
                  price={`$${apartment?.price}/day`} 
                  rating={apartment?.rating}
                  onAddToCartClick={()=>handleAddToCart(apartment)}
                  />
              ))}
          </section>
        ) : (
          <h1 className="mt-9 text-center text-xl">Loading.....</h1>
        )}
      </main>
    </WebsiteLayout>
  )
}

export default Rent