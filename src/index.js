import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/index";
import CounterList from "./components/counterList";

var store = createStore(reducer);

class App extends React.Component {
  getCounterArr() {
    let counterArr = store.getState();
    let counters = counterArr.map((obj, index) => {
      return {
        ...obj,
        increment: store.dispatch.bind(store, {
          type: "INCREMENT",
          index: index
        }),
        decrement: store.dispatch.bind(store, {
          type: "DECREMENT",
          index: index
        })
      };
    });
    return counters;
  }
  state = { counters: this.getCounterArr() };
  listener;

  componentDidMount() {
    // store.dispatch.bind(store);
    this.listener = store
      .subscribe(() => {
        this.setState({ counters: this.getCounterArr() });
      })
      .bind(this);
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <div>
        <button onClick={store.dispatch.bind(store, { type: "ADD_COUNTER" })}>
          Add Counter
        </button>
        <button
          onClick={store.dispatch.bind(store, {
            type: "REMOVE_COUNTER",
            index: 0
          })}
        >
          Remove Counter
        </button>
        <CounterList counters={this.state.counters} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
