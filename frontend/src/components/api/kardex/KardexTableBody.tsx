import { Kardex } from "../../../services/api/kardexService"

interface Props {
    kardexList: Kardex[]
}

const KardexTableBody = ({ kardexList }: Props) => {

  return (
    <div>
        {kardexList?.map( singleKardex => (
            <div 
                key={singleKardex.idkardex}
                className="grid grid-cols-13 text-[10px] text-center my-4 gap-2"
            >
                <h2 className="text-blue-600 hover:text-blue-400 cursor-pointer">{singleKardex.kardex}</h2>
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
                <p>{singleKardex.usuario.toLocaleLowerCase()}</p>
                <p>Escaneo ...</p>
            </div>
        ))}
    </div>
  )
}

export default KardexTableBody