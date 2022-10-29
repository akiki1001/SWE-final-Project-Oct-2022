import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {getApi} from "../../api/clientApi";

const Form = ({onSearchCars}) => {
    // const [open, setOpen] = useState(false);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    useEffect( () => {
        loadBrandsAndModel();
    },[])

    const loadBrandsAndModel = () => {
        getApi("/brands").then( response => {
            setBrands(response.data)
        }).catch( error => {
            console.log(error);
        });
    }

    const searchCars = () => {
        onSearchCars(selectedModel, selectedBrand);
    }

    return (
        <FormContainer>
            {/*<div className="search">*/}
            {/*    <form action="" className="search-form">*/}
            {/*        <div className="form-fields">*/}
            {/*            <div className="brand-models">*/}
            {/*                <div className="group">*/}
            {/*                    <label htmlFor="brands" className="visually-hidden">Brand</label>*/}
            {/*                    <select name="brand" id="brands" onChange={(e) => {*/}
            {/*                        setSelectedBrand(e.target.value);*/}
            {/*                    }}>*/}
            {/*                        <option value="">Select Brand</option>*/}
            {/*                        /!*{ brands.map( brand => <option key={brand.id} value={brand.name}>{brand.name}</option> ) }*!/*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*                <div className="group">*/}
            {/*                    <label htmlFor="models" className="visually-hidden">Model</label>*/}

            {/*                    <select name='model' onChange={(e) => {*/}
            {/*                        setSelectedModel(e.target.value);*/}
            {/*                    }}>*/}
            {/*                        <option value="">Select Model</option>*/}
            {/*                        <option value="SUV">SUV</option>*/}
            {/*                        <option value="TRUCK">TRUCK</option>*/}
            {/*                        <option value="SEDAN">SEDAN</option>*/}
            {/*                    </select>*/}

            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        <div className="submit-button">*/}
            {/*            <button style={{borderRadius: '0.5rem', backgroundColor: 'darkblue'}} type="button" onClick={ () => searchCars() }>Search cars</button>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
            {/*<div style={{position:'absolute', top: '50%', left:'5%'}}>*/}
            {/*    <h2 className="text-uppercase text-center" style={{fontSize: '75px', color: 'white'}}>Reserve Now*/}
            {/*       <p><span style={{color: 'red', fontStyle: 'italic', fontSize: '65px'}}>Get 50% Off !</span></p> </h2>*/}
            {/*</div>*/}
        </FormContainer>
    );
};


const FormContainer = styled.div`
    
      
  
    .search{
      position: absolute;
      top: 8rem;
      left: 25%;
      width: 400px;
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius:0.5rem;
      gap: 1rem;
      
      .search-form{
        display: flex;
        gap: 0.7rem;
        justify-content: space-between;
        .form-fields{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          
          input,select{
            border: 0.5px solid #ddd;
            background-color: #fff;
            padding: 0.5rem;
            width: 100%;
            
            &:focus{
              outline: none;
            }
          }
          
          .brand-models{
            display: flex;
            gap: 0.5rem;
          }
        }
      }
      
      .submit-button{
        button{
          padding: .5rem;
          border: 0;
          outline: none;
          background-color: #032a62;;
          color: #fff;
          font-size: 1rem;
          font-weight: 400;
        }
        
      }
    }
`;

export default Form;
