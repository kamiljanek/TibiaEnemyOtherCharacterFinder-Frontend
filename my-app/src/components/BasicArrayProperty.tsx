type Props = {
  title?: string;
  children: string[];
};

function BasicArrayProperty(props: Props) {
  const element = props.children.map((el, index) => <li key={index}>{el}</li>);

  return (
    <div>
      <p>{props.title && <span>{props.title}:</span>}</p>
      <ul>{element}</ul>
    </div>
  );
}

export default BasicArrayProperty;
