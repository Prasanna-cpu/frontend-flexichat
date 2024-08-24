
import "./App.css";

import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import SignUp from "./pages/signup/SignUp.tsx";
import {Toaster} from "react-hot-toast";

function App() {

    return (
        <div className='p-4 h-screen flex items-center justify-center'>
            {/*<Login></Login>*/}
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/signup"} element={<SignUp/>}></Route>
            </Routes>
            <Toaster/>
        </div>
    );
}

export default App;