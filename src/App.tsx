import { Header } from "./components/Header";
import { PreviewPosts } from "./components/PreviewPosts";
import { SearchContextProvider } from "./contexts/SearchContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./styles/global.scss";

export function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <SearchContextProvider>

        <Header/>
        <PreviewPosts/>
      </SearchContextProvider>
      </ThemeContextProvider>
      
    </div>
  );
}

