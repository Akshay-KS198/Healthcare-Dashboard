import './style.css';

const healthData = [
  { title: '🫁 Lungs', date: '26 Oct 2021', status: 'bad'},
  { title: '🦷 Teeth', date: '26 Oct 2021', status: 'good'},
  { title: '🦴 Bone', date: '26 Oct 2021', status: 'warning'}
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthData.map((item, index) => (
        <div className="health-card" key={index}>
          <div className="card-info">
            <h3>{item.title}</h3>
            <p>Date: {item.date}</p>
            <div className='status-container'>
                <div
                className={`status-fill ${item.status}`}
              ></div>
              <div className='status-fill'></div>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
