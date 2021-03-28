import React, { Component } from 'react'
import PatientService from '../services/PatientService';


class CreateInPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            patientName: '',
            sfName: '',
            age: '',
            city: '',
            malady: '',
            ward:'',
            r_no:'',
            a_date:''
        }

        this.changepatientNameHandler = this.changepatientNameHandler.bind(this);
        this.changesfNameHandler = this.changesfNameHandler.bind(this);
        this.changeageHandler = this.changeageHandler.bind(this);
        this.changecityHandler = this.changecityHandler.bind(this);
        this.changemaladyHandler = this.changemaladyHandler.bind(this);
        this.changewardHandler = this.changewardHandler.bind(this);
        this.changer_noHandler = this.changer_noHandler.bind(this);
        this.changea_dateHandler = this.changea_dateHandler.bind(this);
        this.saveInPatient = this.saveInPatient.bind(this);
    }

    // // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.id === '_add1'){
    //         return
    //     }else{
    //         PatientService.getEmployeeById(this.state.id).then( (res) =>{
    //             let patient = res.data;
    //             this.setState({patientName: patient.patientName,
    //                 sfName: patient.sfName,
    //                 age : patient.age,
    //                 city :patient.city,
    //                 malady :patient.malady,
    //                 ward : patient.ward,
    //                 r_no : patient.r_no,
    //                 a_date : patient.a_date
    //             });
    //         });
    //     }        
    // }
    
    saveInPatient = (e) => {
        e.preventDefault();
        let patient = {patientName: this.state.patientName, sfName: this.state.sfName, age: this.state.age, city: this.state.city, malady: this.state.malady, ward: this.state.ward, r_no: this.state.r_no, a_date: this.state.a_date};
        console.log('patient => ' + JSON.stringify(patient));

        // step 5
        
            PatientService.createInPatient(patient).then(res =>{
                this.props.history.push('/inpatient_details');
         
            })
    }
    
    changepatientNameHandler= (event) => {
        this.setState({patientName: event.target.value});
    }

    changesfNameHandler= (event) => {
        this.setState({sfName: event.target.value});
    }

    changeageHandler= (event) => {
        this.setState({age: event.target.value});
    }
    
    changecityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changemaladyHandler= (event) => {
        this.setState({malady: event.target.value});
    }

    changewardHandler= (event) => {
        this.setState({ward: event.target.value});
    }

    
    changer_noHandler= (event) => {
        this.setState({r_no: event.target.value});
    }

    changea_dateHandler= (event) => {
        this.setState({a_date: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add1'){
            return <h3 className="text-center">Add Patient</h3>
        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container2">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    conlose.log("hello");
                                    <form>
                                        <div className = "form-group">
                                            <label> Patient Name: </label>
                                            <input placeholder="Patient Name" name="patientName" className="form-control" 
                                                value={this.state.patientName} onChange={this.changepatientNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Spouse/Father Name: </label>
                                            <input placeholder="Spouse/Father Name" name="sfName" className="form-control" 
                                                value={this.state.sfName} onChange={this.changesfNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeageHandler}/>
                                        </div>

                                        
                                        <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changecityHandler}/>
                                        </div>

                                        
                                        <div className = "form-group">
                                            <label> Malady: </label>
                                            <input placeholder="Malady" name="malady" className="form-control" 
                                                value={this.state.malady} onChange={this.changemaladyHandler}/>
                                        </div>

                                       
                                        <div className = "form-group">
                                            <label> Ward: </label>
                                            <input placeholder="Ward" name="ward" className="form-control" 
                                                value={this.state.ward} onChange={this.changewardHandler}/>
                                        </div>

                                        
                                        <div className = "form-group">
                                            <label> Room_no: </label>
                                            <input placeholder="Room NO" name="r_no" className="form-control" 
                                                value={this.state.r_no} onChange={this.changer_noHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="Date" className="form-control" 
                                                value={this.state.a_date} onChange={this.changea_dateHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveInPatient}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateInPatientComponent
