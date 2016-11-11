import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import ReactDOM from 'react-dom';
import Board from './Board'

const chessInitialBoard = () =>
  [
    [ '♖', '♙', '', '', '', '', '♟', '♜' ],
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
      console.log(action)
      return state
    default:
      return state
  }
}

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Board 
        cellSize="50"
        board={ this.props.board }
        onClick={ (...args) => this.props.dispatch({
          type: 'CLICKED',
          payload: {...args}
        })}
      />
    )
  }
}

const Root = connect(store => store)(App)
