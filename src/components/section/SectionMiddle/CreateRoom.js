import './SectionMiddle.css'

const CreateRoom = () => {
    return (
        <>
            <div className="row mx-4 mt-3 bg-white rounded rounded-3">
                <div className="col-12 d-flex">
                    <button className="btn btn-white border-primary rounded-5 d-flex justify-content-center align-items-center my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="purple" height="24" width="24" viewBox="0 0 16 16"><g fill-rule="evenodd" transform="translate(-448 -544)"><path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path></g></svg>
                        <span className="text-primary ms-2 fw-semibold">Create Room</span>
                    </button>

                    <div className='user-online'><img className="rounded-circle m-2 ms-4 shadow-sm" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=10`}/></div>
                    <div className='user-online'><img className="rounded-circle m-2 shadow-sm" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=11`}/></div>
                    <div className=''><img className="rounded-circle m-2 shadow-sm" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=12`}/></div>
                    <div className='user-online'><img className="rounded-circle m-2 shadow-sm" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=13`}/></div>
                    <div className='user-online'><img className="rounded-circle m-2 shadow-sm" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=14`}/></div>
                    <div className=''><img className="rounded-circle m-2 shadow-sm" alt="profile" height="40px" width="40px" src={`https://source.unsplash.com/random/70?sig=15`}/></div>

                </div>

            </div>
        </>
    )
}
export default CreateRoom