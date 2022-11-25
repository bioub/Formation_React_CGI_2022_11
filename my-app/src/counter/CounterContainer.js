import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { countSelector, stepSelector } from "../store/selectors";
import { counterIncrement, counterSetStep } from "../store/actions";

function CounterContainer() {
  const countFromStore = useSelector(countSelector);
  const stepFromStore = useSelector(stepSelector);
  const dispatch = useDispatch();

  return (
    <div className="CounterContainer">
      <Counter
        count={countFromStore}
        step={stepFromStore}
        onIncrement={() => dispatch(counterIncrement())}
        onStepChange={(step) => dispatch(counterSetStep(step))}
      />
    </div>
  );
}

// connect avant les Hooks (avant React 16.8)
// function mapStateToProps(state) {
//   return {
//     count: countSelector(state),
//     step: stepSelector(state),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement() {
//       dispatch(counterIncrement());
//     },
//     onStepChange(step) {
//       dispatch(counterSetStep(step));
//     },
//   };
// }

// const hoc = connect(mapStateToProps, mapDispatchToProps);
// const CounterContainer = hoc(Counter);

export default CounterContainer;
