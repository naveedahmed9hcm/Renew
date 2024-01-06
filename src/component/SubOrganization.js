import React,  { useState, useEffect } from 'react';
import { fetchData, postData } from '../HttpService/HttpService'
import "../css/style.css";
import  {buttonsIcon} from '../SVGImages';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";

function SubOrganization() {
   
    // Dark Mode Code 
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    }
   
    const [mydatas, setMydata] = useState([]);
    const [mycity, setCitys] = useState([]);
    const [mystate, setMystate] = useState ([])

    const [OrgName, setOrgName] = useState ([])
    const [owner, setOwner] = useState ([])
    const [PhoneNo, setPhoneNo] = useState ([])

    const [Email, setEmail] = useState([])

    const [mycityd, setCityd] = useState([]);
    const [mycountry, setCountry] = useState([]);
    const [mystates, setState] = useState([]);
    
    // OnChanged Function  

const handleCountrySelect = (event) => {
        // getApiState(event.target.value)
        setCountry(event.target.value)
}

const handleStateSelect = (event) => {
    // getApiCity(event.target.value)
    setState(event.target.value)
}

const handleCitySelect = (event) => {
    setCityd(event.target.value)
}

const handleInputOrg = (event) => {
    setOrgName(event.target.value)
}

const handleInputPhone = (event) => {
    setPhoneNo(event.target.value)
}

const handleInputEmail = (event) => {
    setEmail(event.target.value)
}

const handleInputOwner = (event) => {
    setOwner(event.target.value)
}

const handlePostData = async (event) => {
  
       var payload ={
            'nameofowner': sessionStorage.getItem("nameofowner"),
            'email': sessionStorage.getItem("email"),
            'phoneno': sessionStorage.getItem("phoneno"),
            'stateid': mystates,
            'countryid': mycountry,
            'cityid': mycityd,
            'organisationname': OrgName,
            'nameofowner': owner,
            'phone': PhoneNo,
            'email':Email
        }
        try {
          const result = await postData("/OrganisationInformation/CreateOrganisationInformation", payload);
          console.log(result);
        } catch (error) {
          console.error('Error posting data:', error);
        }
        alert("Submitted")
     };

     useEffect(() => {
        let temp = sessionStorage.getItem("nameofowner")
        setOrgName(temp)
        console.log(temp)
    }, [])

    useEffect(() => {
        let temps = sessionStorage.getItem("email")
        setEmail(temps)
        console.log(temps)
    }, [])

    useEffect(() => {
        let tempn = sessionStorage.getItem("phoneno")
        setPhoneNo(tempn)
        console.log(tempn)
    }, [])

      // Integration Get Country

    //   const GetCountryData = async() => {
    //   const res = await axios.get("http://localhost:5247/api/Department/GetAllCountry");
    //   setMydata(res.data.Response) } 
    
      // Integration Get State

    //   const getApiState = async(countryid) => {  
    //      const res = await axios.get("http://localhost:5247/api/Department/GetAllState?countryid="+ countryid +""); 
    //      setMystate(res.data.Response) 
    //  } 
        // Integration Get Cities
        
        // const getApiCity = async(stateid) => {  
        // const res = await axios.get("http://localhost:5247/api/Department/GetAllCity?stateid="+ stateid +"");
        // setCitys(res.data.Response) } 
            
        //       useEffect(() => {
        //         GetCountryData();
        //       }, []);   

    const [isMenuOpen, setMenuOpen]  = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();

    return (
<div className= {`${darkMode ? 'dark-theme' : 'light-theme'}`}>
<div className=  'form-data' style={{ display: 'flex', }} >
<div className='sidebar' >
<img src="/images/signlogo.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Asset provisionary.svg " onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Attendences.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Health safety and well being.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/HR analytics & reporting.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/legal compliance.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Onboarding & offboarding.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/payroll.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Performance Mangament.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Recruitment.svg" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/training & learning.svg" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Ellipse 47.png" onClick={toggleMenu}/>
</div>
</div>
<div>
<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>
<h2 style={{fontSize: '20px', color: '#626C83'}}>Saas</h2>

<div style={{display: 'flex', }}>
<img src="/images/Layer 1.png" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: '0', width: '60.677px', height: '35px'}} />
<img src="/images/Bar.png" style={{width: '24px', height: '24px', marginLeft:'125px'}}  onClick={toggleMenu}/>
</div>
<div className='sideline'>

