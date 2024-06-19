import CustChatWindow from "./Components/custchatwin";
import Navbar from "./Components/navbar";
import TopNav from "./Components/topnav";

export default function CustomerChat() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="w-full flex flex-col justify-around">
        <TopNav value="Direct Messages" />
        <CustChatWindow />
      </div>
    </div>
  );
}
