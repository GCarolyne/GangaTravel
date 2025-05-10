import { NavBar } from "../components/NavBar";
import { Outreach } from "../components/Outreach";

export function FormPage() {
  return (
    <>
      <div className="@container w-full h-screen bg-orange-800">
        <NavBar />
        <Outreach />
      </div>
    </>
  );
}
