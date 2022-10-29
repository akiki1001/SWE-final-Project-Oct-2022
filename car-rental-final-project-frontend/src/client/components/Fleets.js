import React, { useRef } from 'react';
import styled from "styled-components";
import Fleet from "./Fleet";

const Fleets = ({cars}) => {


    return (
        <FleetSection id='fleetSection'>
            <div className="content container">
                <h2 className="text-center" style={{marginTop: '15%', fontSize: '300%'}}><span style={{fontWeight: 'bold', fontStyle: 'italic', color: 'red'}}>Fontan Car Rental</span><span style={{fontWeight: 'bold', fontStyle: 'italic'}}></span></h2>
                <p className="text-center" style={{fontSize: '150%', marginTop: '3%'}}> From Sports Cars to Family Vans and comfortable and affordable Services. Reserve and Enjoy The Service!</p>
                <div className="fleets">
                    {
                        cars && cars.length > 0 && cars.map((car,index) =>
                            <Fleet key={car.carId} carId={car.carId} reserveStatus={car.isReserved} img={car.imageCover} brand={car.name} model={car.model} description={car.description} />
                        )
                    }
                </div>
            </div>
        </FleetSection>
    );
};

const FleetSection = styled.div`
    padding: 6rem 0;
    .fleets{
      margin-top: 15%;
      display: flex;
      gap: 1rem;
      padding: 10rem 0 5rem;
      flex-wrap: wrap
    }
`;

export default Fleets;
