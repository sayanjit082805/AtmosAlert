import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <Weather />
      </div>
    </>
  );
}

export default App;
