import { Routes, Route } from 'react-router-dom';

import FeedPage from './pages/FeedPage/FeedPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PublishIdeaPage from './pages/PublishActivityPage';
import GeneratorPage from './pages/GeneratorPage/GeneratorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EditProfilePage from './pages/EditProfilePage';
import NavOutlet from './components/NavOutlet';

import './App.css';
<<<<<<< HEAD
import Activity from './pages/Activity/Activity';
=======
>>>>>>> 5174055 (style: basic style for EditProfile page)

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
        <Route path="/" element={<FeedPage />} />
=======
>>>>>>> 5174055 (style: basic style for EditProfile page)
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route element={<NavOutlet />}>
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<FeedPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/activity/:id" element={<Activity />} />
          <Route path="/generator" element={<GeneratorPage />} />
        </Route>
        <Route path="/publish-activity" element={<PublishIdeaPage />} />
        <Route path="/*" element={<p>page not found</p>} />
      </Routes>
    </div>
  );
};

export default App;
