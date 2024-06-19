import EmpChatWindow from "./Components/empchatwin";
import Navbar from "./Components/navbar";
import TopNav from "./Components/topnav";

export default function EmployeeChat() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="w-full flex flex-col justify-around">
        <TopNav value="Direct Messages"/>
        <EmpChatWindow />
      </div>
    </div>
  );
}
