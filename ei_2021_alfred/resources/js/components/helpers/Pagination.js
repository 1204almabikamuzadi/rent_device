import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    return (
        <div>
            <ReactPaginate
                     previousLabel={"previous"}
                     onPageChange={props.onPageChange}
                     initialPage={props.initialPage}
                     nextLabel={"next"}
                     pageRangeDisplayed={props.pageRangeDisplayed}
                     pageCount={props. pageCount}
                     breakClassName={'page-item'}
                     breakLinkClassName={'page-link'}
                     containerClassName={'pagination d-flex justify-content-end'}
                     pageClassName={'page-item'}
                     pageLinkClassName={'page-link'}
                     previousClassName={'page-item'}
                     previousLinkClassName={'page-link'}
                     nextClassName={'page-item'}
                     nextLinkClassName={'page-link'}
                     activeClassName={'active'}
                   
                   />
            
        </div>
    )
}

export default Pagination
