import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">

    <Router>
        
    <Routes>
<Route   index   element={<Login/>}>   </Route>
<Route  path="/dashboard"   element={<Dashboard/>} >    </Route>

    </Routes>
    </Router>
        
    </div>
  );
}

export default App;
