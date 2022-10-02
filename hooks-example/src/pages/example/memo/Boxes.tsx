import { memo } from "react";
interface BoxProps {
  flex: number;
  background: string;
}
function Boxes({ boxes }: { boxes: BoxProps[] }) {
  console.log("Hello Boxes Re-render");
  return (
    <div className="w-full gap-5 flex">
      {boxes.map((boxStyles, index) => (
        <div key={index} className="h-[100px] rounded-md" style={boxStyles} />
      ))}
    </div>
  );
}

export default memo(Boxes);
