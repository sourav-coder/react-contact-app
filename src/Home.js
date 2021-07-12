import React from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { toast } from 'react-toastify';

function Home() {

    const state = useSelector((state) => state)

    const dispatch = useDispatch();
    const del = (e)=>{
        console.log(e.target.id);
        dispatch({type:"DELETE_CONTACT",payload:parseInt(e.target.id)})
        toast.success("Deleted !!!");
    }

    return (
        <div className="home container">
            <div className="row">
                <div className="col-md-12 my-5 ">
                    <h2>Welome to Contact Book</h2>
                    <Link to="/add" className="btn btn-outline-dark">ADD CONTACT</Link>
                </div>
                <div className="col-md-12 my-4" >
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>
                            {state.map((value,id)=>{
                                return(
                                    <tr key={id}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phno}</td>
                                        <td>
                                            <Link to={`/edit/${id}` } className="btn btn-outline-dark">EDIT</Link>
                                            <button className="btn btn-outline-danger mx-3" id={id} onClick={del}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
               

            </div>

        </div>
    )
}

export default Home
