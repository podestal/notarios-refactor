import { useState } from "react"
import useGetKardexList from "../../../hooks/api/kardex/useGetKardexList"
import KardexTable from "./KardexTable"

const KardexList = () => {

    const [page, setPage] = useState(1)

    const { data: kardexPage, isLoading, isError, error, isSuccess } = useGetKardexList({ page: page.toString() })

    if (isLoading) return <p>Un momento</p>
  
    if (isError) return <p>Error: {error.message}</p>
  
    if (isSuccess)

  return (
    <div>
        <KardexTable 
            kardexList={kardexPage.results}
            page={page}
            setPage={setPage}
        />
    </div>
  )
}

export default KardexList