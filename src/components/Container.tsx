type ContainerProps = {
  style: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.style}>Text Content goes here</div>;
};

export default Container;
