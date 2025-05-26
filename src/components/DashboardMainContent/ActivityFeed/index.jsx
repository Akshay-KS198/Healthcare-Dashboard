import './style.css';
const data = [
  { day: 'Mon', bars: [90, 60, 50] },
  { day: 'Tues', bars: [50, 40, 30] },
  { day: 'Wed', bars: [45, 30, 100] },
  { day: 'Thurs', bars: [55, 45, 105] },
  { day: 'Fri', bars: [50, 35, 70] },
  { day: 'Sat', bars: [60, 45, 40] },
  { day: 'Sun', bars: [40, 60, 50] },
];

const barColors = ['gray', 'blue', 'teal'];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <span className="activity-summary">3 appointments on this week</span>
      <div className="chart">
      {data.map((item, index) => (
        <div className="day" key={index}>
          <div className="bars">
            {item.bars.map((height, i) => (
              <div
                key={i}
                className={`bar ${barColors[i]}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
          <div className="label">{item.day}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ActivityFeed;
