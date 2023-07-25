import React from "react";
import logo from "./img/bgimages.jpeg";
import topLogo from "./img/logo1.png";
import carRight from "./img/car2.jpeg";

import "./App.css";
function App() {
  const headingStyle = {
    color: "Green",
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "10px",
  };

  function viewPass(){
    var change = document.getElementById("password");
    if(change.type == "password"){
      change.type="text";

    }
    else{
      change.type="password";
    }
  }
  return (
    <>
      <div className="mainDiv">
        <img
          calssName="topImg"
          src={logo}
          alt="I did not load Error"
          style={{height:"100%",width:"100%"}}
        />
        <div className="Navbar" >
          <button id="navBt">Home</button>
          <button id="navBt">Save</button>
          <div className="dropDown">
            <button id="navBt" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Services
            <span className="caret"> </span></button>
            <div className="dropDownContainer">
              <button id="navBt">Web Services</button>
              <button id="navBt">Mobile Services</button>
            </div>
          </div>
        </div>
        <div className="topLogo">
        <img src={topLogo} style={{height:"20%",width:"20%"}}/>
        </div>
        
        <div className="overlayer">
        
          <h1 style={headingStyle}>Hi I am HTML Heading in React</h1>
          <p>I am paragraph</p>
          <a href="https://www.w3schools.com/react/default.asp" target="_blank">
            click me
          </a>
          <br />
        </div>
      </div>
      {/* <div>
        {" "}
        <iframe
          src="http://localhost:3000/"
          width="30%"
          height="30%" // Corrected attribute name
          title="Youtube"
          style={{
            background: "lightgrey",
            align: "center",
            marginLeft: "20%",
          }}
        ></iframe>
        <br/><br />
      </div> */}

      <div calssName="Table">
        
        
          <h1>Table</h1>
        <table className="tableSty">
          <thead>
            <th>Sr</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Mark</th>
          </thead>
          <tbody style={{background:"gray" }}>
            <tr>
            <td>1</td>
            <td>Abdul Raheem</td>
            <td>Inter</td>
            <td> <input type="checkbox"  value="Done" /> </td>
            </tr>
            <tr>
            <td>2</td>
            <td>Ali</td>
            <td>MERN</td>
            <td> <input type="checkbox"  value="Done" /> </td>
            </tr>
            <tr>
            <td>3</td>
            <td>Hamza</td>
            <td>MEAN</td>
            <td> <input type="checkbox"  value="Done" /> </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>List</h1>
        <h2>Order List</h2>
        <ol>
          <li>#</li>
          <li>&reg;</li>
          <li> &copy;</li>
          <li>MongoDb</li>
        </ol>
        <h2>UnOrder List</h2>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDb</li>
        </ul>
        <h2>Description List</h2>
        <dl>
          <dt style={{fontWeight: "bold"}}>React</dt>
          <dd>React is Frontend</dd>
          <dt style={{fontWeight: "bold"}}>Node</dt>
          <dd>Node is Backend</dd>
        </dl>
      </div>
      <div>
        <input type="text"/>
        <br/>
        <input type="date"/>
        <br/>
        <input type="number"/>
        <br/>
        <input type="password" id="password"/>
        <input type="checkbox" onClick={()=>viewPass()}/> Show password<br/>
        
      </div>
    </>
  );
}

export default App;
