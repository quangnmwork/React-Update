import { ChangeEvent, useMemo, useState } from "react";
import { useTime } from "~/hooks/useTime";

function isPrime(n: number) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}
const selectedNum = 100;

const Memo = () => {
  const [inputVal, setInputVal] = useState<number>(selectedNum);
  const time = useTime();
  const allPrimes: number[] = useMemo(() => {
    const res = [];
    for (let counter = 2; counter < selectedNum; counter++) {
      console.log("Prime");
      if (isPrime(counter)) {
        res.push(counter);
      }
    }
    return res;
  }, [inputVal]);

  return (
    <div>
      <p className="text-right">{time.toString()}</p>
      <div className="text-center p-5">
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
          defaultValue={inputVal}
          max={100000}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputVal(+e.target.value);
          }}
        />
        <h1 className="text-blue-600 text-3xl">useMemo Example</h1>
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </div>
    </div>
  );
};

export default Memo;
