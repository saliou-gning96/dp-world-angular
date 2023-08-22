import { Article } from "./article"

export interface Transit {
    Numero?: string
    MontantPO?: string
    NumeroPO?: string
    Departement?: string
    ListArticle?: Article[]
}