import React, {Component} from 'react'
import moment from 'moment'
import store from 'store'
import TextField from 'material-ui/TextField'

const styles = {
  container: {
    width: 350,
    display: 'block',
    height: '100%',
    backgroundColor: '#f8f8f8',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: '#ececec'
  },
  headerLeft: {
    display: 'block',
    width: 'fit-content',
    paddingTop: 24,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 24,
    fontWeight: 300,
    color: '#878787',
    fontSize: 21
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    borderBottom: '1px solid #ececec',
    color: '#ababab',
    fontSize: 13,
    padding: '0 24px',
    marginTop: 32
  }
}
class DiariesList extends Component {
  state = {}
  renderItem = (v) => {
    console.log('v.date', v.date)
    const {activeId} = this.state
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',          
          flexGrow: 0,
          flexShrink: 0,
          height: 60,
          textAlign: 'left',
          overflow: 'hidden',
          color: '#878787',
          border: '3px solid #d9d9d9',
          padding: '12px 24px 15px 24px',
          borderType: 'solid ',
          borderColor: '#d9d9d9',
          borderWidth: activeId === v.id ? 3 : 0,
          borderBottomWidth: 1
        }}
        onClick={() => {
          console.log('id', v.id)
          window.rdEvent.emit('activeUpdate', v.id)
          this.setState({activeId: v.id})
        }}
      >
        <span
          style={{
            fontSize: 16,
            color: '#4a4a4a',
            fontWeight: 400,
            whiteSpace: 'nowrap',
            breakWord: 'break-word',
            lineHeight: '20px'
          }}
        >
          {v.title}
        </span>
        <span
          style={{
            display: 'block',
            fontSize: 11,
            letterSpacing: 1,
            marginBottom: 8
          }}
        >
          {moment(v.date).fromNow()}
        </span>
      </div>
    )
  }
  componentWillMount() {
    let diariesList = store.get('diariesList')
    console.log('diariesList', diariesList)
    if (!Array.isArray(diariesList)) {
      diariesList = []
    }
    this.setState({diariesList})
  }
  componentDidMount() {
    window.rdEvent.on('openEditor', () => {
      //this.setState({display: 'none'})
    })
    window.rdEvent.on('editUpdate', () => {
      const diariesList = store.get('diariesList')
      this.setState({diariesList})
    })
  }
  render() {
    const {diariesList} = this.state
    return (
      <div style={styles.container}>
        <TextField placeholder="search" style={styles.headerLeft}/>
        <div style={styles.headerRight}>
          <span>> update</span>
          <span>=</span>
        </div>
        <div style={{height: 836, overflowX: 'hidden', overflowY: 'auto', boxSizing: 'border-box'}}>
          {diariesList.map((v) => this.renderItem(v))}
        </div>
      </div>
    )
  }
}

export default DiariesList
