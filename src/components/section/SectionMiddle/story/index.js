import CreatStory from './CreateStory'
import ViewStory from './ViewStory'

const Story = () => {
    return (
        <>
            <div className="row mx-1 mx-md-2 mx-lg-3 mx-xl-4">
                <div className="col-12 p-0 d-flex align-items-center scroll-story">
                    <div className='box-parent'><CreatStory /></div>
                    <div className='box-parent'><ViewStory id='1' name="Jhon Brown" /></div>
                    <div className='box-parent'><ViewStory id='2' name="Mick Trancy" /></div>
                    <div className='box-parent'><ViewStory id='3' name="Juhi Magma" /></div>
                    <div className='box-parent'><ViewStory id='4' name="Jhalak Sarker" /></div>
                    <div className='box-parent'><ViewStory id='5' name="Joel Barton" /></div>

                </div>
            </div>
        </>
    )
}
export default Story