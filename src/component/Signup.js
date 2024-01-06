import React,  { useState } from 'react';
import "../css/style.css";
import Select from 'react-select'
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [organisationname, setOrganizationName] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [noofemployees, setEmployeeCount] = useState('');

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (!organisationname.trim() || !zipcode.trim() || !noofemployees) {
      alert('Please fill in all required fields.');
      return;
    }
    
    sessionStorage.setItem('OrganizationName', organisationname)
    sessionStorage.setItem('ZipCode', zipcode)
    sessionStorage.setItem('EmployeeCount', noofemployees)
    navigate('/Signupsnd');

    console.log("session", sessionStorage);
  };

  const employeeOptions = [
    { value: '', label: 'Select' },
    { value: '1-5', label: '1-5' },
    { value: '6-20', label: '6-20' },
    { value: '21-50', label: '21-50' },
    { value: '50+', label: '50+' },
  ];

  return (
    <div className='container-fluid'> 
    <div className="row">
    <div className="col-md-6 ">
      <div className='logined'>
      <img src='/images/signlogo.png'/>
      <h2>Sign Up</h2>
      <p>Fill Your Information And Start Your Bussiness <br/>  With Us </p>

      <label htmlFor="input1">Organization Name</label>
                <input type="text" className="form-control" id='organisationname' placeholder='9 HCM' style={{height: "35px"}}  value={organisationname}
        onChange={(e) => setOrganizationName(e.target.value)}/>

      {/* <label htmlFor="input1" style={{marginTop: '10px', }}> Number Of Employee </label> <br/>
     */}

      <label htmlFor="noofemployees" style={{ marginTop: '10px' }}>Number Of Employee</label> <br />
            <Select
              className='dropsign'
              id='noofemployees'
              value={employeeOptions.find(option => option.value === noofemployees)}
              onChange={(selectedOption) => setEmployeeCount(selectedOption.value)}
              options={employeeOptions}
            /> <br />
       {/* <select className='dropsign' id='noofemployees' value={noofemployees}
        onChange={(e) => setEmployeeCount(e.target.value)}>
        <option></option>
        <option> 1-5 </option>
        <option> 6-20 </option> 
        <option> 21-50 </option>
        <option> 50+ </option>
       </select> <br/> */}

    <label htmlFor="input1"  style={{marginTop: '10px'}}>Zip Code</label>
     <input type="text" className="form-control" id='zipcode' placeholder='000551' style={{height: "35px"}}  value={zipcode}
    onChange={(e) => setZipCode(e.target.value)}/>

    <button className='Tbtn'  onClick={handleNextButtonClick} style={{textDecoration: 'none', color: '#fff'}} type='submit'>Next</button>

    {/* <div className='logbtn' style={{display: 'flex', marginTop: '10px'}}>
    <img src='/images/Googlee.png' style={{ width: '150px', height: '25px',  marginLeft: '125px'  }}/>
    <img src='/images/Linkedin.png' style={{ width: '150px', height: '25px', marginLeft: '70px' }}/>
        </div>        */}
        <div className='logp'>
            <p> Already have an Account? <Link to="/"> Sign In </Link> </p>
        </div>           
      </div>
    
    </div>
    <div className="col-md-6">
        <div className='loginimg'>
    < img src='/images/image blur.png'/>
    <div className='logimg2'>
    <img src='/images/Vectors.png' style={{ width: '50px', height: '50px' }} />
    <p>Your time is limited, so don't waste it living someone <br/> else's life.  Don't be trapped by dogma</p>
    </div>
        <div>

        </div>
    </div>
    </div>
  </div>
    </div>
  )
}
export default Signup;