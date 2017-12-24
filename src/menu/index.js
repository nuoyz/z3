import React, {Component} from 'react'
import store from 'store'
import moment from 'moment'
import EventNoteIcon from 'material-ui-icons/EventNote'
import StarBorderIcon from 'material-ui-icons/StarBorder'
import DeleteIcon from 'material-ui-icons/Delete'
import Folder from 'material-ui-icons/Folder'
import FolderOpen from 'material-ui-icons/FolderOpen'

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
  list: {width: '100%', height: 144, marginTop: 66, display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between', alignItems: 'center'}
}

class Menu extends Component {
  state = {}
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
    {style: styles.menuStyle, text: 'All notes', icon: <EventNoteIcon/>, label: 1},
    {style: styles.menuStyle, text: 'Starred', icon: <StarBorderIcon/>, label: 1},
    {style: styles.menuStyle, text: 'Trash', icon: <DeleteIcon/>, label: 1}
  ]
  bottomButtonMenu = [
    {event: this.addNewDiary, style: styles.menuStyle, text: 'My Storage', icon: <Folder/>, operator: '+'}
  ]
  renderMenuChild = (option, index) => {
    return (
      <div key={index} onClick={option.event || (() => {})} style={option.style}>
        {option.icon}
        <div style={{display: 'inline-block', 'verticalAlign': 'top', height: 36, marginLeft: 20}}>
          {option.text}
        </div>
        <span style={{display: 'inline-block', float: 'right'}}>
          {option.label || option.operator}
        </span>
      </div>
    )
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.list}>
          {this.topButtonMenu.map((v, i) => this.renderMenuChild(v, i))}
          <div style={{marginTop: 48}}>
            {this.bottomButtonMenu.map((v, i) => this.renderMenuChild(v, i))}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
