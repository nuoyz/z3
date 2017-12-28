import React, {Component} from 'react'
import moment from 'moment'
import TextField from 'material-ui/TextField'
import NoteAdd from 'material-ui-icons/NoteAdd'
import localforage from 'localforage'

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
    display: 'inline-block',
    width: 240,
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
  },
  itemStyle: {
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
    borderBottomWidth: 1
  }
}
class DiariesList extends Component {
  state = {}
  renderItem = (v) => {
    const {activeId} = this.state
    const borderWidth = activeId === v.id ? 3 : 0
    return (
      <div
        style={{borderWidth, ...styles.itemStyle}}
        onClick={() => {
          console.log('id', v.id)
          window.rdEvent.emit('openDiary', v.id)
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
  }
  componentDidMount() {
    window.rdEvent.on('openDiaryFolderById', (id) => {
      const allDiaries = localforage.getItem('allDiaries', (err, value) => {
        if (err) {
          console.log(err)
        }
        const allDiaries = value || [
          {id: '000001', diaries: [{id: '100001', title: 'welcome', date: moment().unix()}]}
        ]
        const index = allDiaries.findIndex((v) => {
          return v.id === id
        })
        this.setState({idDiaries: allDiaries[index].diaries})
      })
    })
    window.rdEvent.on('openEditor', () => {
      //this.setState({display: 'none'})
    })
  }
  render() {
    const {diariesList, idDiaries} = this.state
    return (
      <div style={styles.container}>
        <TextField placeholder="search" style={styles.headerLeft}/>
        <NoteAdd/>
        <div style={styles.headerRight}>
          <span>> update</span>
          <span>=</span>
        </div>
        <div style={{height: 836, overflowX: 'hidden', overflowY: 'auto', boxSizing: 'border-box'}}>
          {idDiaries && idDiaries.map((v) => this.renderItem(v))}
        </div>
      </div>
    )
  }
}

export default DiariesList
/*
const mockAllDiaies = [
  {id: '000001', diaries: [id: '100001', title, date]},
]
*/