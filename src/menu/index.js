import React, {Component} from 'react'
import store from 'store'
import moment from 'moment'
import EventNoteIcon from 'material-ui-icons/EventNote'
import StarBorderIcon from 'material-ui-icons/StarBorder'
import DeleteIcon from 'material-ui-icons/Delete'
import Folder from 'material-ui-icons/Folder'
import FolderOpen from 'material-ui-icons/FolderOpen'
import Add from 'material-ui-icons/Add'
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'
import localforage from 'localforage'

const styles = {
  container: {
    flexGrow: 0,
    flexShrink: 0,
    width: 210,
    color: '#969696',
    height: '100%',
    paddingTop: 12,
    paddingBottom: 24,
    borderRight: '1px solid #ecececf',
    backgroundColor: '#09040B' //#f8f8f8
  },  
  menuStyle: {width: 174, height: 42, paddingLeft: 18, paddingRight: 18, cursor: 'pointer'},
  collapseChildStyle: {width: 154, height: 40, paddingLeft: 28, paddingRight: 18, cursor: 'pointer'},
  list: {width: '100%', height: 144, marginTop: 66, display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between', alignItems: 'center'}
}

class Menu extends Component {
  state = {folderOpen: false}
  addNewFolder = () => {
    this.setState({op: true})
  }
  addNewDiary = () => {
    window.rdEvent.emit('openEditor')
    let diariesList = store.get('diariesList')
    if (!Array.isArray(diariesList)) {
      diariesList = []
    }
    const id = Math.random()
      .toString(36)
      .substr(2)
    const date = moment().unix()
    diariesList.unshift({id, active: true, date})
    store.set('diariesList', diariesList)
    window.rdEvent.emit('activeUpdate', id)
  }
  topButtonMenu = [
    {style: styles.menuStyle, text: 'All notes', icon: <EventNoteIcon/>, key: 'allNotes'},
    {style: styles.menuStyle, text: 'Starred', icon: <StarBorderIcon/>, key: 'starred'},
    {style: styles.menuStyle, text: 'Trash', icon: <DeleteIcon/>, key: 'trash'}
  ]
  renderMenuChild = (option, index) => {
    return (
      <div key={index} onClick={option.event || null} style={option.style}>
        {option.icon}
        <div style={{display: 'inline-block', 'verticalAlign': 'top', height: 36, marginLeft: 20}}>
          {option.text}
        </div>
        <span style={{display: 'inline-block', float: 'right'}}>
          {option.count || null}
        </span>
      </div>
    )
  }
  folderComponent = (props) => {
    console.log(props.folderOpen)
    return (
      <div
        onClick={props.onClick || null}
        style={styles.menuStyle}
      >
        {props.folderOpen ? <KeyboardArrowDown/> : <KeyboardArrowRight/>}
        <div style={{display: 'inline-block', 'verticalAlign': 'top', height: 36, marginLeft: 20}}>
          My Storage
        </div>
        <span
          onClick={()=>{
            this.setState({})
          }}
          style={{display: 'inline-block', float: 'right'}}
        >
          <Add/>
        </span>
        <div>
          {(props.children || []).map((v) => this.renderMenuChild(v))}
        </div>
      </div>
    )
  }
  Collapse = (props) => {
    console.log('props.open', props.open);
    return (
      <div style={{display: props.open ? 'block' : 'none'}}>
        {(props.data || []).map((value, index) => {
          return (
            <div
              key={`{value.id}-${index}`}
              style={styles.collapseChildStyle}
              onClick={()=>{
                console.log()
                window.rdEvent.emit('openDiaryFolderById', value.id)
              }}
            >
              <Folder/>
              <div style={{display: 'inline-block', 'verticalAlign': 'top', height: 36, marginLeft: 20}}>
                {value.key}
              </div>
              <span style={{display: 'inline-block', float: 'right'}}>
                {value.count}
              </span>
            </div>
          )
        })}
      </div>
    )
  }
  componentWillMount() {
    localforage.getItem('diaryTotal', (err, value) => {
      // if err is non-null, we got an error. otherwise, value is the value
      console.log('err', err)
      const diaryTotal = value || {allNotes: 1, starred: 0, trash: 0, myStorage: [{id: '000001', key: 'default', count: 1}]}
      this.setState({diaryTotal});
    });
  }
  render() {
    const {diaryTotal} = this.state;
    if (!diaryTotal) {
      return <span>loading</span>
    }
    let topButtonMenu = this.topButtonMenu.map((v) => {
      console.log('v.key', v.key, diaryTotal)
      v.count = diaryTotal[v.key]
      return v
    })
    return (
      <div style={styles.container}>
        <div style={styles.list}>
          {this.topButtonMenu.map((v, i) => this.renderMenuChild(v, i))}
          <div style={{marginTop: 48}}>
            <this.folderComponent
              onClick={() => {
                const {folderOpen} = this.state          
                this.setState({folderOpen: !folderOpen})
              }}
              folderOpen={this.state.folderOpen}
            />
          </div>
          <this.Collapse open={this.state.folderOpen} data={diaryTotal.myStorage} />
        </div>
      </div>
    )
  }
}

export default Menu
/*
const mockDiary = {
  allNotes: total,
  starred: total,
  trash: total,
  myStorage: [
    {allNotes: 1, starred: 0, trash: 0, myStorage: [{id: '000001', key: 'default', count: 1}]}
  ]
}
*/