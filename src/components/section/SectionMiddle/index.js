import Story from './story'
import CreatePost from './CreatePost'
import CreateRoom from './CreateRoom'
import Posts from './Posts'
import {userDummyApi} from "../../../api/userPosts"
import { useState } from 'react'


const SectionMiddle = () => {
    const [dummyApi, setDummyApi] = useState(userDummyApi.posts)

    return (
        <>
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-12 px-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5">
                    <Story />
                </div>
                <div className="col-12 px-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5">
                    <CreatePost dummyApi={dummyApi} setDummyApi={setDummyApi}/>
                </div>
                <div className="col-12 px-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5">
                    <CreateRoom />
                </div>
                <div className="col-12 px-1 px-md-2 px-lg-3 px-xl-4 px-xxl-5">
                    <Posts dummyApi={dummyApi} setDummyApi={setDummyApi}/>
                </div>
            </div>
        </>
    )
}
export default SectionMiddle