import { ReactNode } from "react";

type Name = {
  firstName: string;
  lastName: string;
};

type Props = {
  children: ReactNode;
  name?: Name;
};

export const Kamil = (props: Props) => {
  // const name = "kamil";

  return (
    <>
      <div>{props.name?.firstName}</div>
      <div>{props.name?.lastName}</div>

      <footer>{props.children}</footer>
    </>
  );
};
