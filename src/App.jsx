import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import "./App.css";

const employeesData = [
  {
    id: 1,
    name: "Johnsan Wood",
    role: "Front End Developer",
    email: "johnsanwood@microsoft.com",
    status: "active",
  },
  {
    id: 2,
    name: "John Dee",
    role: "Team Lead",
    email: "johndoe@microsoft.com",
    status: "active",
  },
  {
    id: 3,
    name: "Fakhar Naveed",
    role: "UI/UX Designer",
    email: "fakhar@microsoft.com",
    status: "inactive",
  },
  {
    id: 4,
    name: "Alex Made",
    role: "Software Engineer",
    email: "alexm@microsoft.com",
    status: "active",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
  };

  const filteredEmployees = employeesData.filter((employee) => {
    return (
      (statusFilter === "all" || employee.status === statusFilter) &&
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="App">
      <header className="header">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>

        <div className="lowerHeader">
          
          <span className="total-employees">Employee</span>
          <div className="filter-section">
            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("active")}>Active</button>
            <button onClick={() => handleFilterChange("inactive")}>
              Inactive
            </button>
          </div>
        </div>
      </header>
      <div className="employee-container">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default App;
