import Header from "./components/header/mainHeader/Header";
import Main from "./components/main/Main/Main";

function App() {
  return (
    <>
      <div className="container mx-auto">
        {/* header */}
        <Header></Header>
        {/* main */}
        <Main></Main>
      </div>
    </>
  );
}

export default App;
