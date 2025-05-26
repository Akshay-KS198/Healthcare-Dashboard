import './style.css';


const dates = [{
  day: "Mon",
  date: 25
},{
  day: "Tues",
  date: 26
},
{
  day: "Wed",
  date: 27
},
{
  day: "Thurs",
  date: 28
},
{
  day: "Fri",
  date: 29
},
{
  day: "Sat",
  date: 30
},
{
  day: "Sun",
  date: 31
}]
const timeArray = ["10:00", "11:00","12:00", "08:00", "09:00", "13:00", "14:00", "15:00", "16:00", "......" ]
const CalendarView = () => {
  return (
    <div>
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="calendar-nav">
          <button>{'<-'}</button>
          <button>{'->'}</button>
        </div>
      </div>
      <div className="calendar">
        {dates.map((dayDate,i) => (
          <div className={i==1 ? "day-selected":"calendar-day"} key={dayDate}>
            <span className="day-name">{dayDate.day}</span> <br></br>
            <span className="date-name">{dayDate.date}</span>
            <div className="day-slots">
              <span className={i%2 !== 0 ? "slot-selected": "slot"}>{timeArray[i]}</span>
              <span className='slot'>{timeArray[Math.floor(Math.random()*10)]}</span>
              <span className='slot'>{timeArray[Math.floor(Math.random()*10)]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-cards">
        <div className="dentist">
          <div className='name-icon-container'>
            <h5>Dentist</h5>
            <>🦷</>
          </div>
          <p>09:00 - 11:00<br />Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card">
          <div className='name-icon-container'>
             <h5>Physiotherapy Appointment</h5>
             <>💪🏻</>
          </div>
          <p>11:00 - 12:00<br />Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
