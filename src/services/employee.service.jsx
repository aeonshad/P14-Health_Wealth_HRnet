import { v4 as uuidv4 } from 'uuid';
import store from '../app/store';
class EmployeeService {
    static add(formData) {
        const newEmployee = {
            ...formData,
            id: uuidv4(),
            dateOfBirth: new Date(formData.dateOfBirth).toISOString(),
            startDate: new Date(formData.startDate).toISOString(),
        };
        store.dispatch({ type: 'employee/addEmployee', payload: newEmployee });
    }
    static delete(idEmployee) {
        store.dispatch({ type: 'employee/removeEmployee', payload: idEmployee });
    }
}
export default EmployeeService;
