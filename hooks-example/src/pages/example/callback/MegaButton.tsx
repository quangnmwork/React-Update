import { memo, MouseEventHandler } from "react";

const MegaButton = ({
  title,
  onClick,
}: {
  title?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  console.log("Megaboots render");
  return (
    <button className="btn bg-blue-400 mx-2" onClick={onClick}>
      {title || "Click on me"}
    </button>
  );
};

export default memo(MegaButton);
