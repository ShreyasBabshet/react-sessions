import styles from "./Table.module.scss";
import { TableProps } from "./Table.types";

const Table = <T extends {}>({ columns, rows, renderAction }: TableProps<T>) => {
    return (
        <table className={styles.Table}>
            <thead>
                <tr>
                    {
                        columns.map(column => {
                            return <th key={column.id as string}>{column.displayText}</th>
                        })
                    }
                    { renderAction && <th></th> }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(row => {
                        return (
                            <tr key={Math.random().toString(16)}>
                                {
                                    columns.map(c => {
                                        const value = row[c.id];
                                        return <td key={Math.random().toString(16)}>{value}</td>
                                    })
                                }

                                {renderAction && renderAction(row)}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;