import './Story.css'
const CreateStory = () => {
    return (
        <>
            <div style={{backgroundImage:`url(https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-1/100670822_363325067979607_4059718317856784384_n.jpg?stp=dst-jpg_s160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGToiOu1kfi3ZKpyV6cfJ3isdnxKQRs79Ox2fEpBGzv04QIk6VHUP7b-C4kZ6BiT5sq34icMFG4EKjHs6vdROCh&_nc_ohc=HvBfLmNIPSEAX__NpWc&_nc_ht=scontent.fdac135-1.fna&oh=00_AT_AArPxiRyQbG1bHEE1arWcv3Xv86XgHlHj14MjetLw_A&oe=633C70D4)`}} className="story-box d-flex border rounded flex-column align-items-center justify-content-end me-2 bg-white shadow-sm">
                <div className="create-story-sec d-flex justify-content-center align-items-end rounded-bottom bg-light">
                    <small className='fw-semibold mb-1'>Create Story</small>
                </div>
            </div>
        </>
    )
}
export default CreateStory
{/* <div className="position-absolute top-0 start-50 translate-middle pb-4">
    <button className='btn btn-sm rounded-circle bg-primary p-2 d-flex justify-content-center btn-outline-light'><span className='p-0 m-0 text-light fw-bold'>+</span></button>
</div> */}