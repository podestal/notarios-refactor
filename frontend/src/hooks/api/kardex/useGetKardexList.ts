import { useQuery, UseQueryResult } from "@tanstack/react-query"
import getKardexService, { Kardex } from "../../../services/api/kardexService"

interface Props {
    page: string
}

const useGetKardexList = ({ page }: Props): UseQueryResult<Kardex[], Error> => {
    const kardexService = getKardexService({ })
    const params = { page }
    return useQuery({
        queryKey: ["kardex list"],
        queryFn: () => kardexService.get('', params),
        refetchOnWindowFocus: false,
        retry: false,
    })
}

export default useGetKardexList