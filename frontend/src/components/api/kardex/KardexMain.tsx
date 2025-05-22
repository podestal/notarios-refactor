import useBodyRenderStore from "../../../hooks/store/bodyRenderStore"
import KardexErrors from "./kardexErrors/KardexErrors"
import KardexHeader from "./KardexHeader"
import KardexList from "./KardexList"


const KardexMain = () => {

  const bodyRender = useBodyRenderStore(s => s.bodyRender)

  return (
    <div className="mt-[80px] w-[65%] mx-auto bg-slate-100 rounded-lg shadow-lg mb-10">
        {bodyRender !== 0 
        ?
        <>
        <KardexHeader />
        <KardexList />
        </>
        :
        <KardexErrors />}
    </div>
  )
}

export default KardexMain