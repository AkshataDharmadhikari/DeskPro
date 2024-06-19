import React, { useEffect } from "react";
import { useState } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "src/styles/chat.css";
import json_data from "src/pages/Json/orders.json";
import { BiSolidMicrophone, BiSolidSend } from "react-icons/bi";
import { IconContext } from "react-icons";
import { GrSearch } from "react-icons/gr";
import axios from "axios";

const Chat = () => {
  // Selected Order
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChangeOrder = (event) => {
    setSelectedOption(event.target.value);
  };

  // Selected Issue
  const [issueType, setIssueType] = useState("");

  const handleRadioChangeIssue = (event) => {
    setIssueType(event.target.value);
  };

  // Description
  const [inputValue, setInputValue] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(inputValue);
    setInputValue('');

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      // "customer_id": localStorage.getItem("customer_id"),
      "customer_id": "323131",
      "order_id": selectedOption,
      "customer_query": inputValue,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:5000/ticket?create=True", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  // Date At The Top Of Chat
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const [orders, setOrders] = useState([]);

  const fetchOrder = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5000/order?mobile=9137357003", requestOptions)
      .then(response => response.json())
      .then(result => {
        setOrders(result.data);
      })
      .catch(error => console.log('error', error));
  };

  // Chat Time
  const [formattedTime, setFormattedTime] = useState("");
  useEffect(() => {
    // Function to update the formatted time
    const updateFormattedTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
      setFormattedTime(timeString);
    };

    // Update the time immediately and then stop further updates
    updateFormattedTime();

    if(orders.length == 0)
      fetchOrder();

    // Clean up by returning an empty cleanup function
    return () => { };
  }, []);

  return (
    <>
      <div className="flex MainBox mt-2">
        <div>
          <div className="Previouschat mr-3 ml-3">
            <div
              className="toolbar bg-[#086CC4] w-80 h-12 flex justify-center"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            >
              <h1 className=" chatsHeader text-2xl text-white font-bold">
                Chats
              </h1>
            </div>
            <div className=" chats bg-[#EEEEEE] w-80 flex justify-center">
              <div className=" mt-1.5" style={{ width: "95%" }}>
                <div className="Input">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="inputbox search h-8 p-2 rounded"
                  />
                  <IconContext.Provider
                    value={{
                      className: "top-react-icons",
                      color: "black",
                      size: 20,
                    }}
                  >
                    {" "}
                    <GrSearch />
                  </IconContext.Provider>
                </div>
                <hr></hr>
                <div
                  className="prevchats h-16 bg-[#EEEEEE]"
                  style={{
                    borderBottom: "2px solid lightgray", // Adjust border properties as needed
                  }}
                >
                  <div className="flex flex-row" id="photo">
                    <img
                      className="border-x-fuchsia-500 border-y-pink-600"
                      src="/dp.jpeg"
                      alt="pic2"
                    />
                    <div className="ml-3 mt-2">
                      <h2 className="name font-bold text-lg ">
                        Akshata Dharmadhikari
                      </h2>
                      <p className=" text-container text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Velit suscipit sit odit odio molestias voluptates,
                        cupiditate sapiente repudiandae. Tempora illo suscipit
                        sit quo similique eum exercitationem optio deleniti
                        debitis incidunt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ChatMainBox w-3/4  bg-[#EEEEEE] mr-3">
          <div className="text-white flex rounded-md">
            <div className="bg-[#086CC4] flex justify-between w-full h-12 rounded-t-xl">
              <div className="flex justify-start m-2.5">
                <img src="/dp.jpeg" alt="" className="rounded-full mr-2" />
                <h4 className="text-left">ChatBot</h4>
              </div>
              <div className="flex justify-end m-2.5">
                <FaPhoneAlt className="w-4 h-4 mr-6 mt-1.5" />
                <FaVideo className="w-5 h-5 mr-6 mt-1" />
                <FiMoreVertical className="w-5 h-5 mr-2 mt-1" />
              </div>
            </div>
          </div>
          <div className="ChatContainer">
            <h4
              className="font-medium text-[#727272] mt-3 text-xs text-center"
              suppressHydrationWarning={true}
            >
              {formattedDate}
            </h4>
            <div className="w-2/5 ml-8 mt-2 fade-in-slide-up-element p-2.5 bg-[#086CC4] rounded-t-lg">
              <h3 className="font-bold text-white text-xl text-center">
                Select your order
              </h3>


            <div className="flex flex-col gap-y-[15px] mt-[20px]">
              {orders.length > 0 && orders.map((order, index) => (
                <div className="flex flex-row" key={order.order_id}>
                  <input
                    type="radio"
                    name="order"
                    onChange={handleRadioChangeOrder}
                    value={order.order_id}
                    // checked={selectedOption === index.id}
                  />
                  <div className="flex flex-col">
                    {order.products.map((product) => (
                      <p className="ml-2 text-white font-medium" key={product.name}>{product.name}</p>
                    ))}
                  </div>
                </div>                
              ))}
              </div>




              <h4
                className="font-medium text-white text-xs text-right"
                suppressHydrationWarning={true}
              >
                {formattedTime}
              </h4>
            </div>
            {selectedOption && (
              <div className="w-2/5 ml-8 mt-1 fade-in-slide-up-element p-2.5 bg-[#086CC4] ">
                <h3 className="font-bold text-white text-xl text-center">
                  What is the issue?
                </h3>
                <div className="flex flex-row">
                  <input
                    type="radio"
                    name="issue"
                    onChange={handleRadioChangeIssue}
                    value="Payments"
                    checked={issueType === "Payments"}
                  />
                  <p className="ml-2 text-white font-medium">Payments</p>
                </div>
                <div className="flex flex-row">
                  <input
                    type="radio"
                    name="issue"
                    onChange={handleRadioChangeIssue}
                    value="Other"
                    checked={issueType === "Other"}
                  />
                  <p className="ml-2 text-white font-medium">Other</p>
                </div>
                <h4
                  className="font-medium text-white text-xs text-right"
                  suppressHydrationWarning={true}
                >
                  {formattedTime}
                </h4>
              </div>
            )}
            {issueType && (
              <div className="w-2/5 ml-8 mt-1 fade-in-slide-up-element rounded-b-lg p-2.5 bg-[#086CC4]">
                <h4 className="text-white text-medium">
                  Please describe the issue in detail and attach any photos if
                  available.
                </h4>
                <h4
                  className="font-medium text-white text-xs text-right"
                  suppressHydrationWarning={true}
                >
                  {formattedTime}
                </h4>
              </div>
            )}
            {submittedText && (
              <div className="w-2/5 desc fade-in-slide-up-element rounded-lg p-2.5 bg-white">
                <h4 className="text-black text-medium">{submittedText}</h4>
                <h4
                  className="font-medium text-black text-xs text-right"
                  suppressHydrationWarning={true}
                >
                  {formattedTime}
                </h4>
              </div>
            )}
          </div>
          <div className="ChatBox relative inset-x-0 bottom-0 ml-3 mr-3">
            <div className="input-icons">
              <button className="record-button">
                <BsFillEmojiLaughingFill className="w-5 h-5" />
              </button>
              <button className="plus-icon">
                <AiOutlinePlus className="w-5 h-5 font-extrabold" />
              </button>
            </div>
            <div className="Input">
              <input
                type="text"
                placeholder="Type a message..."
                className="inputbox"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="plus-icon" onClick={handleSubmit}>
                <BiSolidSend className="send w-5 h-5" />
              </button>
            </div>
            <button className="plus-icon">
              <BiSolidMicrophone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
