import TopNav from "./topnav";
import Navbar from "./navbar";
import "./managerdash.css";
import { GiProgression } from "react-icons/gi";
import { Bars } from "react-loader-spinner";
import BarChart from "./BarChart";
import { useState } from "react";
import { useEffect } from "react";

export default function ManagerDashboard() {
  const [selectedInterval, setSelectedInterval] = useState("daily");
  const [employeeData, setEmployeeData] = useState([]);
  const [employeeTickets, setEmployeeTickets] = useState([]);
  const handleIntervalChange = (interval) => {
    setSelectedInterval(interval);
  };

  function formatDate(date) {
    const options = { hour12: true, hour: "numeric", minute: "numeric" };
    return new Date(date).toLocaleTimeString("en-US", options);
  }

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:5000/employee?"; // Replace with your API URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data["data"]);
        console.log(data["data"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:5000/ticket?customer=323131"; // Replace with your API URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const ticketData = data.data || [];
        console.log(ticketData);
        // Filter tickets based on today's date
        const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
        const filteredTickets = ticketData.filter((ticket) => {
          const ticketDate = new Date(ticket.created_at.$date)
            .toISOString()
            .split("T")[0];
          return ticketDate === today;
        });
        setEmployeeTickets(filteredTickets);
        // console.log(data["data"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <>
      <div className="flex flex-row">
        <div className="">
          <Navbar />
        </div>
        <div className="w-full bg-white">
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="timeline mt-5">
                <div className="sm:hidden"></div>
                <ul className="hidden text-sm font-medium text-center text-gray-600 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-600">
                  <li className="w-20">
                    <a
                      href="#barChartSection"
                      className="inline-block w-full rounded-l-lg h-10 p-2 bg-white hover:bg-[#086CC4] focus:bg-[#086CC4] focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-200 dark:hover:bg-[#086CC4]"
                      aria-current="page"
                      onClick={() => handleIntervalChange("daily")}
                    >
                      Daily
                    </a>
                  </li>
                  <li className="w-20">
                    <a
                      href="#barChartSection"
                      className="inline-block w-full h-10 p-2 bg-white hover:bg-[#086CC4] focus:bg-[#086CC4] focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-200 dark:hover:bg-[#086CC4]"
                      onClick={() => handleIntervalChange("weekly")}
                    >
                      Weekly
                    </a>
                  </li>
                  <li className="w-20">
                    <a
                      href="#barChartSection"
                      className="inline-block w-full h-10 p-2 bg-white hover:bg-[#086CC4] focus:bg-[#086CC4] focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-200 dark:hover-bg-[#086CC4]"
                      onClick={() => handleIntervalChange("monthly")}
                    >
                      Monthly
                    </a>
                  </li>
                  <li className="w-20">
                    <a
                      href="#barChartSection"
                      className="inline-block w-full h-10 p-2  bg-white hover:bg-[#086CC4]  focus:outline-none focus:bg-[#086CC4] focus:text-white dark:hover:text-white dark:bg-gray-200 dark:hover-bg-[#086CC4]"
                      onClick={() => handleIntervalChange("yearly")}
                    >
                      Yearly
                    </a>
                  </li>
                  <li className="w-20">
                    <a
                      href="#barChartSection"
                      className="inline-block w-full h-10 p-2 rounded-r-lg bg-white hover:bg-[#086CC4]  focus:outline-none focus:bg-[#086CC4] focus:text-white dark:hover:text-white dark:bg-gray-200 dark:hover-bg-[#086CC4]"
                      onClick={() => handleIntervalChange("all")}
                    >
                      All
                    </a>
                  </li>
                </ul>
              </div>
              <BarChart selectedInterval={selectedInterval} />
            </div>
          </dialog>
          <TopNav value="Manager Dashboard" />
          <div className="pl-5">
            <h1 className="text-5xl text-black font-bold ml-5 mt-10">
              {greeting} Rupesh!
            </h1>
            <h3 className="text-2xl text-black font-semibold ml-5 mt-10">
              Today's Tickets
            </h3>
            <div className="tickets mt-10 flex flex-col">
              {Array.isArray(employeeTickets) && employeeTickets.length > 0 ? (
                employeeTickets.map((ticket, index) => (
                  <div
                    key={index}
                    className="card w-96 bg-[#EEEEEE] text-primary-content"
                  >
                    <div className="card-body">
                      <div className="flex flex-row items-center justify-between">
                        <h2 className="card-title">
                          Ticket #{ticket.ticket_id}
                        </h2>
                        <span className="text-gray-500">
                          {formatDate(ticket.created_at["$date"])}
                        </span>
                      </div>
                      <p>{ticket.customer_query}</p>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center justify-around">
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <img
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                alt="Tailwind-CSS-Avatar-component"
                              />
                            </div>
                          </div>
                          <span
                            className="ml-3 font-semibold"
                            style={{ textTransform: "capitalize" }}
                          >
                            {ticket.assigned_to_name}
                          </span>
                        </div>

                        <span
                          className="font-semibold text-gray-500"
                          style={{ textTransform: "capitalize" }}
                        >
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex h-[150px] justify-center items-center">
                  <h3 className="text-gray-400 font-bold text-center">
                    No Tickets for Today
                  </h3>
                </div>
              )}
            </div>
            <div className="employee_data rounded-lg mt-10 mb-10 pb-5 mr-10 pt-5 bg-[#EEEEEE]">
              <h1 className="text-xl text-black font-bold pl-5 pb-3">
                Employee Data
              </h1>
              <div className="overflow-y-auto h-[200px] bg-white">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {Array.isArray(employeeData) && employeeData.length > 0 ? (
                      employeeData.map((employee, index) => (
                        <tr key={index}>
                          <td>{employee.employee_id}</td>
                          <td style={{ textTransform: "capitalize" }}>
                            {employee.name}
                          </td>
                          <td>{employee.mobile}</td>
                          <td>{employee.email}</td>
                          <td>
                            <button
                              className="btn bg-[#086CC4]"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_3")
                                  .showModal()
                              }
                            >
                              <GiProgression className="text-white text-xl" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="flex justify-center items-center h-full">
                        <Bars
                          height="60"
                          width="60"
                          color="#086CC4"
                          ariaLabel="bars-loading"
                          wrapperStyle={{}}
                          wrapperClass="pl-72 ml-72"
                          visible={true}
                        />
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
