// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuickAndEasyPage from './pages/QuickAndEasyPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quick-and-easy" element={<QuickAndEasyPage />} />
    </Routes>
  </Router>
);

export default App;
