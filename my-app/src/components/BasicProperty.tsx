type Props = {
  title?: string;
  children: string | number;
};

function BasicProperty(props: Props) {
  return (
    <li>
      {props.title && <span>{props.title}: </span>}
      {props.children}
    </li>
  );
}

export default BasicProperty;
