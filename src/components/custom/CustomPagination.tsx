import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

type CustomPaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const renderPaginationItems = () => {
    const pages = [];
    let previousEllipsis = false;

    for (let page = 1; page <= totalPages; page++) {
        const isCurrent = page === currentPage;
        const isCloseToCurrentPage = Math.abs(page - currentPage) <= 2;
        const isStartOrEndPage = page === 1 || page === totalPages;

        if (isStartOrEndPage || isCloseToCurrentPage) {
            pages.push(
                <PaginationItem key={page}>
                    <PaginationLink
                        className="w-5"
                        isActive={isCurrent}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </PaginationLink>
                </PaginationItem>
            );
            previousEllipsis = false;
        } else if (
            Math.abs(page - currentPage) === 3 ||
            (page === 2 && currentPage > 4) ||
            (page === totalPages - 1 && currentPage < totalPages - 3)
        ) {
            if (!previousEllipsis) {
                pages.push(<PaginationEllipsis key={`ellipsis-${page}`} />);
                previousEllipsis = true;
            }
        }
    }

    return pages;
};


    return (
        <Pagination className="relative py-5 my-5">
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-20 cursor-pointer pagination-btn absolute sm:mx-10 left-4 sm:left-2 top-1/2 transform -translate-y-1/2 my-12 sm:my-0"            >
                Previous
            </Button>
            <PaginationContent className="flex justify-center space-x-2 mt-4 flex-wrap cursor-pointer">
                {renderPaginationItems()}
            </PaginationContent>
            <Button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-20 cursor-pointer pagination-btn absolute sm:mx-10 right-4 sm:right-2 top-1/2 transform -translate-y-1/2 my-12 sm:my-0"
            >
                Next
            </Button>
        </Pagination>
    );
};

export default CustomPagination;
