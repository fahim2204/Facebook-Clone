import SectionLeft from "./section/sectionLeft"
import SectionMiddle from "./section/SectionMiddle"
import SectionRight from "./section/SectionRight"

const Body = () => {
    return (
        <>
            <div style={{marginTop:"55px",backgroundColor:"#f0f2f5"}} className="container-fluid">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-3"> <SectionLeft /></div>
                    <div className="col-6"><SectionMiddle /></div>
                    <div className="col-3"><SectionRight /></div>
                </div>
            </div>
        </>
    );
};

export default Body;