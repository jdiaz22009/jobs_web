import ImageComponent from "../img/image";

const Banner = () => {
  return (
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <ImageComponent
        width={300}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/porfolio-dev-8dfe9.appspot.com/o/usacajobs%2Fwork.jpg?alt=media&token=9eef9f92-bf5b-4e8a-b6bc-72d392f5fd42"
        alt="banner usc jobs"
        className="absolute inset-0 w-full h-full object-fill"
      />

      <div className="max-w-screen-2xl mx-auto">
        <div className="relative z-50 h-full   justify-center flex flex-col  text-white p-5 lg:p-24">
          <h2 className="text-2xl font-bold mb-6">Siempre a mejor...</h2>

          <div className="p-10 rounded-xl bg-[#167DB7] bg-opacity-90">
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center relative">
              <div className="flex flex-col">
                <label htmlFor="offers" className="text-white">
                  Busco ofertas de...
                </label>
                <input
                  id="offers"
                  className="rounded-md p-2 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="offers2" className="text-white">
                  En...
                </label>
                <select
                  id="offers2"
                  className="rounded-md p-2 bg-gray-100 text-gray-800 appearance-none w-full"
                >
                  <option value="CO">Colombia</option>
                  <option value="ES">España</option>
                  <option value="PR">PERU</option>
                </select>
              </div>

              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-[#167DB7] border text-white hover:bg-white hover:text-[#167DB7] font-bold py-2 px-4 rounded mt-6"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
