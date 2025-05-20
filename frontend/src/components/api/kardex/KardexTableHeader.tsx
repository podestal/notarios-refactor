const KardexTableHeader = () => {
    // N° Kard - Año	Fec. Ingreso	Actos	Contratantes	Fec. Escrit.	Nº Instr.	Minuta	Folio Ini.	Folio Fin	Registro	Tomo	Usuario	Escaneo
  return (
    <div className="grid grid-cols-13 bg-neutral-500 text-center text-xs h-10 place-items-center text-slate-50 font-semibold">
        <p>N° Kard - Año</p>
        <p>Fec. Ingreso</p>
        <p>Actos</p>
        <p>Contratantes</p>
        <p>Fec. Escrit.</p>
        <p>Nº Instr.</p>
        <p>Minuta</p>
        <p>Folio Ini.</p>
        <p>Folio Fin</p>
        <p>Registro</p>
        <p>Tomo</p>
        <p>Usuario</p>
        <p>Escaneo</p>
    </div>
  )
}

export default KardexTableHeader