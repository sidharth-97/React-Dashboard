import { useState } from "react";
import "./App.css";
import Table from "./components/table";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import EventDetails from "./components/EventDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="r-container">
      <div>
        <Navbar />
      </div>
      <div className="flex gap-4">
        <Sidebar />
        {/* <EventDetails /> */}
        <Table/>
        </div>
        </div>
    </div>
  );
}

export default App;
