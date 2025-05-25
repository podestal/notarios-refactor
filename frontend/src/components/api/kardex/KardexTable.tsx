import { useState } from "react"
import KardexTableBody from "./KardexTableBody"
import KardexTableFooter from "./KardexTableFooter"
import KardexTableHeader from "./KardexTableHeader"
import useBodyRenderStore from "../../../hooks/store/bodyRenderStore"
import useGetKardexList from "../../../hooks/api/kardex/useGetKardexList"
import useCorrelativeStore from "../../../hooks/store/useCorrelativeStore"
import useKardexFiltersStore from "../../../hooks/store/useKardexFiltersStore"

const KardexTable = () => {

  const [page, setPage] = useState(1)
  const bodyRender = useBodyRenderStore(s => s.bodyRender)
  const correlative = useCorrelativeStore(s => s.correlative)
  const kardexFilter = useKardexFiltersStore(s => s.kardexFilter)

  const { data: kardexPage, isLoading, isError, error, isSuccess } = useGetKardexList({ page: page.toString(), idtipkar:bodyRender, correlative, kardexFilter })

  if (isLoading) return <p className="text-sm animate-pulse text-center my-10">Un momento</p>

  if (isError) return <p>Error: {error.message}</p>

  if (isSuccess)

  return (
    <div>
        <div className="px-2">
          <KardexTableHeader />
          <KardexTableBody 
              kardexList={correlative ? kardexPage : kardexPage.results }
          />
          <KardexTableFooter 
              page={page}
              setPage={setPage}
              kardexCount={kardexPage.count}
          />
        </div>
    </div>
  )
}

export default KardexTable