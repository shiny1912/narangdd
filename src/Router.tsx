import {BrowserRouter, Routes, Route} from "react-router-dom";
import CampApply from "./routes/CampApply";
import CampDetail from "./routes/CampDetail";

function Router(){
  return (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/camp/apply" element={<CampApply />} />
          <Route path="/camp/detail" element={<CampDetail />} />
      </Routes>
  </BrowserRouter>
  );
}
export default Router;