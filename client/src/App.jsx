import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  //State for form inputs
  const [form, setForm] = useState({ date: "", time: "", location: "", note: "" });
  
  //state for the list of date entries fetched from backend
  const [dates, setDates] = useState([]);
  const [editingId, setEditingId] = useState(null);
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
  // Load a date into the form for editing
  const handleEdit = (entry) => {
    setForm({ date: entry.date, time: entry.time, location: entry.location, note: entry.note });
    setEditingId(entry._id);
  };
// Delete a date
   const handleDelete = async (id) => {
  if (!window.confirm("Delete this date?")) return;
  try {
    await axios.delete(`/api/dates/${id}`);
    fetchDates();
  } catch {
    alert("Failed to delete date");
  }
};

  // Fetch dates from backend when component mounts
  useEffect(() => {
    fetchDates();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Date Planner</h1>

      {/*This is the form that will take date information */}
      <form onSubmit={handleSubmit} className="grid gap-2">
        <input
          placeholder="Date"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          placeholder="Time"
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
        />
        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <textarea
          placeholder="Note"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
        />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingId ? "Update Date" : "Add Date"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ date: "", time: "", location: "", note: "" });
            }}
            className="bg-gray-400 text-white p-2 rounded"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <ul className="mt-4">
        {dates.map((d) => (
          <li key={d._id} className="border p-2 my-2">
            <strong>{d.date} at {d.time}</strong><br />
            📍 {d.location}<br />
            📝 {d.note}<br />
            <div className="mt-2 flex gap-2">
              <button onClick={() => handleEdit(d)} className="text-blue-600 underline">
                Edit
              </button>
              <button onClick={() => handleDelete(d._id)} className="text-red-600 underline">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;