import APIClient from "./apiClient";

export interface Kardex {
    idkardex: number;
    kardex: string;
    contrato: string;
    fechaingreso: string;
}

interface Props {
    id?: number;
}

const getKardexService =({ id }: Props) => {
    let url = id ? `/kardex/${id}/` : '/kardex/'
    return new APIClient<Kardex, Kardex>(url)
}

export default getKardexService