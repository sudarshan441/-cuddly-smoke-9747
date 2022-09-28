import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
export default function AllRoutes(){
    return (
        <Routes>
            <Route path={"/"} element={<Home></Home>}></Route>
        </Routes>
    )
}