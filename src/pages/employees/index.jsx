import { Link } from 'react-router-dom';

function Employees() {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold mb-4">Temporary Page</h1>
            <p className="text-lg">This page is currently under construction</p>
            <Link to="/employees/create">Create</Link>
        </div>
    );
}
export default Employees;
