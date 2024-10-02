import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/home';
import Employees from './pages/employees';
import CreateEmployee from './pages/employees/createEmployee';

function App() {
    return (
        <Router>
            <Header />
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employees/create" element={<CreateEmployee />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

