import SectionLeft from "./section/sectionLeft"
import SectionMiddle from "./section/SectionMiddle"
import SectionRight from "./section/SectionRight"
import "../App.css"

const Body = () => {
    return (
        <>
            <div style={{marginTop:"55px",backgroundColor:"#f0f2f5"}} className="container-fluid">
                <div className="row g-1 d-flex justify-content-between">
                    <div className="d-none d-md-block col-md-3 scroll-section"> <SectionLeft /></div>
                    <div className="col-12 col-md-6 scroll-section"><SectionMiddle /></div>
                    <div className="d-none d-md-block col-md-3 scroll-section"><SectionRight /></div>
                </div>
            </div>
        </>
    );
};

export default Body;