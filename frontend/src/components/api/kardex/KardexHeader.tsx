const KardexHeader = () => {
  return (
    <div className="w-full flex justify-between items-center bg-slate-700 p-4 rounded-t-lg text-slate-50">
        <h2 className="text-amber-500">Instrumentos Protocolares</h2>
        <div className="flex justify-center items-center gap-8 text-sm">
            <p>Nuevo</p>
            <span>|</span>
            <p>Kardex</p>
        </div>
    </div>
  )
}

export default KardexHeader