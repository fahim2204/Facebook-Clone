const Comments = (props) => {
    return (
        <>
            <div className="col-12 d-flex align-items-start px-4">
                <img height="32" width="32" alt="profile" className="rounded-circle m-2" src={props.pic} />
                <div className='d-flex flex-column mt-1 mb-2'>
                   <div className="rounded-3 bg-light px-2 py-1">
                    <div className="fw-semibold"><small>{props.name}</small></div>
                    <div className="lin"><small>{props.text}</small></div>
                   </div>
                   <div className="d-flex">
                    <span className="fw-semibold text-muted mx-1 ms-2"><small>Like</small></span>
                    <span className="fw-semibold text-muted mx-1"><small>Reply</small></span>
                    <span className="fw-semibold text-muted mx-1"><small>Share</small></span>
                    <span className="text-muted mx-1"><small>{props.timeDifference(Date.now(),props.created_at)}</small></span>
                   </div>
                </div>
            </div>

        </>
    )
}
export default Comments