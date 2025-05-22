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

  //form submit handler to add a new date entry
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/dates", form);  // Send POST request with form data
      setForm({ date: "", time: "", location: "", note: "" }); // Reset form
      fetchDates(); // Refresh the dates list after adding new entry
    } catch {
      alert("Failed to save date");
    }
  };

  // Fetch dates from backend when component mounts
  useEffect(() => {
    fetchDates();
  }, []);


  
}