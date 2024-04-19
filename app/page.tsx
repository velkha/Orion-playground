import Window from "./components/window";
import Folder from "./components/folders/folder";
export default function Home() {
  return (
    <>
      <Window >
        <h1>Hello, world!</h1>
        <p>Welcome to my application.</p>
      </Window>
      <Folder folder="portfolio" />
    </>
  );
}
