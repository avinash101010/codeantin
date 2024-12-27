import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import routing components
import Login from './components/Logincopy'; // Adjust the path as needed
import Repositories from './components/Repositories'; // Adjust the path as needed
import MainPage from './Main'; // Adjust the path as needed

function App() {
  return (
    <div>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Repositories />} />
        <Route path="/index" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
