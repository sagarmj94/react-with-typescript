type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h4>{props.children}</h4>
    </div>
  );
};

export default Heading;
