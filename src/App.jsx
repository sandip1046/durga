import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import "./App.css";
import { FaChevronDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const employeesData = [
  {
    id: 1,
    name: "Johnsan Wood",
    role: "Front End Developer",
    email: "johnsanwood@microsoft.com",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Random image
  },
  {
    id: 2,
    name: "John Dee",
    role: "Team Lead",
    email: "johndoe@microsoft.com",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/2.jpg", // Random image
  },
  {
    id: 3,
    name: "Fakhar Naveed",
    role: "UI/UX Designer",
    email: "fakhar@microsoft.com",
    status: "inactive",
    image: "https://randomuser.me/api/portraits/men/3.jpg", // Random image
  },
  {
    id: 4,
    name: "Alex Made",
    role: "Software Engineer",
    email: "alexm@microsoft.com",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/4.jpg", // Random image
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
        <div className="headertop">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="search-bar"
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="profile-section">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg" // Replace with actual image URL
              alt="User Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <h4>Fakhar Naveed</h4>
              <FaChevronDown />
            </div>
          </div>
        </div>

        <div className="lowerHeader">
          <span className="total-employees">Employees</span>
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
