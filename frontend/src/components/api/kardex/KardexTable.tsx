import { Kardex } from "../../../services/api/kardexService"
import KardexTableBody from "./KardexTableBody"
import KardexTableFooter from "./KardexTableFooter"
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
        <KardexTableFooter />
    </div>
  )
}

export default KardexTable