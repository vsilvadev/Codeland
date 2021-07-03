import { Header } from "./components/Header";
import { PreviewPosts } from "./components/PreviewPosts";
import "./styles/global.scss";

export function App() {
  return (
    <div className="App">
      <Header/>
      <PreviewPosts/>
    </div>
  );
}

