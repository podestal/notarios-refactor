import APIClient from "./apiClient";

export interface Kardex {
    idkardex: number;
    kardex: string;
    contrato: string;
    fechaingreso: string;
    fechaescritura: string;
    numescritura: string;
    numminuta: string;
    folioini: string;
    foliofin: string;
    numinstrmento: string;
    txa_minuta: string;
    idusuario: number;
    usuario: string;
    idtipkar: number;
}

export interface KardexPage {
    count: number;
    next: string | null;
    previous: string | null;
    results: Kardex[];
}

interface Props {
    id?: number
    by_correlative?: true
}

const getKardexService =({ id, by_correlative }: Props) => {

    let url = '/kardex/'
    if (id) {
        url += `${id}/`
    } else if (by_correlative) {
        url += 'kardex_by_correlative/'
    }

    return new APIClient<KardexPage, KardexPage>(url)
}

export default getKardexService