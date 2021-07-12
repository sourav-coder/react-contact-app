import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AddContact() {
  const { id } = useParams();
  const state = useSelector((state) => state);

  const data = state.find((contact)=>contact.id===parseInt(id))
  console.log(data);

  const dispatch = useDispatch();
  const history = useHistory();

  const [name,setName]=React.useState(data.name);
  const [email,setEmail]=React.useState(data.email);
  const [phno,setPhno]=React.useState(data.phno);

  const onChange=(e)=>{
      var targetName=e.target.name;
      var value=e.target.value;

      targetName==="name"?setName(value):targetName==="email"?setEmail(value):setPhno(value)

  }
  const handleSubmit = (e)=>{
      e.preventDefault();

      dispatch({type:"DELETE_CONTACT",payload:parseInt(id)});

    
  
    dispatch({type:"ADD_CONTACT",payload:{
        id,name,email,phno
    }});

    toast.success("Successfully Updated !!!")
    history.push("/");


  }



  return (
    <div className="addContact container">
      <div className="row">
        <div className="col-md-6 mx-auto shadow p-4 text-center mt-4">
          <form>
            <h4 className="display-4 mb-4 mt-4">Edit Contact {id}</h4>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                name="name" value={name}
                placeholder="Enter name"
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
              <button className="btn btn-dark btn-md mx-3" onClick={handleSubmit}>Update</button>
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
