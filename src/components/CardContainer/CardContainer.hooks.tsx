import { useStoreContext } from "../../stores/store"

export function useCardContainer() {
    const { destinationData, updateIsOpenModal } = useStoreContext();
    
    return { destinationData, updateIsOpenModal }
}