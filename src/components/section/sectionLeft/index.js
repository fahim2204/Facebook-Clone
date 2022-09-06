import { userDummyApi } from "../../../api/userPosts"

const SectionLeft = () => {
    const menuItem = [
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png?_nc_eui2=AeGSY8zFn9aoixOqKkGRoi6EY2wdbxH-OX5jbB1vEf45fsKsOh3O84FSYM5bgBK6Fini_zAebEqgW8XuU3_oTW_6",
            menuText: "Friends",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png?_nc_eui2=AeHUsV855QGmKge2TsqE86U4m5Q_-YdsEieblD_5h2wSJ1FHyUo0tY3pXVynTMroYFe50g_kmx54ZisANS8QLfo3",
            menuText: "Groups",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png?_nc_eui2=AeGWwXITW20zObJh7pYqr6Curr7hPsNNZ9iuvuE-w01n2KAJ29dodDe2Q3XhtdT4NCTAteTr3AuThASsne48C2C2",
            menuText: "Marketplace",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png?_nc_eui2=AeFlc9-Ta8YWKzgcaUcIJL-nqF4NV7eRtieoXg1Xt5G2J6mTLwWQcma3YzkoRCmwolwJBPlevqUPX4AF72Yu1dSq",
            menuText: "Watch",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png?_nc_eui2=AeH50LpbdMdAysw87F20FSq8-TlT3iljuAT5OVPeKWO4BAMM0fSTGLLRtcChHoaXIFJYYxK-TEYJpFzFrng7Ooax",
            menuText: "Memories",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/lqymE2iRETE.png?_nc_eui2=AeErfupnf_dR9BUY6DVP-a7uKok-rA86GNkqiT6sDzoY2UKjNHcqcvz-xxUPX3ENTRGIFhT9rMg4YFUSkxkrsnVL",
            menuText: "Ad Center",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/C949oxkze-S.png?_nc_eui2=AeEjETiVoDnV8pk2XzWiZgcZXhIyGjfjS35eEjIaN-NLfoNpE9mWE4kiAbxUsPECqxhY-PX3xGzm9oLcl_RzxIOW",
            menuText: "Ads Manager",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/pu-_pW8L9Nc.png?_nc_eui2=AeHhCWVpjPX_dJRMRyOKsaCrOJW21Gut1_c4lbbUa63X93TRH2RMJcHEoK9ft6mBFmYCeRzGa_ULvbvzpc8PbXuo",
            menuText: "Blood Donation",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/4LP02rGQaMl.png?_nc_eui2=AeEr5H14xhhAkacsgrkvLgQHASImEVgu8wsBIiYRWC7zCxRzVorn0YTlEs20mOpzvbXLUW6n8oxgyGMS4Bd3MlHP",
            menuText: "Climate Science Center",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/dPuNpNrfDW7.png?_nc_eui2=AeFiTuQFdglxes8Rh09JN17Gy3-I0CPEqmDLf4jQI8SqYIpjUApbic7-Rh-4_ql7HOdTcgzdnnoO2l28KwPbjLyO",
            menuText: "Community Help",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png?_nc_eui2=AeGQkFbRTPdK6GBhW3-26EMoDZv-adOhkcYNm_5p06GRxtFjQx-iFxBGMm4L6g2fpUWnQevs-8AcRmkAeWtSM9sn",
            menuText: "COVID-19 Information Center",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/z2lQL_jKCWe.png?_nc_eui2=AeFm79LEbxV0-z_dyDD7pCiZdUEvZxt8qxt1QS9nG3yrG00datmQsgW3-GAknbT_vcf8rGKSYOrVPe2a-KScJiNV",
            menuText: "Emotional Health",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/QILj4kKZMLW.png?_nc_eui2=AeFvK2kY8zaECyFIMgFKq6pMuswBv2KYagK6zAG_YphqAt46pyPR7dYAAZPMxgBp7P7SikVJUYFpO4hWGZ8WYZ9a",
            menuText: "Events",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/vWBUs7aYAiK.png?_nc_eui2=AeEbTselpxnB15hQMKIFiUzl-HOk2XCzpUn4c6TZcLOlSewKOkZAH4TZmgAIeMGK2RtP93-OYBrziTOYtA-6gZWU",
            menuText: "Facebook Pay",
            menuLink: "#"
        },
        {
            imgSrc: "https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png?_nc_eui2=AeHKH1UdxCgQcy8eAE_iewZMcKeSi1Y8wfpwp5KLVjzB-gTH6Kp78eFBNrJs6myztVnjLVuU3qX6R9YRFYklfr5l",
            menuText: "Favourites",
            menuLink: "#"
        },
    ]
    return (
        <>
            <div className="d-flex flex-column justify-content-start mt-3">
                <div className="d-flex align-items-center">
                    <img height="28" width="28" alt="profile" className="rounded-circle m-2" src={userDummyApi.user.profile_picture} />
                    <span className="fw-semibold">{userDummyApi.user.name}</span>
                </div>
                {menuItem.map((item, index) => {
                    return (
                        <div key={index} className="d-flex align-items-center">
                            <img height="28" width="28" alt="profile" className="rounded-circle m-2" src={item.imgSrc} />
                            <span className="fw-semibold">{item.menuText}</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default SectionLeft