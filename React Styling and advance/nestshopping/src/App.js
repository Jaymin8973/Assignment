import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Index from "./Page/Index";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header/><Index/><Footer/></>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
