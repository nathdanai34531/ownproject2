import React from 'react';
import Service from './Service.jsx';

const ServicesList = ({ timbuktuArray, currCat }) => {

    return timbuktuArray.map((singleService, idx) => {
        if (currCat === "All" || singleService.category.includes(currCat)) {
            return (
                <Service key={idx} singleService={singleService} />
            );
        }
        return false;
    });
}

export default ServicesList;