import { ChangeEvent, useMemo, useState } from "react";
import HooksLayout from "~/layout/HooksLayout";
import Boxes from "./Boxes";

const BoxesMemo = () => {
  const [name, setName] = useState<string>("");
  const [boxWidth, setBoxWidth] = useState<number>(1);

  const boxes = useMemo(
    () => [
      { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
      { flex: 3, background: "hsl(260deg 100% 40%)" },
      { flex: 1, background: "hsl(50deg 100% 60%)" },
    ],
    []
  );

  // const boxes = [
  //   { flex: boxWidth, background: "hsl(345deg 100% 50%)" },
  //   { flex: 3, background: "hsl(260deg 100% 40%)" },
  //   { flex: 1, background: "hsl(50deg 100% 60%)" },
  // ];
  return (
    <HooksLayout>
      <div className="text-center p-5">
        <h1 className="text-blue-600 text-3xl">useMemo Boxes Example</h1>
        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered input-info w-full max-w-xs mt-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Box width input"
          className="input input-bordered input-secondary w-full max-w-xs ml-5"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setBoxWidth(+e.target.value);
          }}
        />
        <div className="mt-10">
          <Boxes boxes={boxes} />
        </div>
      </div>
    </HooksLayout>
  );
};

export default BoxesMemo;
