import React from "react";
import { connect } from "react-redux";
import { decrease, increase, reset, modalOpen } from "./actions";

function Counter({ name, count, increase, decrease, reset, modalOpen }) {
  return (
    <div className="container">
      <h1>counter</h1>
      <h2>{name}</h2>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={decrease}>
          decrease
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            reset();
            modalOpen(
              "jessica",
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci officiis odit eum magnam dolorum nemo quas fugit dolor? Autem."
            );
          }}
        >
          reset
        </button>
        <button type="button" className="btn" onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  increase,
  reset,
  decrease,
  modalOpen,
};
function mapStateToProps({ countState: { count, name } }) {
  return {
    count: count,
    name: name,
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//     reset: () => {
//       dispatch(reset());
//       dispatch(
//         modalOpen(
//           "jessica",
//           " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci officiis odit eum magnam dolorum nemo quas fugit dolor? Autem."
//         )
//       );
//     },
//   };
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
