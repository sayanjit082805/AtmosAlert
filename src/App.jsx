import Weather from "./components/Weather";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to bg-slate-700">
        <Title />
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <Weather />
      </div>
    </>
  );
}

export default App;
