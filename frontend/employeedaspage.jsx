import EmployeeDash from "./Components/EmployeeDash";
import Navbar from "./Components/navbar";
import TopNav from "./Components/topnav";

export default function EmployeeDashPage() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="w-full flex flex-col justify-around">
        <TopNav value="Home"/>
        <EmployeeDash />
      </div>
    </div>
  );
}
