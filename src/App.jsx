import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Pages />
      </div>
    </BrowserRouter>
  );
};
export default App;
