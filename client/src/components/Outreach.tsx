import { FormEvent } from "react";

export function Outreach() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("testing post api", "testing");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/outreach", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Response error");
      }
    } catch (error) {
      alert("your contact information did not submit successfully");
      console.error(error);
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-[#f4e9d8] flex items-center justify-center">
        <form
          id="formInput"
          onSubmit={handleSubmit}
          action=""
          className="bg-[#fffaf0] w-11/12 max-w-md p-8 rounded-xl shadow-md border border-[#d6bfa7] font-serif"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
            backgroundBlendMode: "overlay",
          }}
        >
          <h2 className="text-2xl mb-6 text-[#6e4c1e] font-bold text-center">
            Spojte sa s nami
          </h2>
          <div className="mb-5">
            <label htmlFor="namedInput" className="block text-[#5e3d1f] mb-1">
              Meno:
            </label>
            <input
              id="namedInput"
              type="text"
              name="firstName"
              className="w-full px-4 py-2 border border-[#c4a484] rounded-md bg-[#fdf6ee] text-[#3d2c1e] focus:outline-none focus:ring-2 focus:ring-[#caa674]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="namedInput" className="block text-[#5e3d1f] mb-1">
              lastName:
            </label>
            <input
              id="namedInput"
              type="text"
              name="lastName"
              className="w-full px-4 py-2 border border-[#c4a484] rounded-md bg-[#fdf6ee] text-[#3d2c1e] focus:outline-none focus:ring-2 focus:ring-[#caa674]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-[#5e3d1f] mb-1">
              Zadajte svoj email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-[#c4a484] rounded-md bg-[#fdf6ee] text-[#3d2c1e] focus:outline-none focus:ring-2 focus:ring-[#caa674]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-[#5e3d1f] mb-1">
              Tel. číslo:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="w-full px-4 py-2 border border-[#c4a484] rounded-md bg-[#fdf6ee] text-[#3d2c1e] focus:outline-none focus:ring-2 focus:ring-[#caa674]"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#5e3d1f] mb-1">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-[#c4a484] rounded-md bg-[#fdf6ee] text-[#3d2c1e] focus:outline-none focus:ring-2 focus:ring-[#caa674]"
              ></input>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#a47148] text-white py-2 rounded-md hover:bg-[#92613c] transition-colors"
          >
            Odoslať
          </button>
        </form>
      </div>
    </>
  );
}
