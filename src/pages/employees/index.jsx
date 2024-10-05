import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataTableEmployees from '../../components/DataTableEmployees';

function Employees() {
    const employeesStore = useSelector((state) => state.employees);

    return (
        <div className="flex flex-col  justify-center mt-10 max-w-7xl m-auto flex-wrap w-full gap-4 px-4 mb-4">
            <div className="flex items-center gap-1 w-full md:flex-1 min-w-[200px] justify-between  ">
                <h1 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-caption ">
                    Employees
                </h1>

                <Link
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground  hover:bg-secondary/80 h-9 px-4 py-2 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    to="/employees/create"
                >
                    New employee
                </Link>
            </div>
            {employeesStore.length > 0 ? (
                <div className="flex flex-col text-card-foreground flex-[2] mb-10">
                    <DataTableEmployees employees={employeesStore} />
                </div>
            ) : (
                <p className="text-lg">This page does not contain any employees</p>
            )}
        </div>
    );
}
export default Employees;
