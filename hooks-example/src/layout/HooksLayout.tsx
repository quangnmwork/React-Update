import React, { ReactNode } from "react";
import Navigation from "~/components/Navigation/Navigation";

const HooksLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default HooksLayout;
