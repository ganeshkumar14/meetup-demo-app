import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupPage from './pages/AllMeetup';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
      <Route path='/' element={<AllMeetupPage/>} />
      <Route path='/favorite' element={<FavoritePage/>} />        
      <Route path='/new-meetup' element={<NewMeetupPage/>} />     
      </Routes>
    </div>
  );
}

export default App;
