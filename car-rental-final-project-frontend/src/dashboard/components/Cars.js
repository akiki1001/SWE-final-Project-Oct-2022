import React, {Fragment, useEffect, useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {Breadcrumb, Button, Empty, Popconfirm, Spin, Table, Tag,Badge} from "antd";
import {getApi} from "../../api/clientApi";
import {
    LoadingOutlined, PlusCircleOutlined, UsergroupAddOutlined, ProfileTwoTone,
} from '@ant-design/icons';
import Avatar from "antd/es/avatar/avatar";
import {Link} from "react-router-dom";


const Cars = () => {



    const [cars,setCars] = useState();
    const [fetching,setFetching] = useState(true);
    const loader = <LoadingOutlined style={{fontSize:30}} spin/>;

    useEffect(  () => {
        loadCars();

    },[]);


    const loadCars = () =>{
        getApi("/cars")
            .then(response => {
                setCars(response.data.map ( (data, index) => {
                    data.key = index+1;
                    data.index = index+1;
                    return data;
                }));
            })
            .catch(error => console.log(error.message))
            .finally( () => setFetching(false));
    }


    const TheAvatar = ({name}) => {
        if (name.length === 0){
            return <Avatar/>
        }
        return <Avatar>{`${name.charAt(0)} ${name.charAt(name.length - 1)}`}</Avatar>
    }
    function deleteCar(id) {
        return undefined;
    }



    const columns = [
        {
            title: '',
            dataIndex: 'avatar',
            key: 'avatar',
            render:() => <Avatar/>
        },
        {
            title: '#',
            dataIndex: 'index',
            key: 'index'

        },
        {
            title: 'Reg Number',
            dataIndex: 'regNo',
            key: 'regNo',
        },
        {
            title: 'Brand',
            dataIndex: 'name',
            key: 'name',
            sorter:true
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Availability',
            dataIndex: 'isReserved',
            key: 'isReserved',
        }
    ];


    const renderCars = () => {
        if (fetching){
            return <Spin indicator={loader}/>
        }


    }

    return (



        <Fragment>
        <div className='container'>
            <br/><br/><br/>
            <h1>Fontana car Rental</h1>

            <h1> List Of Cars</h1><br/>

         <Link to={"/admin/dashboard/create"} className='btn btn-primary '> Add Car</Link><br/><br/>
            <table className='table table-bordered table-striped'>
                <thead  className='table-dark'>
                <tr>
                    <th>Student Id</th>
                    <th>Reg Number</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Availability</th>

                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cars?.map(
                        car=>
                            <tr>
                                <td>{car.carId}</td>
                                <td>{car.regNo}</td>
                                <td>{car.brand.name}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.isReserved}</td>


                                <td>
                                    <Link className='btn btn-info m-2' to={`/admin/dashboard/edit-car/${car.id}`}>Update</Link>
                                    <Link className='btn btn-danger' to={()=>{
                                        //deleteStudent(student.id)
                                    }}>Delete</Link>
                                </td>

                            </tr>

                //{carId, regNo, rentalFee, year, name, model, imageCover, status, brand, isReserved, key, index}
                    )
                }
                </tbody>
            </table>

        </div>
        </Fragment>

    );
};

export default Cars;