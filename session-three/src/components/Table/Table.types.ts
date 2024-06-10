export interface Column<T> {
    id: keyof T;
    displayText: string;
}


export interface TableProps<T> {
    columns: Column<T>[];
    rows: T[]
    renderAction?: (row: T) => JSX.Element
}