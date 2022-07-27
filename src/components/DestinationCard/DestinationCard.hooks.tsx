import { useCallback, useMemo } from "react"

export function useDestinationCard() {

    const informationDestination = useMemo(() => {
        return ['numberResidents', 'numberHotels', 'averageSalary', 'surface']
    }, [])

    const getTitleInformation = useCallback((information: string) => {
        switch (information) {
            case 'numberResidents':
                return 'Habitants';
            case 'numberHotels': 
                return 'Hôtels';
            case 'averageSalary':
                return 'Revenu Moy';
            case 'surface':
                return 'km2'
        }
    }, [])

    const getInformationByTitle = useCallback((title: string, information: number | string | boolean) => {
        switch(title) {
            case 'numberResidents':
                if (information > 999999) {
                    return `${information as number / 1000000} M`;
                } else {
                    return information;
                };
            case 'averageSalary':
                return `${information.toLocaleString()} €`;
            default: 
            return information.toLocaleString();
        }
    }, [])

    return { informationDestination, getTitleInformation, getInformationByTitle }
}