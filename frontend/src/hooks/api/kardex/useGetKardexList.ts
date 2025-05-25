import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getKardexService, { KardexPage } from "../../../services/api/kardexService"
import { FilterInterface } from "../../store/useKardexFiltersStore"

interface Props {
    page: string
    idtipkar: number
    correlative?: string
    kardexFilter?: FilterInterface
}

const useGetKardexList = ({ page, idtipkar, kardexFilter }: Props): UseQueryResult<KardexPage, Error> => {
    let kardexService = getKardexService({ })
    console.log('kardexFilter in hook', kardexFilter);
    if (kardexFilter && kardexFilter.type) {
        if (kardexFilter.type === 'K') {
            kardexService = getKardexService({ byCorrelative: true })
        }
        else if (kardexFilter.type === 'N') {
            kardexService = getKardexService({ byName: true })
        }
        else if (kardexFilter.type === 'D') {
            kardexService = getKardexService({ byDocument: true })
        }
    }

    let params = {}

    if (kardexFilter && kardexFilter.type) {
        if (kardexFilter.type === 'K' && (kardexFilter.value ?? '').length > 3) {
            params = { correlative: kardexFilter.value, idtipkar: idtipkar.toString() }
        }
        else if (kardexFilter.type === 'N') {
            params = { name: kardexFilter.value, idtipkar: idtipkar.toString() }
        }
        else if (kardexFilter.type === 'D') {
            params = { document: kardexFilter.value, idtipkar: idtipkar.toString() }
        }
    } else if (page && idtipkar) {
        params = { page, idtipkar: idtipkar.toString() }
    }

    console.log('params', params)
    

    let queryKey = ['kardex list', page, idtipkar]
    if (kardexFilter && kardexFilter.type) {
        queryKey = ['kardex list', kardexFilter.type, kardexFilter.value, idtipkar]
    } 

    console.log('queryKey', queryKey);
    

    return useQuery({
        queryKey,
        queryFn: () => kardexService.get('', params),
        refetchOnWindowFocus: false,
    })
}

export default useGetKardexList