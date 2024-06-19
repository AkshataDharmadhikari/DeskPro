import { GoHomeFill } from "react-icons/go";
import { IoTicket, IoSettings, IoChatbubblesSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navpage flex">
      <div className=" sidebar flex-none w-16 h-[800px] bg-[#086CC4] ">
        <img
          src="/deskprologofinal.png"
          style={{ width: "85%" }}
          alt="logo"
          className="mt-2 ml-1"
        />
        <div className="icons flex flex-col space-y-6 ml-3 mt-24">
          <div>
            <NavLink to="/managerdash">
            <GoHomeFill size={30} style={{ color: "white" }} />
            </NavLink>
          </div>
          <div>
          <NavLink to="/managertickets">
            <IoTicket size={30} style={{ color: "white" }} />
          </NavLink>
          </div>
          <div>
            <IoSettings size={30} style={{ color: "white" }} />
          </div>
          <div>
            <IoChatbubblesSharp size={30} style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
