import React, {Component} from 'react'
import SlateEditor from './editor'
import Dialog from 'material-ui/Dialog'
import {Modal} from 'material-ui'
import Slide from 'material-ui/transitions/Slide'
import {withStyles} from 'material-ui/styles'

const styles = {
  container: {},
  root: {
    left: '100px'
  },
  paper: {
    width: 720
  },
  paperWidthSm: {maxWidth: 720}
}
function Transition(props) {
  return <Slide direction="down" {...props} />
}
class Repo extends Component {
  state = {showModal: false}
  componentDidMount() {}
  render() {
    const {repoWidth = 0} = this.props
    console.log('repo repowidth', repoWidth)
    return (
      <div
        style={{
          transition: 'width 0.3s ease-in-out, margin 0.3s ease-in-out, opacity 0.2s ease-in-out',
          flexGrow: 0,
          flexShrink: 0,
          width: repoWidth,
          opacity: repoWidth === 0 ? 0 : 1,
          height: '100%',
          border: '1px solid gold'
        }}
      >
        <Dialog
          classes={{
            root: this.props.classes.root,
            paper: this.props.classes.paper,
            paperWidthSm: this.props.classes.paperWidthSm
          }}
          BackdropInvisible
          open={this.state.showModal}
          transition={Transition}
          //onRequestClose={() => this.setState({ showModal: false })}
        >
          <div style={{width: 720, height: 600}}>
            <h2>blame</h2>
            <ul style={{listStyleType: 'none', marginLeft: '-50px'}}>
              <li style={{width: 200, height: 20, border: '1px solid black', margin: 8}}>1</li>
              <li style={{width: 200, height: 20, border: '1px solid black', margin: 8}}>2</li>
              <li style={{width: 200, height: 20, border: '1px solid black', margin: 8}}>3</li>
              <li style={{width: 200, height: 20, border: '1px solid black', margin: 8}}>4</li>
              <li style={{width: 200, height: 20, border: '1px solid black', margin: 8}}>5</li>
              <li style={{width: 200, height: 20, border: '1px solid black', margin: 8}}>6</li>
            </ul>
          </div>
        </Dialog>
        <ul>
          <li
            onClick={() => {
              console.log('6666666666')
              let showModal = this.state.showModal
              showModal = showModal ? false : true
              this.setState({showModal})
            }}
            style={{border: '1px solid pink'}}
          >
            修改纪录 2017 11 11 标题
          </li>
        </ul>
      </div>
    )
  }
}

export default withStyles(styles)(Repo)
