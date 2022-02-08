import React from 'react';

    const Pagination = ({patientNumber, setPage, page}) => {

    let pagesArray = [];
    let numberOfPages = Math.ceil((patientNumber/5)); 
    for(let i = 1; i <= numberOfPages; i++){
        pagesArray.push(i);
    }

    const handleChangePage = (page)=>{
        setPage(page);
    }

    const handlePrev = () => {
        setPage(--page);
        console.log(page);
    }

    const handleNext = () => {
        setPage(++page);

    }
    

    return (
        <nav aria-label="Page navigation">
                <ul class="pagination pagination-sm justify-content-end">
                    <li class="page-item"  ><button class="page-link" disabled={ page == 1 ? true : false }  onClick={handlePrev}>Previous</button></li>
                    {
                        pagesArray.map(page =>
                        (  
                            <li class="page-item"><button class="page-link" onClick={()=>handleChangePage(page)}>{page}</button></li>
                        ))
                    }
                    <li class="page-item"  ><button class="page-link" disabled={ page == numberOfPages ? true : false } onClick={handleNext}>Next</button></li>
                </ul>
        </nav>
    );
}


                    // <li class="page-item"  ><a class="page-link" href="#"  >Previous</a></li>
                    // <li class="page-item"><a class="page-link" href="#" >1</a></li>
                    // <li class="page-item"><a class="page-link" href="#" >2</a></li>
                    // <li class="page-item"><a class="page-link" href="#" >3</a></li>
                    // <li class="page-item"><a class="page-link" href="#" >Next</a></li>

export default Pagination;
