import CreatStory from './CreateStory'
import ViewStory from './ViewStory'

const Story = () => {
    return (
        <>
            <div className='all-story-btn d-flex justify-content-center'>
                <div><CreatStory /></div>
                <div><ViewStory id='1' name="Jhon Brown" /></div>
                <div><ViewStory id='2' name="Mick Trancy" /></div>
                <div><ViewStory id='3' name="Juhi Magma" /></div>
                <div><ViewStory id='4' name="Jhalak Sarker" /></div>
            </div>
        </>
    )
}
export default Story