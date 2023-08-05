import React, {useState} from 'react';
import Company from './companycard';
import Popup from 'reactjs-popup';


const data = [
  { companyName: "JPMC", role:"SDE", branch: "CSBS", deadline:"29 july 2023",stipend:"70k",link:"xyz.com",requirements:"7 above cgpa",others:"NILL"},
  { companyName: "TCS", role:"AI-ML", branch: "CSBS", deadline:"29 july 2023",stipend:"40k",link:"xyz.com",requirements:"7 above cgpa",others:"NILL"},
  { companyName: "Amazon", role:"SDE", branch: "CSBS", deadline:"29 july 2023",stipend:"50k",link:"xyz.com",requirements:"7 above cgpa",others:"NILL"},
]



function App(){

        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        }

  return(
    <div className="admin">
      <Popup trigger={
                <button>ADD</button>}
                modal nested>
                    {
                        close =>(
                            <div className='modal'>
                                <div className="addForm">

                                    <form onSubmit={handleSubmit}>
                                        <h4>ADD COMPANY</h4>
                                            <label>Enter Company name:
                                            <input 
                                                type="text" 
                                                name="companyname" 
                                                value={inputs.companyname || ""} 
                                                onChange={handleChange}
                                            />
                                            </label>
                                            <br></br>
                                            <label>Enter the role:
                                                <input 
                                                type="text" 
                                                name="role" 
                                                value={inputs.role || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br></br>
                                            <label>Enter the Branches eligible:
                                                <input 
                                                type="text" 
                                                name="branches" 
                                                value={inputs.branches || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br></br>
                                            <label>Enter the deadline:
                                                <input 
                                                type="text" 
                                                name="deadline" 
                                                value={inputs.deadline || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br></br>
                                            <label>Enter the stipend:
                                                <input 
                                                type="text" 
                                                name="stipend" 
                                                value={inputs.stipend || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br></br>
                                            <label>Enter the link to apply:
                                                <input 
                                                type="text" 
                                                name="link" 
                                                value={inputs.link || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br></br>
                                            <label>Enter if any other requirements:
                                                <input 
                                                type="text" 
                                                name="req" 
                                                value={inputs.req || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br></br>
                                            <label>Enter any other details:
                                                <input 
                                                type="text" 
                                                name="details" 
                                                value={inputs.details || ""} 
                                                onChange={handleChange}
                                                />
                                                </label>
                                                <br />
                                                <input type="submit" />
                                                <br /> <br />
                                    </form>
                                    
                                </div>
                                <div className='closebutton'>
                                    <button onClick={
                                        () => close()
                                    }>
                                        close
                                    </button>  
                                </div>
                            </div>
                        )
                    }
                </Popup>
                
            <table>
                <tr>
                    <th>Company Name</th>
                    <th>Role</th>
                    <th>Branches</th>
                    <th>Deadline</th>
                    <th>Stipend</th>
                    <th>Link to apply</th>
                    <th>Any requirements</th>
                    <th>Other details</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.companyName}</td>
                            <td>{val.role}</td>
                            <td>{val.branch}</td>
                            <td>{val.deadline}</td>
                            <td>{val.stipend}</td>
                            <td>{val.link}</td>
                            <td>{val.requirements}</td>
                            <td>{val.others}</td>
                            <td><button>edit</button></td>
                            <td><button>delete</button></td>
                            
                        </tr>
                        
                    )
                })}
            </table>
        

    </div>


    // <div className="app">
    //   <Company name="AMAZON"/>
    //   <Company name="JPMC"/>
    //   <Company name="TCS"/>
    // </div>
  );
}

export default App;