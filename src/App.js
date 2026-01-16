import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import MemInfoCon from './containers/MemInfoCon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexCon />}></Route>
      <Route path="/login" element={<LoginCon />}></Route>
      <Route path="/register" element={<RegCon />}></Route>
      <Route path="/list" element={<ListCon />}></Route>
      <Route path="/memberinfo" element={<MemInfoCon />}></Route>
    </Routes>
  );
}

export default App;
