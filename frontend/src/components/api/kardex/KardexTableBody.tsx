import { Kardex } from "../../../services/api/kardexService"

interface Props {
    kardexList: Kardex[]
}

const KardexTableBody = ({ kardexList }: Props) => {
  return (
    <div>
        {kardexList.map( singleKardex => (
            <div 
                key={singleKardex.idkardex}
                className="grid grid-cols-13 text-xs text-center mb-2"
            >
                <h2>{singleKardex.kardex}</h2>
                <p>{singleKardex.fechaingreso}</p>
                <p>{singleKardex.contrato}</p>
            </div>
        ))}
    </div>
  )
}

export default KardexTableBody