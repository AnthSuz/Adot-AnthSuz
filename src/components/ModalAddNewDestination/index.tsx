import { Modal, Box, Typography, TextField, Switch, Button } from "@mui/material"
import { UseModalAddNewDestination } from "./ModalAddNewDestination.hooks"
import './modal-add-new-destination.scss'
import { Controller } from "react-hook-form";

export const ModalAddNewDestination = () => {
    const { style, isOpenModal, control, handleUpdate, getValues, isValid, handleCancel, handleConfirm, myRef } = UseModalAddNewDestination();
    return   (
        <Modal
            open={isOpenModal}
            onClose={() => handleCancel()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal-add-new-destination"
        >
            <Box sx={style}>
                <Typography variant="h6" className="title">Ajouter une nouvelle destination</Typography>
                <Controller 
                    control={control}
                    name="nameDestination"
                    render={() => (
                        <TextField 
                            className="input" 
                            variant="outlined" 
                            label="Nom de la destination" 
                            autoFocus={true}
                            fullWidth 
                            inputRef={myRef}
                            onChange={(e) => handleUpdate('nameDestination', e.target.value)}
                            value={getValues('nameDestination')}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="address"
                    render={() => (
                        <TextField 
                            className="input" 
                            variant="outlined" 
                            label="Adresse" 
                            fullWidth 
                            onChange={(e) => handleUpdate('address', e.target.value)}
                            value={getValues('address')}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="imgUrl"
                    render={() => (
                        <TextField 
                            className="input" 
                            variant="outlined" 
                            label="Lien de l'image" 
                            fullWidth
                            onChange={(e) => handleUpdate('imgUrl', e.target.value)}
                            value={getValues('imgUrl')} 
                        />
                    )}
                />
                
                <div className="information-input">
                <Controller 
                    control={control}
                    name="numberResidents"
                    render={() => (
                        <TextField 
                            className="input" 
                            variant="outlined" 
                            type="number" 
                            InputProps={{ inputProps: { min: 0, max: 10 } }} 
                            fullWidth 
                            label="Nb Habitants" 
                            onChange={(e) => handleUpdate('numberResidents', e.target.value)}
                            value={getValues('numberResidents')}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="numberHotels"
                    render={() => (
                        <TextField 
                            className="input with-margin-left input with-margin-right" 
                            InputProps={{ inputProps: { min: 0, max: 10 } }} 
                            fullWidth 
                            type="number" 
                            variant="outlined" 
                            label="Nb. Hôtels"
                            onChange={(e) => handleUpdate('numberHotels', e.target.value)}
                            value={getValues('numberHotels')}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="averageSalary"
                    render={() => (
                        <TextField 
                            className="input with-margin-right" 
                            InputProps={{ inputProps: { min: 0, max: 10 } }} 
                            fullWidth 
                            type="number" 
                            variant="outlined" 
                            label="Revenu Moy"
                            onChange={(e) => handleUpdate('averageSalary', e.target.value)}
                            value={getValues('averageSalary')}
                        />
                    )}
                />
                <Controller 
                    control={control}
                    name="surface"
                    render={() => (
                        <TextField 
                            className="input" 
                            type="number" 
                            InputProps={{ inputProps: { min: 0, max: 10 } }} 
                            fullWidth
                            variant="outlined" 
                            label="Superficie" 
                            onChange={(e) => handleUpdate('surface', e.target.value)}
                            value={getValues('surface')}
                        />
                    )}
                />
                    
                </div>
                <div className="switch">
                    <Controller 
                        control={control}
                        name="isActived"
                        render={() => (
                            <Switch 
                                value={getValues('isActived')} 
                                onChange={(e) => handleUpdate('isActived', e.target.checked)}
                            />
                        )}
                    
                    />
                    <Typography variant='body1'>Activer</Typography>
                </div>
                <div className="buttons">
                    <Button variant="text" sx={{color: '#9E9E9E'}} onClick={handleCancel}>Cancel</Button>
                    <Button variant="text" sx={{color: '#3fd48b'}} onClick={handleConfirm} disabled={!isValid}>Confirm</Button>
                </div>
            </Box>
        </Modal> 
    )
}