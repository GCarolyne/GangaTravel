import { FaRegCircle, FaCircle } from "react-icons/fa";

type IndicatorProps = {
  count: number;
  selected: number;
  onClick: (index: number) => void;
};

export function Indicators({ count, selected, onClick }: IndicatorProps) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push(
      i === selected ? (
        <span onClick={() => onClick(i)}>
          <FaCircle key={i} />
        </span>
      ) : (
        <span onClick={() => onClick(i)}>
          {" "}
          <FaRegCircle key={i} />
        </span>
      )
    );
  }

  return <>{circles}</>;
}
