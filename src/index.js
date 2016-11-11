import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import Board from './Board'

class App extends Component {
  render() {
    return (
      <Board 
        cellSize="50"
        board={ this.props.board } 
        onClick={ (x, y, val) => this.props.dispatch({
          type: 'CLICKED',
          payload: {x, y, val}
        })}
      />
    )
  }
}

const chessInitialBoard = () =>
  [
    [ '♙', '♙', '', '', '', '', '♟', '♜' ],
    [ '♘', '♙', '', '', '', '', '♟', '♞' ],
    [ '♗', '♙', '', '', '', '', '♟', '♝' ],
    [ '♕', '♙', '', '', '', '', '♟', '♛' ],
    [ '♔', '♙', '', '', '', '', '♟', '♚' ],
    [ '♗', '♙', '', '', '', '', '♟', '♝' ],
    [ '♘', '♙', '', '', '', '', '♟', '♞' ],
    [ '♖', '♙', '', '', '', '', '♟', '♜' ]
  ]

const reducers = (state = { board: chessInitialBoard() }, action) => {
  switch (action.type) {
    case 'CLICKED':
      console.log(action.payload)
      return state
    default:
      return state
  }
}

const store = createStore(reducers)

const Root = connect(store => store)(App)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

