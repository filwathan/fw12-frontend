import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./SignIn"
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ViewAll from "./ViewAll";
import MovieDetails from "./MovieDetails";
import OrderPage from "./OrderPage";
import PaymentPage from "./PaymentPage";
import ProfilPage from "./ProfilPage"
import OrderHistoryPage from "./OrderHistoryPage";
import TicketResult from "./TicketResult";
import ManageMoviePage from "./ManageMoviePage";
import Homepage from "./Homepage";

const Main = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:email" element={<ResetPassword />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/moviedetails/:idMovie" element={<MovieDetails />} />
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/profilpage" element={<ProfilPage />} />
        <Route path="/orderhistorypage" element={<OrderHistoryPage />} />
        <Route path="/ticketresult/:idOrder" element={<TicketResult />} />
        <Route path="/managemoviepage" element={<ManageMoviePage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default Main;