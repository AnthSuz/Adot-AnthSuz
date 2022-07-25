import React from 'react'
import { useCardContainer } from './CardContainer.hooks'
import './card-container.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { Typography, Button, Modal, Box } from '@mui/material';
import { DestinationCard } from '../DestinationCard';


export const CardContainer = () => {
    const { destinationData } = useCardContainer();
    
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };
      
    return (<>   <div className="card-container">
            <span className="book-mark-icon">
                <BookmarkIcon color="error" fontSize='small' />
            </span>

            <div className="card-content">
                <div className="top-card-content">
                    <Typography variant='h5' className="title-card-content">Destinations</Typography>
                    <Button variant="contained" startIcon={<AddIcon />} size="small" sx={{
                        backgroundColor: '#3fd48b', 
                        '&:hover': {
                            backgroundColor: '#3fd48b'
                        }
                        }}>
                        Ajouter
                    </Button>
                </div>
                <div className="content">
                    {destinationData.map((destination, index) => {
                        return <DestinationCard destination={destination} />
                    })}
                        
                </div>

            </div>
        </div>
            <Modal
            open={true}
            onClose={() => alert('click')}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                TEST
            </Box>
          </Modal></>
     
    )
}