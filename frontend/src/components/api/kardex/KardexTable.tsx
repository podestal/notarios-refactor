import { Kardex } from "../../../services/api/kardexService"
import KardexFilters from "./KardexFilters"
import KardexTableBody from "./KardexTableBody"
import KardexTableFooter from "./KardexTableFooter"
import KardexTableHeader from "./KardexTableHeader"

interface Props {
    kardexList: Kardex[]
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    kardexCount: number
}

const KardexTable = ({ kardexList, page, setPage, kardexCount }: Props) => {

  return (
    <div>
        <KardexFilters />
        <div className="px-2">
          <KardexTableHeader />
          <KardexTableBody 
              kardexList={kardexList}
          />
          <KardexTableFooter 
              page={page}
              setPage={setPage}
              kardexCount={kardexCount}
          />
        </div>
    </div>
  )
}

export default KardexTable