type InputProps = {
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("cc", event.target.value);
  };

  return <input type="text" value={props.value} onChange={handleChange} />;
};

export default Input;
