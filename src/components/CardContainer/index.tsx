import React from 'react'
import { useCardContainer } from './CardContainer.hooks'
import './card-container.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { Typography, Button, Modal, Box } from '@mui/material';
import { DestinationCard } from '../DestinationCard';
import { ModalAddNewDestination } from '../ModalAddNewDestination';
import { Destination } from '../../type';


export const CardContainer = () => {
    const { destinationData, updateIsOpenModal } = useCardContainer();
      
    return (
        <>   
            <div className="card-container">
                <span className="book-mark-icon">
                    <BookmarkIcon color="error" fontSize='small' />
                </span>

                <div className="card-content">
                    <div className="top-card-content">
                        <Typography variant='h5' className="title-card-content">Destinations</Typography>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={() => updateIsOpenModal(true)} size="small" sx={{
                            backgroundColor: '#3fd48b', 
                            '&:hover': {
                                backgroundColor: '#3fd48b'
                            }
                            }}>
                            Ajouter
                        </Button>
                    </div>
                    <div className="content">
                        {destinationData.map((destination: Destination, index: number) => {
                            return <DestinationCard key={index} destination={destination} />
                        })}
                            
                    </div>

                </div>
            </div>
            <ModalAddNewDestination />
        </>
     
    )
}