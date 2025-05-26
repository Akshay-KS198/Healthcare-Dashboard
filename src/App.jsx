import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActivityFeed from './components/DashboardMainContent/ActivityFeed';
import CalendarView from './components/DashboardMainContent/CalendarView';
import UpcomingSchedule from './components/DashboardMainContent/UpcomingSchedule';
import AnatomySection from './components/DashboardMainContent/DashboardOverview/AnatomySection';
import HealthStatusCards from './components/DashboardMainContent/DashboardOverview/HealthStatusCards';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
      <div className='dashboard-calendar-container'>
        <div className='dashboard-activity-container'>
           <div className='dashboard-section'>
            <AnatomySection />
            <HealthStatusCards />
        </div>
      <div className='activity-feed-container'>
        <ActivityFeed/>
      </div>
      </div>
        <div className='calendar-schedule-container'>
        <CalendarView />
        <UpcomingSchedule />
      </div>
      </div>
      </div>
    </div>
  );
};

export default App;
