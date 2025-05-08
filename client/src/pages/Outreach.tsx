export function Outreach() {
  return (
    <>
      <div className="@container w-full h-screen bg-olive/70">
        <form action="" className="w-full">
          <div className="w-full">
            <label htmlFor="namedInput">Meno:</label>
            <input id="namedInput" type="text" name="name" required />
          </div>
          <div className="w-full">
            <label htmlFor="email">Zadajte svoj email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="w-full">
            <label htmlFor="phoneNumber">
              <input type="number" name="phoneNumber" id="phoneNumber"></input>
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
