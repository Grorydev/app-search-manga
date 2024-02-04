import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import ListItems from "./ListItems";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ListItems />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
export default Pages;
