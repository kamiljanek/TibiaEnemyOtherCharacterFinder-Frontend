type Props = {
  title?: string;
  children: string | number;
  class?: string;
};

function BasicProperty(props: Props) {
  return (
    <li className={props.class}>
      {props.title && <span>{props.title}: </span>}
      {props.children}
    </li>
  );
}

export default BasicProperty;
