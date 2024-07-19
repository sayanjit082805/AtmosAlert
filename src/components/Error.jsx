import compass from "../assets/compass.svg";

function Error({ search }) {
  return (
    <>
      <img src={compass} className="h-64 w-64 mt-3" alt="Image" />
      <div className="flex flex-col items-center p-8 rounded-md w-600 sm:px-12 text-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-50 px-3">
            No city found!
          </h1>
          <p className="text-2xl text-gray-600 pt-3 py-3">
            We searched high and low, <br /> but {search} was nowhere to be
            found!
          </p>
        </div>
      </div>
    </>
  );
}

export default Error;
