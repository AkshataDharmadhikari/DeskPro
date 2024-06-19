import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Home = () => {
  const dummyOrders = [
    {
      id: '#872157',
      product: 'Solid, Color Block Men Black Sports Shorts',
      orderValue: 'Rs. 1,359.00',
      status: 'Delivered',
      orderedOn: 'Aug 15, 2023',
      deliveredOn: 'Aug 15, 2023',
    },
    {
      id: '#872324',
      product: 'Solid, Color Block Men Black Sports Shorts',
      orderValue: 'Rs. 5,234.00',
      status: 'Delivered',
      orderedOn: 'Aug 15, 2023',
      deliveredOn: 'Aug 15, 2023',
    },
    {
      id: '#234523',
      product: 'Solid, Color Block Men Black Sports Shorts',
      orderValue: 'Rs. 1,313.00',
      status: 'Delivered',
      orderedOn: 'Aug 15, 2023',
      deliveredOn: 'Aug 15, 2023',
    },
  ];

  const [clickedOrder, setClickedOrder] = useState(dummyOrders[0]);

  const Router = useRouter();

  return (
    <div className="flex flex-row h-screen items-start">
      <div className="flex min-w-[70%] h-screen border-r-[1px] border-gray items-start">
        <div className="flex flex-col border-[#E4E4E7] min-w-[90%] border-[1px] mt-[40px] ml-auto mr-auto rounded-sm">
          <div className="flex flex-row text-[#71717A] relative border-b-[1px] border-[#E4E4E7] px-[32px] py-[12px]">
            <div className="w-[15%]">Order ID</div>
            <div className="w-[20%]">Product</div>
            <div className="w-[15%]">Order Value</div>
            <div className="w-[15%]">Status</div>
            <div className="w-[17%]">Ordered on</div>
            <div className="w-[17%]">Delivered on</div>
          </div>
          {dummyOrders.map((order, index) => (
            <div
            key={order.id}
            className={`flex flex-row py-[12px] px-[32px] ${
              index === dummyOrders.length - 1 ? '' : 'border-b-[1px] border-[#E4E4E7] cursor-pointer'
            } ${clickedOrder?.id === order.id ? 'bg-[#F2F7FF]' : ''}`}
            onClick={() => setClickedOrder(order)}
          >
              <div className="w-[15%] px-[5px] box-border">{order.id}</div>
              <div className="w-[20%] px-[5px] box-border">{order.product}</div>
              <div className="w-[15%] px-[5px] box-border">{order.orderValue}</div>
              <div className="w-[15%] px-[5px] box-border">{order.status}</div>
              <div className="w-[17%] px-[5px] box-border">{order.orderedOn}</div>
              <div className="w-[17%] px-[5px] box-border">{order.deliveredOn}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col min-w-[30%]">
        <img src='/temp.png'/>
        <img src='/temp3.png' className='cursor-pointer' onClick={() => {Router.push('/ContactCustomerCare')}}/>

        {/* <div>Order Details</div>
        <div>Products</div>
        <div className='flex flex-row'>
          <div>1.</div>
          <img src='https://rukminim2.flixcart.com/image/832/832/xif0q/short/d/p/v/xxl-ck-shorts-c-s-black-xxl-cornerkick-original-imagh77hpprkync7.jpeg?q=70'
            className='w-[100px] h-[100px]'
          />
        </div> */}

        {/* Additional content for the right section */}
      </div>
      {/* <div className='absolute bottom-[20px] left-[20px] text-[#66666B]'>Powered by DeskPro</div> */}
    </div>
  );
};

export default Home;


