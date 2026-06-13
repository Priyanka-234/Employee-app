import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((res) => setEmployees(res.data));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>

      {employees.map((emp) => (
        <p key={emp.id}>{emp.name}</p>
      ))}
    </div>
  );
}

export default App;