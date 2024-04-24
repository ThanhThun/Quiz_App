import NavBar from "../NavBar/navbar"
import AdminMenu from "./adminMenu"
import AdminContent from "./adminContent"


const admin = () => {
    return (
        <div>
            <NavBar/>
            {/* <AdminMenu/> */}
            <AdminContent/>
        </div>
    )
}

export default admin;