// how to receiv an array as a props

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h2>
        {props.names.map((name) => {
          return <h2 key={name.first}>{`${name.first} ${name.last}`}</h2>;
        })}
      </h2>
    </div>
  );
};

export default PersonList;
