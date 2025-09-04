import QuizSelector from "./components/QuizSelector/QuizSelector.tsx";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage/QuizPage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import QuizSelectorPage from "./pages/QuizSelectorPage/QuizSelectorPage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<QuizSelectorPage />}></Route>
        <Route path="/quiz/:topic" element={<QuizPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
