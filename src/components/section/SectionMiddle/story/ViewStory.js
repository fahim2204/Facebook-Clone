const ViewStory = (props) => {
    return (
        <>
            <div style={{backgroundImage:`url(https://source.unsplash.com/random/112x200?sig=${props.id})`}} className="story-box d-flex rounded flex-column justify-content-between me-2 bg-white shadow-sm">
               <div className="d-flex">
               <img className="rounded-circle m-2 border border-3 border-primary shadow" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=${props.id}`}/>
               </div>
               <div className="mx-2 mb-1 fw-semibold text-light"><small>{props.name?props.name:"Unknown Name"}</small></div>
            </div>
        </>
    )
}
export default ViewStory