
import PropTypes from "prop-types"; 

const EmployeeCard = ({ employee }) => {
  const handleBlock = () => {
    alert(`${employee.name} has been blocked!`);
  };

  const handleDetails = () => {
    alert(`Details of ${employee.name}`);
  };

  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p>{employee.email}</p>
      <div className="button-group">
        <button className="block-btn" onClick={handleBlock}>Block</button>
        <button className="details-btn" onClick={handleDetails}>Details</button>
      </div>
    </div>
  );
};

// PropTypes validation
EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeCard;
