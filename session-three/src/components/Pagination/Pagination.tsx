import styles from "./Pagination.module.scss";
import { PaginationProps } from "./Pagination.types.ts"

const Pagination = ({ pageSizes, onNext = () => {}, onPrev = () => {}, onPageChange = () => {} }: PaginationProps) => {

    let options = [
        <option key="10" value="10">10</option>,
        <option key="30" value="30">30</option>,
        <option key="50" value="50">50</option>,
    ];

    if(pageSizes) {
        options = pageSizes.map(size => {
            return <option key={size} value={size}>{size}</option>
        })
    }

    return (
        <div className={styles.Pagination}>
            <span onClick={onPrev}>&lt;</span>
            <select onChange={(e) => onPageChange(parseInt(e.target.value))}>
                {options}
            </select>
            <span onClick={onNext}>&gt;</span>
        </div>
    )
}

export default Pagination 
