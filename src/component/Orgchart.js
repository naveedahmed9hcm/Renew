import React, { useState, useEffect } from 'react';
import "../css/style.css";
import  {buttonsIcon} from '../SVGImages';
import { Menu } from "antd";

import styled from 'styled-components';
import axios from 'axios';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Link, useNavigate } from "react-router-dom";
import 'reactflow/dist/style.css';

// const StyledNode = styled.div`
// padding: 5px;
// border-radius: 8px;
// display: inline-block;
// border: 1px solid black;
// opacity: 1; 
// transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
// &:hover {
//   background-color: #D9EDFF;
//   transform: scale(1.1); 
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;

const StyledNode = styled.div`
position: relative;
padding: 5px;
border-radius: 8px;
display: inline-block;
border: 1px solid black;
opacity: 1; 
transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    // background-color: black;
    transition: width 0.5s ease-in-out;
  }
  
  &::before {
    top: 0;
    left: 0;
  }
  
  &::after {
    bottom: 0;
    right: 0;
  }
  
  &:hover {
    // background-color: #D9EDFF;
    transform: scale(1.1); 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
    &::before,
    &::after {
      width: 100%;
    }
  }
`;

function Orgchart() {

  let organisationid = sessionStorage.getItem("organizationid")
  console.log(organisationid);
  const [mydatas, setMydata] = useState([]);
  const [member, setMember] = useState([]);
  const [employee, setEmployee] = useState([]);

  // Integration Get Top Management

  const GetCeoData = async (organisationid) => {

    // 'zipcode': sessionStorage.getItem("ZipCode"),

    const res = await axios.get('http://localhost:5247/api/OrganisationInformation/GetTopOrganisationMember?organisationid=4e0aa802-6697-4260-97dc-84e67aabc097');
    setMydata(res.data.Response)
    console.log(res);

  }

  useEffect(() => {

    GetCeoData();
  }, []);

  // Integration Get Top Members

  const GetMemberData = async () => {
    const res = await axios.get('https://localhost:7035/api/OrganisationInformation/GetTopOrganisationMember?organisationid=4e0aa802-6697-4260-97dc-84e67aabc097');
    setMember(res.data.Response)
  }

  useEffect(() => {
    GetMemberData(organisationid);
  }, []);

  // Integration Get Top Employee

  const GetEmployeeData = async () => {
    const res = await axios.get('http://localhost:5247/api/OrganisationInformation/GetAllEmployees?departmentid=a74585b3-62da-4b1c-bc11-8baf27a9403d');
    setEmployee(res.data.Response)
  }
  // console.log(mydatas, '123');
  useEffect(() => {
    GetEmployeeData();
  }, []);

  const [show, setShow] = useState(false);
  const [mangar, setManegar] = useState(false);
  const [ceo, setCeo] = useState(false)
  const [hr, setHr] = useState(false)

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  // Dark Mode Code
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  }
  return (

    <div className={`${darkMode ? 'dark-theme' : 'light-theme'}`}>

      <div className='form-data' style={{ display: 'flex', }}>

        <div className='sidebar'>

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

            {/* <div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div> */}

          </div>

          <div>

            <div id='sidemenu' style={{
              width: '220px',
              display: isMenuOpen ? 'none' : 'block',
            }}
            >

              <h2>Saas</h2>
              <div style={{ display: 'flex', }}>
                <img src="/images/Layer 1.png" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: '0', width: '60.677px', height: '35px' }} />
                <img src="/images/Bar.png" style={{ width: '24px', height: '24px', marginLeft: '125px' }} onClick={toggleMenu} />
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
                        //     ),
                        //     value: "/Team",
                        // },
                        {
                          label: (
                            <Link to="/Orgchart">
                              Organization Chart
                            </Link>
                          ),
                          value: "/Orgchart",
                        },

                      ],
                    },]}
                  className='labelside'>
                </Menu> */}
                <ul>
                  {/* <li> <Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> 
</li> */}


                </ul> </div> </div> </div> </div>
        <div className='Acc-from'>
          <div className='navbar11'>
            <input type='checkbox' name='' id='chk1' />
            <div className='search-box'>
              <form action=''>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type='text' name='search' id='srch' placeholder='Search' />
              </form>
            </div>
            <ul>
              <i className="fa fa-bell-o" aria-hidden="true"></i>
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
          <div className='Cover' style={{ padding: '10px' }}>
            <h2>Organization Chart</h2>
            <Tree
              lineWidth={'2px'}
              lineColor={'blue'}
              lineBorderRadius={'10px'}
              label={<StyledNode className="styleanimate" > <img src='/images/signlogo.png' /> <div style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}> {mydatas.map((Mdata) => (
                <option key={Mdata.designationtype} value={Mdata.designationtype}>  <p>   {Mdata.nameofowner
                } </p>   </option>
              ))
              }
              </div>  </StyledNode>}
            >

              <TreeNode label={<StyledNode className='styleanimate'> {
                show ? <p style={{ cursor: 'pointer' }} onClick={() => setManegar(!mangar)}> <img src='/images/signlogo.png' /> {mydatas.map((Mdata) => (
                  <option key={Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.designationtype
                  } </p> </option>
                ))
                } </p> : null
              }
              </StyledNode>}>
                <TreeNode label={<StyledNode className='styleanimate'> {
                  mangar ? <p> <img src='/images/signlogo.png' /> {member.map((Ldata) => (
                    <option key={Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
                    } </p> </option>
                  ))
                  }  </p> : null
                }</StyledNode>}>

                  <TreeNode label={<StyledNode className='styleanimate'> {
                    mangar ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    mangar ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    mangar ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                </TreeNode>

              </TreeNode>


              <TreeNode label={<StyledNode className='styleanimate'>{
                show ? <p style={{ cursor: 'pointer' }} onClick={() => setHr(!hr)}> <img src='/images/signlogo.png' /> {mydatas.map((Mdata) => (
                  <option key={Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.designationtype
                  } </p> </option>
                ))
                } </p> : null
              }
              </StyledNode>}>
                <TreeNode label={<StyledNode className='styleanimate'> {
                  hr ? <p> <img src='/images/signlogo.png' /> {member.map((Ldata) => (
                    <option key={Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
                    } </p> </option>
                  ))
                  } </p> : null
                }</StyledNode>}>

                  <TreeNode label={<StyledNode className='styleanimate'> {
                    hr ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    hr ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    hr ? <p> <img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                </TreeNode>

              </TreeNode>

              <TreeNode label={<StyledNode className='styleanimate'>{
                show ? <p style={{ cursor: 'pointer' }} onClick={() => setCeo(!ceo)}> <img src='/images/signlogo.png' /> {mydatas.map((Mdata) => (
                  <option key={Mdata.designationtype} value={Mdata.designationtype}> <p>{Mdata.designationtype
                  } </p> </option>
                ))
                } </p> : null
              }
              </StyledNode>}>
                <TreeNode label={<StyledNode className='styleanimate'> {
                  ceo ? <p> <img src='/images/signlogo.png' /> {member.map((Ldata) => (
                    <option key={Ldata.TeamMemberid} value={Ldata.TeamMemberid}> <p>{Ldata.teammembername
                    } </p> </option>
                  ))
                  } </p> : null
                }</StyledNode>}>

                  <TreeNode label={<StyledNode className='styleanimate'> {
                    ceo ? <p> <img src='/images/signlogo.png' />{employee.map((Edata) => (
                      <option key={Edata.employeeid} value={Edata.employeeid}> <p>{Edata.Fullname
                      } </p> </option>
                    ))
                    } </p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    ceo ? <p> <img src='/images/signlogo.png' />{employee.map((Edata) => (
                      <option key={Edata.employeeid} value={Edata.employeeid}> <p>{Edata.designationname
                      } </p> </option>
                    ))
                    }</p> : null
                  }</StyledNode>} />
                  <TreeNode label={<StyledNode className='styleanimate'> {
                    ceo ? <p><img src='/images/signlogo.png' /> </p> : null
                  }</StyledNode>} />
                </TreeNode>

              </TreeNode>

            </Tree>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Orgchart;