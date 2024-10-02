import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTableEmployees from '../../components/DataTableEmployees';

function Employees() {
    const employeesStore = useSelector((state) => state.employees);

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-4xl font-bold mb-4">Employees</h1>
            <Link to="/employees/create">Create</Link>
            {employeesStore.length > 0 ? (
                <div className="rounded-xl border border-border bg-card text-card-foreground shadow flex-[2] mb-10">
                    <div className="p-6 pt-0 mt-6">
                        <DataTableEmployees employees={employeesStore} />
                    </div>
                </div>
            ) : (
                <p className="text-lg">This page does not contain any employees</p>
            )}
        </div>
    );
}
export default Employees;
