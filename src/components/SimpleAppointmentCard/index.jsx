import './style.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="card-content">
        <p className="card-title">{title}</p>
        <div className="card-icon">{icon}</div>
      </div>
      <p className="card-time">{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
