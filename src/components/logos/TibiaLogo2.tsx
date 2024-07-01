type Props = {
  size: number;
};

function TibiaLogo1(props: Props) {
  return (
    <div style={{ width: props.size, height: "auto" }}>
      <img src="./logo/logo2.svg" alt="" style={{ maxWidth: props.size }} />
    </div>
  );
}

export default TibiaLogo1;
