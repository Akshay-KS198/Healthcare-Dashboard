import SimpleAppointmentCard from '../../SimpleAppointmentCard';
import './style.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>

      <div className="schedule-section">
        <h5 className='appointment-heading'>On Thursday</h5>
        <div className="appointments-row">
          <SimpleAppointmentCard
            title="Health checkup complete"
            time="11:00 AM"
            icon="💉"
          />
          <SimpleAppointmentCard
            title="Ophthalmologist"
            time="14:00 PM"
            icon="👁️"
          />
        </div>
      </div>

      <div className="schedule-section">
        <h5 className='appointment-heading'>On Saturday</h5>
        <div className="appointments-row">
          <SimpleAppointmentCard
            title="Cardiologist"
            time="12:00 AM"
            icon="❤️"
          />
          <SimpleAppointmentCard
            title="Neurologist"
            time="16:00 PM"
            icon="🧠"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
