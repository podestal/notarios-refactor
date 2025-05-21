import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'



const pages = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
  { id: 9, name: '9' },
  { id: 10, name: '10' },
]

const KardexTableFooter = () => {
  return (
    <div className='flex items-center justify-center px-4 py-3 sm:px-6 gap-10 mt-10'>
        <ArrowBigLeft 
          className='cursor-pointer text-gray-500 hover:text-gray-700'
        />
        <div>
        {pages.map((page) => (
          <button
            key={page.id}
            className="mx-1 cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {page.name}
          </button>
        ))}
        </div>
        <ArrowBigRight 
          className='cursor-pointer text-gray-500 hover:text-gray-700'
        />
    </div>
  )
}

export default KardexTableFooter