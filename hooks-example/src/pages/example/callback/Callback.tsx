import { useMemo, useState, useCallback } from "react";
import HooksLayout from "~/layout/HooksLayout";
import MegaButton from "./MegaButton";

const Callback = () => {
  const [number, setNumber] = useState<number>(0);
  //   const increaseNumber = () => {

  //     setNumber((prev) => prev + 5);
  //   };
  //   const increaseNumber = useMemo(() => {
  //     return function () {
  //       setNumber((prev) => prev + 5);
  //     };
  //   }, []);
  const increaseNumber = useCallback(() => {
    setNumber((prev) => prev + 5);
  }, []);

  return (
    <HooksLayout>
      <div className="text-center my-3">
        <p className="text-xl font-semibold my-3">{number}</p>
        <MegaButton onClick={increaseNumber} />
      </div>
    </HooksLayout>
  );
};

export default Callback;
