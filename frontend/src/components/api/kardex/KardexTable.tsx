import { Kardex } from "../../../services/api/kardexService"
import KardexTableBody from "./KardexTableBody"
import KardexTableFooter from "./KardexTableFooter"
import KardexTableHeader from "./KardexTableHeader"

interface Props {
    kardexList: Kardex[]
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const KardexTable = ({ kardexList, page, setPage }: Props) => {
  return (
    <div>
        <KardexTableHeader />
        <KardexTableBody 
            kardexList={kardexList}
        />
        <KardexTableFooter 
            page={page}
            setPage={setPage}
        />
    </div>
  )
}

export default KardexTable