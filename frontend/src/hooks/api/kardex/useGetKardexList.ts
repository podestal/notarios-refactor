import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getKardexService, { KardexPage } from "../../../services/api/kardexService"
import { FilterInterface } from "../../store/useKardexFiltersStore"

interface Props {
    page: string
    idtipkar: number
    correlative?: string
    kardexFilter?: FilterInterface
}

const useGetKardexList = ({ page, idtipkar, correlative, kardexFilter }: Props): UseQueryResult<KardexPage, Error> => {
    let kardexService = getKardexService({ })
    if (correlative) {
        kardexService = getKardexService({ by_correlative: true })
    }

    console.log('kardexFilter in hook', kardexFilter);
    

    let params = {}

    if ((correlative ?? '').length > 3) {
        params = { correlative }
    } else if (page && idtipkar) {
        params = { page, idtipkar: idtipkar.toString() }
    }

    let queryKey = ['kardex list', page, idtipkar]
    if (correlative) {
        queryKey = ['kardex list', correlative]
    }

    console.log('queryKey', queryKey);
    

    return useQuery({
        queryKey,
        queryFn: () => kardexService.get('', params),
        refetchOnWindowFocus: false,
        retry: false,
    })
}

export default useGetKardexList