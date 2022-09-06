import './Story.css'
const CreateStory = () => {
    return (
        <>
            <div style={{backgroundImage:`url(https://source.unsplash.com/random/112x150?sig=30)`}} className="story-box d-flex border rounded flex-column align-items-center justify-content-end me-2 bg-white shadow-sm">
                <div className="create-story-sec d-flex justify-content-center align-items-end rounded-bottom bg-light">
                    <small className='fw-semibold mb-1'>Create Story</small>
                </div>
            </div>
        </>
    )
}
export default CreateStory
