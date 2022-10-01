import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Services from "../Pages/Services"
export default function AllRoutes(){
    return (
        <Routes>
            <Route path={"/"} element={<Home></Home>}></Route>
            <Route path={"/services"} element={<Services></Services>}></Route>
           
        </Routes>
    )
}