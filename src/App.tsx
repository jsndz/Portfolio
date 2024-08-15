import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="text-white flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-4">
            <img
              src="/JSN.png"
              alt="JSN Logo"
              className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 mr-0 sm:mr-4"
            />
            <span className="font-chelsea text-4xl sm:text-5xl lg:text-6xl text-center">
              JAISON <br />
              DSOUZA
            </span>
          </div>
          <span className="font-nixie text-base sm:text-lg md:text-xl lg:text-2xl">
            developer | engineer
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
