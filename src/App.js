import {Routes,Route} from 'react-router-dom';
import ExspenseTable from './components/ExspenseTable';
import AdminLogin from './components/AdminLogin';
import AdminExspenseTable from './components/AdminExspenseTable';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ExspenseTable/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
        <Route path="/adminhome" element={<AdminExspenseTable/>}/>
      </Routes>
      </>

  );
}

export default App;
