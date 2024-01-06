import { ReactNode, useEffect, useState } from "react";

type Name = {
  firstName: string;
  lastName: string;
};

export const Counter = () => {
  // const [count, setCount] = useState<number>(0);
  // const [test, setTest] = useState<string>("");

  // useEffect(() => {
  //   setTimeout(() => setCount((v) => v + 1), 1000);
  // }, [test]);
  return (
    <div>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
      {/* <Form.Control
        className="bg-dark-subtle rounded-5"
        type="text"
        placeholder="Character name..."
      /> */}
      {/* </Form.Group> */}

      {/* <input
        type="text"
        onChange={(e) => {
          setTest(e.target.value);
        }}
        defaultValue="szukaj"
      ></input> */}
      {/* {test} */}
    </div>
  );
};
