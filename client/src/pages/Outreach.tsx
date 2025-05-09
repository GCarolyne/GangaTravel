export function Outreach() {
  return (
    <>
      <div className="@container w-full h-screen bg-olive/70">
        <div className="relative flex justify-center mt-16">
          <hr className="w-full sm:w-1/2 h-px bg-white border-0 dark:bg-gray-700" />
          <img
            src="/images/lyra.jpg"
            alt="lyra"
            className="absolute -top-6 w-16 h-16 rounded-full border-2 border-white object-cover bg-black"
          />
        </div>
        <form
          action=""
          className="bg-white block w-11/12 max-w-xs mx-auto my-8 p-6 rounded-lg shadow-lg border border-gray-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-full mb-4">
            <label htmlFor="namedInput" className="block text-gray-700">
              Meno:
            </label>
            <input
              id="namedInput"
              type="text"
              name="name"
              className="bg-grey"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="email" className="">
              Zadajte svoj email:
            </label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="phoneNumber">Tel Cislo:</label>
            <input type="tel" name="phoneNumber" id="phoneNumber"></input>
          </div>
        </form>
      </div>
    </>
  );
}
