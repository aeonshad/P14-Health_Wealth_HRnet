import store from '../app/store';
class EmployeeService {
    static add(formData) {
        const newEmployee = { ...formData, dateOfBirth: new Date(formData.dateOfBirth).toISOString(), startDate: new Date(formData.startDate).toISOString() };
        store.dispatch({ type: 'employee/addEmployee', payload: newEmployee });
    }
}
export default EmployeeService;
