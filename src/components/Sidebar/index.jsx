import {
  LayoutDashboard,
  Clock,
  Calendar,
  ClipboardList,
  BarChart2,
  MessageCircle,
  LifeBuoy,
  Settings
} from 'lucide-react';
import './style.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo"><span style={{ color: '#00FFFF' }}>Health</span>care.</h2>
      <div className="nav-section">
        <p className="section-title">General</p>
        <div className="icons-container">
          <div className='icon-name-container'><LayoutDashboard size={20} /> Dashboard</div>
          <div className='icon-name-container'><Clock size={20} /> History</div>
          <div className='icon-name-container'><Calendar size={20} /> Calendar</div>
          <div className='icon-name-container'><ClipboardList size={20} /> Appointments</div>
          <div className='icon-name-container'><BarChart2 size={20} /> Statistics</div>
        </div>
        <p className="section-title">Tools</p>
        <div className='icons-container'>
          <div className='icon-name-container'><MessageCircle size={20} /> Chat</div>
          <div className='icon-name-container'><LifeBuoy size={20} /> Support</div>
        </div>
      </div>
      <div className='setting-container'>
          <div className='setting'><Settings size={20} /> Setting</div>
        </div>
    </div>
  );
};

export default Sidebar;
