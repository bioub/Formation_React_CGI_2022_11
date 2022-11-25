import { useDispatch, useSelector } from "react-redux";
import { userSetName } from "../store/slices";
import { nameSelector } from "../store/selectors";
import Select from "./Select";
import Hello from "./Hello";

function User() {
  const userNames = ['Romain', 'Toto', 'Titi'];
  const currentName = useSelector(nameSelector);
  const dispatch = useDispatch();

  return (
    <div className="User">
      <Hello name={currentName} />
      <Select items={userNames} value={currentName} onValueChange={(name) => dispatch(userSetName(name))} />
    </div>
  );
}

export default User;
