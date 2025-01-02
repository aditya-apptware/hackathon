import { useState } from "react";
import { statements } from "../data/statements";
import { EachProblemStatement } from "./EachProblemStatement";

export const Container = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className="bg-black text-white px-20 py-16">
      {statements
        .filter((each) => each.number === current)
        .map((each) => {
          return <EachProblemStatement statement={each} key={each.number} />;
        })}
    </div>
  );
};
