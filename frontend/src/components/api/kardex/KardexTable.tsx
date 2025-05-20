import { Kardex } from "../../../services/api/kardexService"
import KardexTableBody from "./KardexTableBody"
import KardexTableHeader from "./KardexTableHeader"

interface Props {
    kardexList: Kardex[]
}

const KardexTable = ({ kardexList }: Props) => {
  return (
    <div>
        <KardexTableHeader />
        <KardexTableBody 
            kardexList={kardexList}
        />
    </div>
  )
}

export default KardexTable