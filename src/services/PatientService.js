import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8888/api/v1/patient_details";

class EmployeeService {


    createOutPatient(outpatient){
        return axios.post(EMPLOYEE_API_BASE_URL, outpatient);
    }

    createInPatient(patient){
        return axios.post(EMPLOYEE_API_BASE_URL, patient);
    }

}

export default new EmployeeService()