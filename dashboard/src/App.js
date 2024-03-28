import './App.css';
import Alert from './components/Alert';
import { DonutChart } from './components/DonutChart';
import HighPriorityAlerts from './components/HighPriorityAlerts';
import Navbar from './components/Navbar';
import QuickActions from './components/QuickActions';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';
import TodayHighlights from './components/TodayHighlights';
import '@fontsource/roboto/300.css';

const data = [
  { name: "Mark", value: 50 },
  { name: "Robert", value: 40 },
  { name: "Emily", value: 90 },
]

function App() {
  return (
    <div>
      <div className='d-flex flex-row'>
        <Navbar />
        <div className='px-3 item-2'>
          <div className='d-flex flex-row justify-content-between mt-3'>
            <h2>Dashboard</h2>
            <div className='search-noti-more d-flex flex-row' style={{height:"100%"}}>
              <SearchIcon className='m-2' />
              <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "secondary.light" }} />
              <NotificationsNoneIcon className='m-2'  />
              <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "secondary.light" }} />
              <MoreVertIcon className='m-2' />
            </div>
          </div>
          <div className='row justify-content-around'>
            <DonutChart heading={"Orders"} data={data} />
            <DonutChart heading={"Trips"} data={data} />
            <DonutChart heading={"Revenue"} data={data} />
            <DonutChart heading={"Expenses"} data={data} />
          </div>

          <div className='row mt-2'>
            <h5>Quick Actions</h5>
          </div>
          <QuickActions />

          <div className='mt-2 d-flex flex-row justify-content-between'>
            <h5 className='col-6'>High Priority alerts(14)</h5>
            <HighPriorityAlerts />
          </div>
          <div className="alerts row justify-content-around px-3">
            <Alert title="Driver Raised Concern" iconClass="bi bi-person" LoadNo="12454" BillTo="RoaDo demo Bangalore" date="13 Feb 24" />
            <Alert title="Driver Raised Concern" iconClass="bi bi-person" LoadNo="12454" BillTo="RoaDo demo Bangalore" date="13 Feb 24" />
          </div>
        </div>
        <div className='item-3 mx-1 px-3'>
          {/* <img src="./Frame3.png" alt="" /> */}
          <TodayHighlights/>
        </div>
      </div>
    </div>
  );
}

export default App;
