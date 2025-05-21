import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getKardexService, { KardexPage } from "../../../services/api/kardexService"

interface Props {
    page: string
}

const useGetKardexList = ({ page }: Props): UseQueryResult<KardexPage, Error> => {
    const kardexService = getKardexService({ })
    const params = { page }
    console.log('queryying', params);
    
    return useQuery({
        queryKey: ['kardex list', page],
        queryFn: () => kardexService.get('', params),
        refetchOnWindowFocus: false,
        retry: false,
    })
}

export default useGetKardexList