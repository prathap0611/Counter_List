import React from "react";
import Counter from "./counter";

function CounterList(props) {
  let list = props.counters.map(counter => {
    return (
      <Counter
        value={counter.value}
        increment={counter.increment}
        decrement={counter.decrement}
      />
    );
  });
  return <div>{list}</div>;
}

export default CounterList;
