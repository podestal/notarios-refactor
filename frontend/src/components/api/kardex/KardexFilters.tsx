const KardexFilters = () => {
  return (
    <div className="w-full flex-col justify-between items-center py-4 px-2 mb-6 border-b-2 border-dashed border-slate-950">
        <p className="mb-4">Busqueda por:</p>
        <div className="flex justify-between items-center gap-8 text-xs">
            <div className="flex items-center justify-center gap-2">
                <p>Nº Kardex:</p>
                <input type="text" className="bg-white text-slate-700 border border-slate-300 rounded-md p-1" />
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
    </div>
  )
}

export default KardexFilters