import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);

    return (
        <div className="pages-div">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page-current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;