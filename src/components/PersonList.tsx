// how to receiv an array as a props
import { Name } from "./Person.type";

type PersonListProps = {
  names: Name[];
};

// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h4>
        {props.names.map((name) => {
          return <h5 key={name.first}>{`${name.first} ${name.last}`}</h5>;
        })}
      </h4>
    </div>
  );
};

export default PersonList;
