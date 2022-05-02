import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

let navigate = useNavigate()
const [user,setuser] = useState("");
const [pass,setpass] = useState("");

const filterdata = (data,use,pas) => {
  
  var x = data.filter((data) => data.username == use && data.pass == pas)

  

 let newdata =x.filter((x)=>x.role=="admin")
 console.log(newdata)
  if(x[0].role==="admin"){
    navigate("/orders" , {replace:true})
    // console.log(x)
  }
  // else{
  //   navigate("/neworder" ,{replace:true})
  // }
}


   const check = async(user,pass) => {
     try {
       let res = await fetch(`http://localhost:8080/users`)
       let data = await res.json();
    

      filterdata(data,user,pass)
      
     } catch (error) {
       console.log(error)
     }
   }

  return (
    <div>
      <input
       onChange={(e) => setuser(e.target.value) }
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
      onChange={(e) =>  setpass(e.target.value)}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={() => check(user,pass)} className="submit">Login</button>
    </div>
  );
};