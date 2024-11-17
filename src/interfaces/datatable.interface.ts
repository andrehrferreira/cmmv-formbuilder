export interface DataTable {
    fields: Array<string>,
    sortBy: string;
    sort?: "asc" | "desc"
}