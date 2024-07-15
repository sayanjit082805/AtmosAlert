import logo from "/logo.svg";

export default function Title() {
  return (
    <div className="flex">
      <div>
        <img className="h-20 w-20 pt-5 float-left" src={logo}></img>
      </div>
      <div className="pt-6 bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent font-bold text-[26px]">
        <h2>AtmosAlert</h2>
      </div>
    </div>
  );
}
