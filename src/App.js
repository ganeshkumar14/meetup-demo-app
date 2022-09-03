import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetup";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
