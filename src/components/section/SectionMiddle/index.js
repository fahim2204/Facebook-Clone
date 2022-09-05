import Story from './story'
import CreatePost from './CreatePost'
import CreateRoom from './CreateRoom'
import Posts from './Posts'


const SectionMiddle = () => {
    return (
        <>
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-12">
                    <Story />
                </div>
                <div className="col-12 px-5">
                    <CreatePost />
                </div>
                <div className="col-12 px-5">
                    <CreateRoom />
                </div>
                <div className="col-12 px-5">
                    <Posts />
                </div>
            </div>
        </>
    )
}
export default SectionMiddle