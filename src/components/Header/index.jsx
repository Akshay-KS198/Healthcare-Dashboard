import { Bell, Plus } from 'lucide-react';
import './style.css';

const Header = () => {
  return (
    <div className="header">
      <div className='left-half'>
        <input type="text" placeholder="Search" className="search-bar" />
        <Bell size={25} className="icon" />
        <div className='profile-container'>
        <div className="profile">
          <img src="https://as2.ftcdn.net/jpg/01/93/23/35/1000_F_193233546_kPAveM5MU8YoMDp8ywNYKnhubGaaS5B3.jpg" className='profile-img' alt="User" />
        </div>
        <button className="add-button"><Plus size={16} /></button>
         <Bell size={25} className="icon-1" />
      </div>
      
      </div>
      <div className='right-half'>
        <div className="header-right">
        <div className="profile">
          <img src="https://as2.ftcdn.net/jpg/01/93/23/35/1000_F_193233546_kPAveM5MU8YoMDp8ywNYKnhubGaaS5B3.jpg" className='profile-img' alt="User" />
        </div>
        <button className="add-button"><Plus size={16} /></button>
      </div>
      </div>
    </div>
  );
};

export default Header;