<ul>
            <li>  <Link to="/Organization">  <buttonsIcon.Cancel stroke="#3395FF" c="bg-sky-50 hover:bg-sky-200 hover:cursor-pointer p-[4px] w-[30px] h-[30px] rounded-full" strokeWidth="1.33087"  fill="#bbe2fa" h={18} w={18}/>  Organization</Link> </li>
            <li> <Link to="/SubOrganization"> <buttonsIcon.Download stroke="#3395FF" c="bg-sky-50 hover:bg-sky-200 hover:cursor-pointer p-[4px] w-[30px] h-[30px] rounded-full" strokeWidth="1.33087"  fill="#bbe2fa" h={18} w={18}/> Sub Organization</Link> </li>
            <li> <Link to="/Department">Department</Link> </li>
            <li> <Link to="/Designation">Designation</Link> </li>
            <li> <Link to="/Role">Roles</Link> </li>
            <li> <Link to="/Orgchart"> Org Chart</Link> </li>
        </ul>
{/* <Menu 
onChange={(e) => window.location.href = e.target.value}
mode="inline"
items={[
    {
        label: "Organization",
        key: "Organization", 
        children: [
            {
                label: (
                <Link to="/Organization">
                Create Organization
                </Link>
              ),
              value: "/",
            },
            {
                label: (
                <Link to="/SubOrganization">
                Sub Organization
                </Link>
              ),
              value: "/SubOrganization",
            },
            {
            label: (
            <Link to="/Department">
             Department
            </Link>
          ),
          value: "/Department",
        },
            {
                label: (
            <Link to="/Designation">
             Designation
            </Link>
          ),
          value: "/Designation",
        },
    // {
    //     label: (
    //         <Link to="/Project">
    //          Project
    //         </Link>
    //       ),
    //       value: "/Project",
    //       },
    {
        label: (
            <Link to="/Role">
               User Roles
            </Link>
          ),
          value: "/Role",
        },
//           {
//               label: (
//             <Link to="/Team">
//              Teams
//             </Link>
//      ),
//     value: "/Team",
// }, 
{
    label: (
        <Link to="/Orgchart">
         Organization Chart
        </Link>
      ),
      value: "/Orgchart",
    }, ], }, ]}
  className='labelside'
  >
</Menu> */}
      <ul>

</ul> </div> </div> </div>  </div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        {/* <input type='checkbox' name='' id='chk1' /> */}
                        {/* <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div> */}
                        <ul>
                        {/* <i className="fa fa-bell-o" aria-hidden="true"></i> */}
                        <div className='text'>
                          <label className="switchh">
                          <input type="checkbox" onClick={toggleDarkMode} />
                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>
                        </ul>                   
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>

      <div className='Cover' style={{ padding: '10px', height: '85vh'}}>
      <h2> Sub Organization </h2>
      <div className='Covermid'>

      <div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Sub Organization</label>
                <input type="text" className="form-control" onChange={handleInputOrg} id='organisationname' required  />
            </div>
        </div>


        <div className="col-md-6">
        <div className="form-group">
        <label htmlFor="input2">Address</label>
                <input type="text" className="form-control"
                //  onChange={handleInputAddress}
                  id='address' required />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Organization Name</label>
                <input type="text" className="form-control" value={OrgName}  onChange={(e) => {handleInputOrg(e); setOrgName(e.target.value);}}id='organisationname' required  />
            </div>
        </div>
        <div className="col-md-6">
        <div className="form-group">
        <label className='labels'>Country</label>
            <select className='sect' onChange={handleCountrySelect}>
        { mydatas.map( (Mdata) => (
            <option key={ Mdata.CountryId} value={Mdata.CountryId}> <p>{Mdata.Countryname} </p></option>
        ))
        }
</select>
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
        <div className="form-group">
        <label className='labels'>States</label>
            <select className='sect' onChange={handleStateSelect}> 
            { mystate.map( (Sdata) => (
            <option key={ Sdata.Stateid} value={Sdata.Stateid}> <p>{Sdata.StateName} </p></option>
        )) }  
            </select>
            </div>
        </div>

        <div className="col-md-6">
            
            <div className="form-group">
            <label className='labels'>Cities</label>
            <select className='sect' onChange={handleCitySelect} >
        { mycity.map( (Cdata) => (
            <option key={ Cdata.city} value={Cdata.city}> <p>{Cdata.Cityname} </p></option>
        )) }
       </select>
            </div>
          
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label htmlFor="input2">Name Of Owner</label>
                <input type="text" className="form-control" onChange={handleInputOwner} id='nameofowner' required />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
            <label htmlFor="input1">Email</label>
                <input type="text" className="form-control" value={Email} onChange={(e) => { handleInputEmail(e); setEmail(e.target.value); }} id='nameofowner' required />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
    <div className="col-md-6">
            <div className="form-group">
            <label htmlFor="input2">Phone No</label>
                <input type="text" className="form-control" value={PhoneNo}
                 onChange={(e) => { handleInputPhone(e); setPhoneNo(e.target.value); }} id='phone' required />
            </div>
        </div>

        {/* <div className="col-md-6">
            <div className="form-group">
            <label htmlFor="input2">Phone No</label>
                <input type="text" className="form-control" onChange={handleInputPhone} id='phone' required />
            </div>
        </div> */}

    </div>
</div>
<button onClick={() => { handlePostData(); navigate("/Department"); }}  type='submit' className='Tbtn'>Save</button>
</div>
</div>
   </div>

  
    </div>
        </div>
    )
}
export default SubOrganization;