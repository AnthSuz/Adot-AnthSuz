import { Switch, Typography } from '@mui/material';
import React from 'react';
import './destination-card.scss'
import { Destination } from '../../type';
import { useDestinationCard } from './DestinationCard.hooks';

interface Props {
    destination: Destination
}

export const DestinationCard = ({destination}: Props) => {
    const { informationDestination, getTitleInformation, getInformationByTitle } = useDestinationCard();

    return (
        <div className="destination-card">
            <img src={destination.imgUrl} alt="destination city view" />
            <div  className="name-address-switch">
                <div>
                    <Typography variant="h6">{destination.nameDestination}</Typography>
                    <Typography variant="caption">{destination.address}</Typography>
                </div>
                <Switch color='success' />
            </div>
            <div className="information-destination">  
                {informationDestination?.map((information, i) => {
                    return (
                    <div key={i}>
                        <Typography variant="body2" className="title">{getInformationByTitle(information, destination[information as keyof Destination])}</Typography>
                        <Typography variant="caption">{getTitleInformation(information)}</Typography>
                    </div>
                )})}
            </div>
        </div>

    )
}