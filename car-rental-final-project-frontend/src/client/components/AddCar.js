import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {getApi, postApi, putApi} from "../../api/clientApi";
import cars from "../../dashboard/components/Cars";

//{carId, regNo, rentalFee, year, name, model, imageCover, status, brand, isReserved, key, index}
function AddCar() {
    const [regNo, setRegNo] = useState(0)
    const [rentalFee, setRentalFee] = useState(0.0)
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [imageCover, setImageCover] = useState('')
    const [status, setStatus] = useState('')
    //const [brandName, setbrandName] = useState('')
    const {id}=useParams()
    const nav=useNavigate()

    const saveCar= (e)=>{
        e.preventDefault();
        const car = {regNo,rentalFee,name,model,imageCover,status}
        postApi("/cars",car).then(res=>{
            console.log(res.data)
            nav("/cars")
        }).catch(error=>{
            console.log(error)
        })
    
       }

       const updateCar= (e)=>{
        e.preventDefault();
        const student = {regNo,rentalFee,name,model,imageCover,status}
        putApi("/cars",id,student).then(res=>{
            console.log(res.data)
            nav("/cars")
        }).catch(error=>{
            console.log(error)
        })

       }


       useEffect(() => {
        // getApi(id).then(res=>{
        //     const car = res.data;
        //     console.log(car);
        //     setRegNo(car.regNo)
        //     setRentalFee(cars.rentalFee)
        //     setName(car.name)
        //     setModel(car.model)
        //     setImageCover(car.imageCover)
        //     setStatus(car.status)
        // }).catch(error=>{
        //     console.log(error)
        // })
        
      }, [])




      const buttonChoose=()=>{

        if(id){
               return <button className="btn btn-success m-3" onClick={(e)=>updateCar(e)}>Update</button>
        }else {
            return <button className="btn btn-success m-3" onClick={(e)=>saveCar(e)}>Save</button>
        }
        
                        
      }

       const title=()=>{
       
        if(id){
            return <h2 className="text-center"> Update Car</h2>
        } else{
           return <h2 className="text-center">Add Car</h2>
        }
       }

  return (
    <div>
        <br/><br/><br/><br/>        
         <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Registration Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Student Number"
                                    name ="studentNumber"
                                    className="form-control"
                                    value={regNo}
                                    onChange ={(e)=>setRegNo(e.target.value)}
                                ></input>
                                                    
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Rental Fee</label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    name ="firstName"
                                    className="form-control"
                                    value={rentalFee}
                                    onChange ={(e)=>setRentalFee(e.target.value)}
                                ></input>
                                                    
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Middle Name"
                                    name ="middleName"
                                    className="form-control"
                                    value={name}
                                    onChange ={(e)=>setName(e.target.value)}
                                ></input>
                                                    
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Model</label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    name ="lastName"
                                    className="form-control"
                                    value={model}
                                    onChange ={(e)=>setModel(e.target.value)}
                                ></input>
                                                  
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">Status</label>
                            <input
                                type="text"
                                placeholder="Enter isInternational"
                                name ="isInternational"
                                className="form-control"
                                value={status}
                                onChange ={(e)=>setStatus(e.target.value)}
                            ></input>
                        </div>

                        {
                    buttonChoose()
                       }
                       <button className="btn btn-danger" onClick={()=>nav( "/admin")}>Cancel</button>
                        
                    </form>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddCar