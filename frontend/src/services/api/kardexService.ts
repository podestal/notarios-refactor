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
}

export interface KardexPage {
    count: number;
    next: string | null;
    previous: string | null;
    results: Kardex[];
}

interface Props {
    id?: number;
}

const getKardexService =({ id }: Props) => {
    let url = id ? `/kardex/${id}/` : '/kardex/'
    return new APIClient<KardexPage, KardexPage>(url)
}

export default getKardexService