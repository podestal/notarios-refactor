import KardexHeader from "./KardexHeader"
import KardexList from "./KardexList"


const KardexMain = () => {
  return (
    <div className="mt-[80px] w-[65%] mx-auto min-h-screen bg-slate-100 rounded-lg shadow-lg">
        <KardexHeader />
        <KardexList />
    </div>
  )
}

export default KardexMain