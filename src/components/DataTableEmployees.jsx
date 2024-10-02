import DataTable from 'react-data-table-component';
import { columns } from '../utils/userDataTable';

function DataTableEmployees({ employees }) {
    return <DataTable columns={columns} data={employees} pagination paginationRowsPerPageOptions={[10, 25, 50, 100]} fixedHeader highlightOnHover />;
}
export default DataTableEmployees;
