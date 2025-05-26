import './style.css';
import anatomyImage from '../../../../assets/Human_body.png'

const AnatomySection = () => {
  return (
    <>
    <h1 className='dashboard-heading'>Dashboard</h1>
       <div className="anatomy-section">
      <img
        src={anatomyImage}
        alt="human anatomy"
        className="anatomy-image"
      />
      <div className='anatomy-scan-container'>
        <div className='heart-scanner-container'>
           <div class="scan-icon">
    <div class="scan-band"></div>
      </div>
        </div>
      <div className="anatomy-tag heart">❤️ Healthy Heart</div>
      </div>
      <div className='anatomy-scan-container'>
        <div className='knee-scanner-container'>
           <div class="scan-icon">
    <div class="scan-band"></div>
      </div>
        </div>
      <div className="anatomy-tag leg">🦵🏻 Healthy Leg</div>
      </div>
    </div>
    </>
  );
};

export default AnatomySection;
