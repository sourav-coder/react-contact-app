import React from "react";
import { toast } from "react-toastify";
import {useSelector,useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";

function AddContact() {


    const contactState = useSelector((state) => state) // fetches the data from store
    const dispatch = useDispatch() // send action type and data
    const history = useHistory() // redirect the url 

    console.log(contactState);
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [phno,setPhno]=React.useState();
    const onChange=(e)=>{
        var targetName=e.target.name;
        var value=e.target.value;

        targetName==="name"?setName(value):targetName==="email"?setEmail(value):setPhno(value)

    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        

        if (!email || !phno || !name)toast.warning("Please fillup !!")

        const checkEmail = contactState.find((contact)=>contact.email===email)

        const checkPhno = contactState.find((contact)=>contact.phno===parseInt(phno))
        if (checkEmail){return toast.error("This email already exists !!!")}

        if (checkPhno){return toast.error("This Number already exists !!!")}
        
        if (!checkEmail && !checkEmail && email && phno && name){
        const data={
            id:contactState[contactState.length-1].id+1,
            name,email,phno
        }
        console.log(data);

        dispatch({type:"ADD_CONTACT",payload:data})
        toast.success("Successfully Added !!")
        history.push("/");
        
    }


    }
    
  return (
    <div className="addContact container">
      <div className="row">
        <div className="col-md-6 mx-auto shadow p-4 text-center mt-4">
          <form>
            <h2 className="display-2 mb-4 mt-4">Add Contact</h2>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={onChange}
              />
              <input
                className="form-control mb-3"
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={onChange}
              />
              <input
                className="form-control mb-3"
                type="number"
                name="phno"
                placeholder="Enter Phone Number"
                value={phno}
                onChange={onChange}
              />
              <button className="btn btn-dark btn-md" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
