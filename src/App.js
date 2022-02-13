import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home'
import Header from "components/Header"

function App() {
  console.log("dxm 1")
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
