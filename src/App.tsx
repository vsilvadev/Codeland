import { Header } from "./components/Header";
import { PreviewPosts } from "./components/PreviewPosts";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./styles/global.scss";

export function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header/>
        <PreviewPosts/>
      </ThemeContextProvider>
      
    </div>
  );
}

