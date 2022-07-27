import { useStoreContext } from "../../stores/store";
import { Destination } from "../../type";
import * as Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useMemo, useRef } from "react";



export function UseModalAddNewDestination() {
    const { isOpenModal, destinationData, updateIsOpenModal, addDestination } = useStoreContext();

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        borderRadius: 2,
    };

    const schema = Joi.object<Destination>({
        id: Joi.number().required(),
        nameDestination: Joi.string().required(),
        address: Joi.string().required(),
        numberResidents: Joi.number().required(),
        numberHotels: Joi.number().required(),
        averageSalary: Joi.number().required(),
        surface: Joi.number().required(),
        isActived: Joi.boolean(),
        imgUrl: Joi.string().required(),
    })

    const { 
        formState: { isValid },
        control,
        setValue,
        getValues,
        watch,
        handleSubmit,
        reset,
    } = useForm<Destination>({
        resolver: joiResolver(schema)
    })

    const defaultValueForm = useMemo(() => {
        return ({
            id: destinationData.length + 1,
            nameDestination: '',
            address: '',
            isActived: false,
            imgUrl: ''
        })
    }, [destinationData.length])

    useEffect(() => {
        reset(defaultValueForm)
    }, [defaultValueForm, reset])

    const myRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if (isOpenModal) {
            setTimeout(() => {
                (myRef.current as HTMLInputElement).focus()
            }, 300)
        }
    }, [isOpenModal])

    const handleUpdate = useCallback((key: keyof Destination, value: string | number | boolean) => {
        setValue(key, value, {
            shouldDirty: true,
            shouldValidate: true
        })
    }, [setValue])

    const handleCancel = useCallback(() => {
        updateIsOpenModal(false);
        reset(defaultValueForm);
    }, [defaultValueForm, reset, updateIsOpenModal])
    
    const handleConfirm = useCallback(() => {
        updateIsOpenModal(false);
        handleSubmit(addDestination(watch()))
        reset(defaultValueForm);
    }, [addDestination, defaultValueForm, handleSubmit, reset, updateIsOpenModal, watch])

      
    return { style, isOpenModal, control, handleUpdate, getValues, isValid, handleCancel, updateIsOpenModal, myRef, handleConfirm }
}