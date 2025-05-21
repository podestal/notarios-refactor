import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getKardexService, { KardexPage } from "../../../services/api/kardexService"

interface Props {
    page: string
    idtipkar: number
}

const useGetKardexList = ({ page, idtipkar }: Props): UseQueryResult<KardexPage, Error> => {
    const kardexService = getKardexService({ })
    const params = { page, idtipkar: idtipkar.toString() }
    
    return useQuery({
        queryKey: ['kardex list', page, idtipkar],
        queryFn: () => kardexService.get('', params),
        refetchOnWindowFocus: false,
        retry: false,
    })
}

export default useGetKardexList