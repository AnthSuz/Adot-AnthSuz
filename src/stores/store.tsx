import React, { createContext, useContext, ReactNode, useReducer,FC, useEffect } from 'react';
import { Destination } from '../type';
import { startData } from './data';
import * as StoreConstants from './constants'

function createInitialState() {
    return {
        destinationData: [],
        isOpenModal: false,
    }
}
export interface StoreStateObject {
    destinationData: Destination[],
    isOpenModal: boolean;
}

const data = localStorage.getItem('destinationData')

export const defaultState = {
    destinationData: data ? JSON.parse(data) : startData,
    isOpenModal: false,
}

const reducer = (state: StoreStateObject, action: any) => {
    switch (action.type) {
        case StoreConstants.UPDATE_IS_OPEN_MODAL: {
            return {
            ...state,
            isOpenModal: action.isOpenModal
            }
        };
        case StoreConstants.ADD_DESTINATION: {
            return {
                ...state,
                destinationData: [
                    ...state.destinationData,
                    action.destination
                ]
            }
        };
        case StoreConstants.SET_DESTINATION: {
            return {
                ...state,
                destinationData: action.destinationData
            }
        }
        default: 
            return state;
    }
}
const StoreContext = createContext<any>(createInitialState());

const Provider: FC<{children: ReactNode}> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)

    const value = {
        destinationData: state.destinationData,
        isOpenModal: state.isOpenModal,
        updateIsOpenModal: (isOpenModal: boolean) => {
            dispatch({type: StoreConstants.UPDATE_IS_OPEN_MODAL, isOpenModal});
        },
        addDestination: (destination: Destination) => {
            dispatch({type: StoreConstants.ADD_DESTINATION, destination});
        },
        setDestination: (destinationData: Destination[]) => {
            dispatch({type: StoreConstants.SET_DESTINATION, destinationData})
        }
        
    }

    useEffect(() => {
        localStorage.setItem('destinationData', JSON.stringify(state.destinationData))
    }, [state.destinationData])

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
};

const useStoreContext = () => useContext(StoreContext);

export { useStoreContext, StoreContext, Provider}