
import "./App.css";

import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import SignUp from "./pages/signup/SignUp.tsx";
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./context/AuthContext.tsx";

function App() {

    const {authUser}=useAuthContext()

    return (
        <div className='p-4 h-screen flex items-center justify-center'>
            {/*<Login></Login>*/}
            <Routes>
                <Route path={"/"} element={authUser ? <Home/> : <Navigate to={"login"}/>}></Route>
                <Route path={"/login"} element={authUser ? <Navigate to={"/"}/> : <Login/>}></Route>
                <Route path={"/signup"} element={authUser ? <Navigate to={"/"}/> : <SignUp/>}></Route>
            </Routes>
            <Toaster/>
        </div>
    );
}

export default App;