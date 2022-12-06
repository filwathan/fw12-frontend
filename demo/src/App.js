import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Homepage from "./pages/Homepage";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Homepage />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App;