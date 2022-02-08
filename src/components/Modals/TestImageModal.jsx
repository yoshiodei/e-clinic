import React from 'react';

const Testimagemodal = ({image}) => {
    return (
        <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Test Image</h5>
                                    </div>
                                    <div class="modal-body">
                                        {image}
                                    </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-target="#diagnoseModal" data-bs-toggle="modal">Go Back</button>
                                </div>
                                </div>
                            </div>
                        </div>
    );
}

export default Testimagemodal;
