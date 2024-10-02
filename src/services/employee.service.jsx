import store from '../app/store';
class EmployeeService {
    static add(formData) {
        store.dispatch({ type: 'employee/addEmployee', payload: formData });
    }
}
export default EmployeeService;
