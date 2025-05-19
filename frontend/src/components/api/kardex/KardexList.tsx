import useGetKardexList from "../../../hooks/api/kardex/useGetKardexList"

const KardexList = () => {

    const { data: kardexPage, isLoading, isError, error, isSuccess } = useGetKardexList({ page: '1' })

    if (isLoading) return <p>Un momento</p>
  
    if (isError) return <p>Error: {error.message}</p>
  
    if (isSuccess)

  return (
    <div>
        {kardexPage.results.map( singleKardex => (
            <div key={singleKardex.idkardex}>
                <h2>{singleKardex.kardex}</h2>
                <p>{singleKardex.fechaingreso}</p>
                <p>{singleKardex.contrato}</p>
            </div>
        ))}
    </div>
  )
}

export default KardexList