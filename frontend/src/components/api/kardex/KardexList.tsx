import { useState } from "react"
import useGetKardexList from "../../../hooks/api/kardex/useGetKardexList"
import KardexTable from "./KardexTable"
import useBodyRenderStore from "../../../hooks/store/bodyRenderStore"

const KardexList = () => {

    const [page, setPage] = useState(1)
    const bodyRender = useBodyRenderStore(s => s.bodyRender)

    const { data: kardexPage, isLoading, isError, error, isSuccess } = useGetKardexList({ page: page.toString() })

    if (isLoading) return <p>Un momento</p>
  
    if (isError) return <p>Error: {error.message}</p>
  
    if (isSuccess)

  return (
    <div>
      <>{console.log('bodyRender from kardex list', bodyRender)}</>
        <KardexTable 
            kardexList={kardexPage.results}
            page={page}
            setPage={setPage}
        />
    </div>
  )
}

export default KardexList