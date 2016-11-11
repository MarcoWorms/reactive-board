import React, { Component } from 'react'

class Board extends Component {
    constructor(props) {
      super(props)
      this.boardStyle = this.boardStyle.bind(this)
      this.cellStyle = this.cellStyle.bind(this)
    }

    handleClick({ col, row, cellName, cellValue }) {
    }

    boardStyle({ board, cellSize }) {
      return {
        width: cellSize * board.length + 'px',
        height: cellSize * board[0].length + 'px',
        backgroundColor: 'green',
        border: 'solid 4px black'
      }
    }

    cellStyle({ cellSize }) {
      return {
        boxSizing: 'border-box',
        float: 'left',
        width: cellSize + 'px',
        height: cellSize + 'px',
        fontSize: cellSize + 'px',
        lineHeight: '100%',
        border: 'solid 1px white'
      }
    }

    render() {
      const { board } = this.props
      return (
        <div style={ this.boardStyle(this.props) }>
          {board.map((row, y) =>
            row.map((value, x) =>
              <div
                style={ this.cellStyle(this.props) }
                onClick={ this.props.onClick.bind(null, x, y, value) }
                key={ '' + x + y }
              >
                {value}
              </div>
          ))}
        </div>
      )
    }
}

export default Board
