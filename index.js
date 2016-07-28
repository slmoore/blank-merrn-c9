import React from 'react'
import ReactDOM from 'react-dom'

//hot module replacement requires root component to extend React.Component:
//https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
class App extends React.Component {
  render() {
    return (<div>It's alive!</div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)

