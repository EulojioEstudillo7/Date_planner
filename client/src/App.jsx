import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  //State for form inputs
  const [form, setForm] = useState({ date: "", time: "", location: "", note: "" });

  //state for the list of date entries fetched from backend
  const [dates, setDates] = useState([]);

  //function to fetch all date entries from backend
  const fetchDates = async () => {
    try {
      const res = await axios.get("/api/dates");
      setDates(res.data);
    } catch (err) {
      alert("Failed to fetch dates");
    }
  };

}