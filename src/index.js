import React from 'react';
import ReactRendererObjects from './renderer-objects';
import ReactDOM from 'react-dom';
import ReactRendererDOM from './renderer-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showText: true
    };
  }

  render() {
    const { counter, showText } = this.state;

    return (
      <div className="wrapper">
        {showText ?
          (
            <h1 className="description" onClick={() => {
              this.setState({ counter: counter + 1 })
            }}>
              Hello {counter}
            </h1>
          )
        : null}
        <button className="btn" onClick={() => {
          this.setState({ showText: !showText });
        }}>
          {showText ? 'Click to hide text' : 'Click to show text'}
        </button>
      </div>
    );
  }
}

// ==================
// render elements into browser DOM
// ReactDOM.render(<App />, document.getElementById('root'));

// ==================
// render elements into plain JS objects
// window.main = {
//   children: []
// };
//
// ReactRendererObjects.render(<App />, window.main);
//
// window.log = () => {
//   console.log(JSON.stringify(window.main, null, 2));
// }
//
// setTimeout(() => window.log(), 500);

// ==================
// render elements into browser DOM (minimal implementation)
// ReactRendererDOM.render(<App />, document.getElementById('root'));
