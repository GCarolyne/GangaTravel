import { NavBar } from "../components/NavBar";

export function Form() {
  return (
    <>
      <div className="@container w-full h-screen bg-orange-800">
        <NavBar />
        <Form />
      </div>
    </>
  );
}
