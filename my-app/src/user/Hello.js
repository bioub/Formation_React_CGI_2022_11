function Hello({ name = '', age = 0, isActive = false }) {
  // const name = props.name ?? '';
  // const age = props.age ?? 0;
  // const isActive = props.isActive ?? false;
  // const { name = '', age = 0, isActive = false } = props;

  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age}, this account is {isActive ? 'active' : 'inactive'}
    </div>
  );
}

export default Hello;
