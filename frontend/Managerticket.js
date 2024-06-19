import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./navbar";
import TopNav from "./topnav";
import "./Manager.css";

export default function Managerticket() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [employeeTickets, setEmployeeTickets] = useState([]);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:5000/ticket?customer=323131";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeTickets(data["data"]);
        console.log(data["data"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  function getSentimentClass(sentiment) {
    if (sentiment === "neutral") {
      return "medium-button";
    } else if (sentiment === "positive") {
      return "low-button";
    } else if (sentiment === "negative") {
      return "high-button";
    }
  }

  function getSentimentLabel(sentiment) {
    if (sentiment === "neutral") {
      return "Medium";
    } else if (sentiment === "positive") {
      return "Low";
    } else if (sentiment === "negative") {
      return "High";
    }
  }

  const filterTickets = () => {
    if (selectedOption === "today") {
      // Filter tickets created today
      const today = new Date();
      const filteredTickets = employeeTickets.filter((ticket) => {
        const ticketDate = new Date(ticket.created_at.$date);
        return (
          ticketDate.getDate() === today.getDate() &&
          ticketDate.getMonth() === today.getMonth() &&
          ticketDate.getFullYear() === today.getFullYear()
        );
      });
      return filteredTickets;
    } else if (selectedOption === "monthly") {
      // Filter tickets created this month
      const today = new Date();
      const filteredTickets = employeeTickets.filter((ticket) => {
        const ticketDate = new Date(ticket.created_at.$date);
        return (
          ticketDate.getMonth() === today.getMonth() &&
          ticketDate.getFullYear() === today.getFullYear()
        );
      });
      return filteredTickets;
    } else if (selectedOption === "yearly") {
      // Filter tickets created this year
      const today = new Date();
      const filteredTickets = employeeTickets.filter((ticket) => {
        const ticketDate = new Date(ticket.created_at.$date);
        return ticketDate.getFullYear() === today.getFullYear();
      });
      return filteredTickets;
    } else {
      return employeeTickets;
    }
  };

  return (
    <div className="App">
      <div className="flex flex-row">
        <div className="">
          <Navbar />
        </div>
        <div className="w-full bg-white">
          <TopNav value="Tickets" />

          <div className=" ml-3 mt-3 mr-3 rounded-lg pb-5 bg-[#EEEEEE]">
            <div className="pt-2">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="block w-50 p-2 pt-3 mt-3 mb-2 ml-3 text-white border bg-[#086CC4] rounded-md focus:outline-none focus:border-white-500"
              >
                <option value="" selected>
                  Select an option
                </option>
                <option value="today">Today</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div className="h-full w-full">
              <table className="table-fixed text-black ml-3 mr-3 border-collapse">
                {/* head */}
                <thead className="bg-white">
                  <tr className="text-base text-black">
                    <td className=" w-80 font-bold border px-4 py-2">
                      Ticket ID
                    </td>
                    <td className=" w-80 font-bold border px-4 py-2">
                      Employee ID
                    </td>
                    <td className=" w-80 font-bold border px-4 py-2">
                      Employee Name
                    </td>
                    <td className=" w-80 font-bold border px-4 py-2">
                      Service Status
                    </td>
                    <td className=" w-80 font-bold border px-4 py-2">
                      Service Priority
                    </td>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {filterTickets().map((ticket) => (
                    <tr key={ticket._id.$oid} className="border">
                      <td className="border px-4 py-2">{ticket.ticket_id}</td>
                      <td className="border px-4 py-2">
                        {ticket.assigned_to_id}
                      </td>
                      <td
                        className="border px-4 py-2"
                        style={{ textTransform: "capitalize" }}
                      >
                        {ticket.assigned_to_name}
                      </td>
                      <td
                        className="border px-4 py-2"
                        style={{ textTransform: "capitalize" }}
                      >
                        {ticket.status}
                      </td>
                      <td
                        className="border px-4 py-2"
                        style={{ textTransform: "capitalize" }}
                      >
                        <span className={getSentimentClass(ticket.sentiment)}>
                          {getSentimentLabel(ticket.sentiment)}
                        </span>
                      </td>
                      {/* Render other ticket details in additional table cells */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="tickets"></div>
        </div>
      </div>
    </div>
  );
}
