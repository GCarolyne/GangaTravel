import { IoIosArrowForward } from "react-icons/io";

type Props = {
  onClick: () => void;
};
export function NextButton({ onClick }: Props) {
  return (
    <div
      className="text-[#6e4c1e] hover:text-[#a47148] transition-colors z-10"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}
