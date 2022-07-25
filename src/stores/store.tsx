import React, { createContext, useContext, useMemo } from 'react';
import { Destination } from '../type';
import { startData } from './data';

function createInitialState() {
    return {
        destinationData: [],
        isOpenModal: false,
        test: '',
    }
}

export interface StoreStateObject {
    destinationData: Destination[],
    isOpenModal: boolean;
    test: string;
}

export const defaultState = {
    destinationData: startData,
    isOpenModal: false,
    test: 'ANTHONY'
}

const StoreContext = createContext<StoreStateObject>(createInitialState());

// const StoreStateProvider = ({childen, initial})

const useStoreContext = () => useContext(StoreContext);

export { useStoreContext, StoreContext}