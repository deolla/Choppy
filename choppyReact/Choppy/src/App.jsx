// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuickAndEasyPage from './pages/QuickAndEasyPage';
// Import other pages as needed...

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quick-and-easy" element={<QuickAndEasyPage />} />
      {/* Add other routes... */}
    </Routes>
  </Router>
);

export default App;
