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
      <div className="employeecard-heading">
        <div>
        <img
          src={employee.image} // Render the employee's profile image
          className="employee-image"
        />

        </div>

        <div className="employee-namerole">
        <h3 className="employee-name">{employee.name}</h3>
        <p className='employee-role'>{employee.role}</p>

        </div>
      </div>
      <div className="employee-email">
      <span>Email: </span><p>{employee.email}</p>

      </div>
      <div className="button-group">
        <button className="block-btn" onClick={handleBlock}>
          Block
        </button>
        <button className="details-btn" onClick={handleDetails}>
          Details
        </button>
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
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployeeCard;
