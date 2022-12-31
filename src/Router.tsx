import {BrowserRouter, Routes, Route} from "react-router-dom";
import CampApply from "./routes/CampApply";
import CampDetail from "./routes/CampDetail";
import Home from "./routes/Home";

function Router(){
  return (
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camp/apply" element={<CampApply />} />
          <Route path="/camp/detail" element={<CampDetail />} />
      </Routes>
  </BrowserRouter>
  );
}
export default Router;