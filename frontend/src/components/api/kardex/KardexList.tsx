import useGetKardexList from "../../../hooks/api/kardex/useGetKardexList"
import KardexTable from "./KardexTable"

const KardexList = () => {

    const { data: kardexPage, isLoading, isError, error, isSuccess } = useGetKardexList({ page: '1' })

    if (isLoading) return <p>Un momento</p>
  
    if (isError) return <p>Error: {error.message}</p>
  
    if (isSuccess)

  return (
    <div>
        <KardexTable 
            kardexList={kardexPage.results}
        />
    </div>
  )
}

export default KardexList