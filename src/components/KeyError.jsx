import alert from "../assets/code-red.svg";

function KeyError() {
  return (
    <>
      <img src={alert} className="h-64 w-64 mt-3" alt="Image" />
      <div className="flex flex-col items-center p-8 rounded-md w-600 sm:px-12 text-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-50 px-3">
            Invalid API Key!
          </h1>
          <p className="text-2xl text-gray-600 pt-3 py-3">
            Code Red! <br /> An invalid API key was detected! 
          </p>
        </div>
      </div>
    </>
  );
}

export default KeyError;
