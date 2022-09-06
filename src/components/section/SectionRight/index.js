import './SectionRight.css'
const SectionRight = () => {
    const onlineUserList = [
        {
            userImg: "https://source.unsplash.com/random/70?sig=14",
            userName: "Raymond Mann",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=15",
            userName: "Harriet Blake",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=16",
            userName: "Florence Frank",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=17",
            userName: "Lillian Mcdonald",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=18",
            userName: "Melvin Gray",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=19",
            userName: "Joel Barton",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=20",
            userName: "Morris Weaver",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=21",
            userName: "Rex Edwards",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=22",
            userName: "Diane Jennings",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=23",
            userName: "Victor Simpson",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=24",
            userName: "Ellen Campbell",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=25",
            userName: "Kent Jones",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=26",
            userName: "Janie Maxwell",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=27",
            userName: "Danielle Barnes",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=28",
            userName: "Virgil Greene",
            userLink: "#"
        },
        {
            userImg: "https://source.unsplash.com/random/70?sig=29",
            userName: "Sue Barker",
            userLink: "#"
        },

    ]
    return (
        <>
            <div className="d-flex flex-column justify-content-start mt-3 ms-4">
                <div className="d-flex align-items-center mb-1 justify-content-between">
                    <span className="fs-5 ms-2 fw-semibold text-muted">Online User</span>
                    <span>
                        <span className="mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="grey" height="16" width="16" viewBox="0 0 16 16"><g fillRule="evenodd" transform="translate(-448 -544)"><path d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path></g></svg></span>
                        <span className="mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="grey" height="16" width="16" viewBox="0 0 16 16"><g fillRule="evenodd" transform="translate(-448 -544)"><g fillRule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg></span>
                        <span className="mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="grey" height="16" width="16" viewBox="0 0 20 20"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></span>
                    </span>
                </div>
                {onlineUserList.map((item, index) => {
                    return (
                        <div key={index} className="d-flex align-items-center">
                            <div className='user-online-1'><img height="28" width="28" alt="profile" className="rounded-circle m-2" src={item.userImg} /></div>
                            <span className="fw-semibold">{item.userName}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default SectionRight