import { string } from "prop-types";
import React, { useContext } from "react";
import HooksLayout from "~/layout/HooksLayout";
import { createCtx } from "./createCtx";

const { Provider, apiContext, dataContext } = createCtx("Text");

const Context = () => {
  return (
    <HooksLayout>
      <Provider>
        <div className="text-center">
          <h1 className="text-blue-600 text-3xl my-3">useContext Example</h1>{" "}
          <DisplayName />
          <InputChild />
        </div>
      </Provider>
    </HooksLayout>
  );
};

const InputChild = () => {
  const update = useContext(apiContext);
  console.log("Input click");
  return (
    <button
      onClick={() => {
        update(Math.floor(Math.random() * 6 + 1).toString());
      }}
      className="btn"
    >
      Click me
    </button>
  );
};

const DisplayName = () => {
  const data = useContext(dataContext);
  console.log("Display name render");
  return <p className="text-2xl text-blue-800 my-3">{data}</p>;
};

export default Context;
