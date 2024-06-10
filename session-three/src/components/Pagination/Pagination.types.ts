export interface PaginationProps {
    pageSizes?: number[];
    onNext?: () => void;
    onPrev?: () => void;
    onPageChange?: (size: number) => void;
} 
