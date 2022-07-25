import { useStoreContext } from "../../stores/store"

export function useCardContainer() {
    const { test, isOpenModal, destinationData } = useStoreContext();
    return { test, isOpenModal, destinationData }
}