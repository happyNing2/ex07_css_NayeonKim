import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexCon />}></Route>
      <Route path="login" element={<LoginCon />}></Route>
    </Routes>
  );
}

export default App;
