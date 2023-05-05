import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="tweets" element={<Tweets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
