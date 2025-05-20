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
                className="grid grid-cols-13 text-xs text-center my-4"
            >
                <h2>{singleKardex.kardex}</h2>
                <p>{singleKardex.fechaingreso}</p>
                <p>{singleKardex.contrato}</p>
                <p>Contratantes ...</p>
                <p>{singleKardex.fechaescritura}</p>
                <p>{singleKardex.numinstrmento}</p>
                <p>{singleKardex.numminuta}</p>
                <p>{singleKardex.folioini}</p>
                <p>{singleKardex.foliofin}</p>
                <p>registro</p>
                <p>{singleKardex.txa_minuta}</p>
                <p>{singleKardex.idusuario}</p>
                <p>Escaneo ...</p>
            </div>
        ))}
    </div>
  )
}

export default KardexTableBody