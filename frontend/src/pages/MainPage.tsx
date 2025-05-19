import useGetKardexList from '../hooks/api/kardex/useGetKardexList'
import Header from '../router/Header'

const MainPage = () => {

  const { data: kardexList, isLoading, isError, error, isSuccess } = useGetKardexList({ page: '1' })

  if (isLoading) return <p>Un momento</p>

  if (isError) return <p>Error: {error.message}</p>

  if (isSuccess)

  return (
    <>
    <>{console.log('kardex list', kardexList)}</>
    <Header />
    </>
  )
}

export default MainPage