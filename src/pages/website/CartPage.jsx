import React, { useEffect, useState } from 'react';
import { images } from '../../database/data'
import { FaStar } from 'react-icons/fa';
import { DatePicker, Modal } from "antd";
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import WebsiteLayout from '../../layouts/WebsiteLayout';
import DeliveryForm from './DeliveryForm';
const { RangePicker } = DatePicker;


const CartPage = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpenPopup=(bool)=>setOpen(bool)

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

  const dateFormat = "YYYY-MM-DD";
  const [filterDate, setFilterDate] = React.useState({
    fromDate: "",
    toDate: "",
  });
  console.log(cartItems)
  console.log(filterDate)

 const totalp = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
 const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0).toFixed(2)
  console.log("total quantity", totalQuantity)
  console.log("total quantity", totalp)


  const renderRatingStars = (rating) => {
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

  const addDaysToDate = (date, days) => {
    console.log("data here",date)
    const result = new Date(date);

    console.log("resulte here",result)

    result.setDate(result.getDate() + days);
    return result;
  };

  const getDaysBetweenDates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  
    // Convert dates to timestamps
    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();
  
    // Calculate the difference in days
    const diffInDays = Math.round(Math.abs((timestamp2 - timestamp1) / oneDay));
  
    return diffInDays;
  };
  

  const handleDateRangeChange = (itemId, newDateRange) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              dateRange: {
                startDate:newDateRange[0]?.format(dateFormat),
                endDate:newDateRange[1]?.format(dateFormat)
              },
              endDate: addDaysToDate(newDateRange[0]?.format(dateFormat), item.quantity),
              quantity:getDaysBetweenDates(newDateRange[0]?.format(dateFormat), newDateRange[1]?.format(dateFormat))
            }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    // console.log("working", itemId)
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  

  const handleChangeQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    // Redirect or show a confirmation message
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <WebsiteLayout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      <div className="flex flex-col md:flex-row">
        <div className=" max-h-[500px] overflow-y-scroll w-full container flex flex-col gap-4 ">
          {cartItems?.length>0?
          cartItems?.map((item, index)=>(
            <>
             <div key={index} className="flex flex-col md:flex-row ">
             <img src={item.img} alt="" className='max-w-[300px]' />
           <div className="">
           <div className="md:px-6 py-4">
            <div className="flex items-center justify-between">
         <div className="font-bold text-xl mb-2">{item.name}</div>
         <button onClick={()=>handleRemoveItem(item.id)}><AiOutlineDelete/></button>

            </div>
         <div className="flex items-center mb-2">
           {renderRatingStars(item.rating)}
         </div>
         <h3 className='text-2xl font-bold'>{`$${item.price}/day`}</h3>
         <h4 className='tex-lg'>Days: {item.quantity}</h4>

         <div className="flex items-center gap-2">
          <h4 className='tex-lg'>Total: </h4>
         <h3 className='text-2xl font-bold'>{`$${item.price*item.quantity}`}</h3>

         </div>
         <RangePicker
                   format={dateFormat}
                  //  value={item.dateRange}
                  //  onChange={(val) => {
                  //   setFilterDate({
                  //      fromDate: val[0]?.format(dateFormat),
                  //      toDate: val[1]?.format(dateFormat),
                  //    });
                  //  }}
                   onChange={(val) =>{
                    handleDateRangeChange(item.id, val)
                  }}
                   size="large"
                 />
       
       </div>
 
           </div>
 
           </div>
           <hr/>
           </>

          ))
         :
         <div className="flex items-center text-center justify-center flex-col py-10">
          <h3 className='font-bold text-xl'>No Item in cart</h3>
          <Link to={"/rent"} className='underline'> Go shopping</Link>
         </div>
         }
         
        </div>
        <div className=" w-full overflow-x-auto flex flex-col">
          <div className="text-xl">Summary</div>
          <table className=" divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Days
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Total
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {cartItems.map((item, index) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">{`$${item.quantity*item.price}`}</td>
          </tr>
        ))}
        <tr>
        <td className="px-6 py-4 whitespace-nowrap">{'Total Balance'}</td>
        <td className="px-6 py-4 whitespace-nowrap">{''}</td>
        <td className="px-6 py-4 whitespace-nowrap">{`${totalQuantity}`}</td>
        <td className="px-6 py-4 whitespace-nowrap">{`$${totalp}`}</td>
        </tr>
        
      </tbody>
    </table>
    <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={()=>handleOpenPopup(true)}
            >
              Checkout
            </button>
    </div>
      </div>
     
    </div>

    <Modal
        title="Delivery details"
        width={500}
        footer={null}
        onCancel={() => handleOpenPopup(false)}
        open={open}
        onOk={() => handleOpenPopup(false)}
      >
        <DeliveryForm closeModal={()=>{
          handleOpenPopup(false)
          // window.location.reload()
        }}  />
      </Modal>
    </WebsiteLayout>
  );
};

export default CartPage;
