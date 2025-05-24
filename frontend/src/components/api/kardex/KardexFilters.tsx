import { useEffect, useState } from "react"
import useBodyRenderStore from "../../../hooks/store/bodyRenderStore"
import useCorrelativeStore from "../../../hooks/store/useCorrelativeStore"

const kardexTypes: Record<number, string> = {
    1: 'KAR',
    2: 'NCT',
    3: 'ACT',
    4: 'GAM',
    5: 'TES',
}

const KardexFilters = () => {
    const bodyRender = useBodyRenderStore(s => s.bodyRender)
    const [numberValue, setNumberValue] = useState(kardexTypes[bodyRender])
    const setCorrelative = useCorrelativeStore(s => s.setCorrelative)

    useEffect(() => {
        setNumberValue(kardexTypes[bodyRender] || '')
    }, [bodyRender])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setCorrelative(numberValue)
        console.log('Submit', numberValue)
    }
        

  return (
    <form 
        onSubmit={handleSubmit}
        className="w-full flex-col justify-between items-center py-4 px-2 mb-6 border-b-2 border-dashed border-slate-950">
        <p className="mb-4">Busqueda por:</p>
        <div className="flex justify-between items-center gap-8 text-xs">
            <div className="flex items-center justify-center gap-2">
                <p>Nº Kardex:</p>
                <input 
                    value={numberValue}
                    onChange={(e) => setNumberValue(e.target.value)}
                    type="text" 
                    className="bg-white text-slate-700 border border-slate-300 rounded-md p-1" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <p>Nro Doc:</p>
                <input type="text" className="bg-white text-slate-700 border border-slate-300 rounded-md p-1" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <p>Nombre:</p>
                <input type="text" className="bg-white text-slate-700 border border-slate-300 rounded-md p-1" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <p>Nº Escr/Act:</p>
                <input type="text" className="bg-white text-slate-700 border border-slate-300 rounded-md p-1" />
            </div>
            <button className="bg-gray-50 px-2 py-1 transition duration-300 text-xs border-1 border-gray-300 cursor-pointer hover:bg-gray-300 rounded-md">Buscar</button>
        </div>
    </form>
  )
}

export default KardexFilters