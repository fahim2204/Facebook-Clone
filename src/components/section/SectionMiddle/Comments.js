const Comments = () => {
    return (
        <>
            <div className="col-12 d-flex align-items-start px-4">
                <img height="32" width="32" alt="profile" className="rounded-circle m-2" src="https://source.unsplash.com/random/70?sig=27" />
                <div className='d-flex flex-column mt-1 mb-2'>
                   <div className="rounded-3 bg-light px-2 py-1">
                    <div className="fw-semibold"><small>Muhammad Shahnawaj Kabir</small></div>
                    <div className="lin"><small>This a test comment.</small></div>
                   </div>
                   <div className="d-flex">
                    <span className="fw-semibold text-muted mx-1 ms-2"><small>Like</small></span>
                    <span className="fw-semibold text-muted mx-1"><small>Reply</small></span>
                    <span className="fw-semibold text-muted mx-1"><small>Share</small></span>
                    <span className="text-muted mx-1"><small>15h</small></span>
                   </div>
                </div>
            </div>

        </>
    )
}
export default Comments