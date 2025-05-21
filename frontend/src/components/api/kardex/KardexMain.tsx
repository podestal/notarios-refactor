import KardexHeader from "./KardexHeader"
import KardexList from "./KardexList"


const KardexMain = () => {
  return (
    <div className="mt-[80px] w-[65%] mx-auto bg-slate-100 rounded-lg shadow-lg mb-10">
        <KardexHeader />
        <KardexList />
    </div>
  )
}

export default KardexMain