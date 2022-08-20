// How to receive an object as a props

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return <div>{`${props.name.first} ${props.name.last} `}</div>;
};

export default Person;
