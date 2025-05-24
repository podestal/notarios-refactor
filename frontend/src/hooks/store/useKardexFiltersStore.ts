import { create } from "zustand"

interface FilterInterface {
    type: 'K' | 'N' | 'D' | 'E' | ''
    value: string
}

interface FilterState {
    filter: FilterInterface
    setFilter: (filter: FilterInterface) => void
}

const useKardexFiltersStore = create<FilterState>(set => ({
    filter: {
        type: '',
        value: ''
    },
    setFilter: (filter) => {
        set({ filter })
    }
}))

export default useKardexFiltersStore
