import React, {Component} from 'react'
import SlateEditor from './editor'
//import Repo from './repo';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Menu, {MenuItem} from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import InfoOutline from 'material-ui-icons/InfoOutline'
import StarBorder from 'material-ui-icons/StarBorder'
import ZoomOutMap from 'material-ui-icons/ZoomOutMap'
import DeleteForever from 'material-ui-icons/DeleteForever'
import Save from 'material-ui-icons/Save' 
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog'
import { Modal } from 'antd';
import Drawer from 'material-ui/Drawer';
import Slide from 'material-ui/transitions/Slide'
import TextField from 'material-ui/TextField'
import localforage from 'localforage'
import {fromJS, Record} from 'immutable'
import initialValue from './editor/slateEditor/value.json'

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
]

const styles = theme => ({
  drawerStyle: {
    width: 600
  },
  modal: {
    width: 600
  }
})

const ITEM_HEIGHT = 48

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class Diary extends Component {
  state = {anchorEl: null}
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  toggleDrawer = (side, open) => () => {
    console.log('toggle toggle')
    this.setState({
      [side]: open,
    });
  };
  handleClickOpen = () => {
    this.setState({openRight: true})
  }
  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget})
  }

  handleClose = () => {
    this.setState({anchorEl: null})
  }

  handleClose = () => {
    this.setState({open: false})
  }
  getDiaryProp = () => {
  }
  getDiaryPropById = (id) => {
    localforage.getItem('diaries', (err, value) => {
      if (err) {
        console.log(err)
      }
      const diaryColl = value || [
        {id: '100001', diary: initialValue}
      ]
    })
  }
  componentDidMount() {
    window.rdEvent.on('openDiary', (id) => {
      localforage.getItem('diary', (err, value) => {
        const initialValue = require('./editor/slateEditor/value.json')
        console.log('initialValues', initialValue);
        const diaryCol = value || [{id: '100001', title: 'welcome', diary: initialValue}];
        const index = diaryCol.findIndex((v) => v.id === id)
        console.log('diaryCol', diaryCol, index)        
        this.setState({activeId: id, diary: diaryCol[index]})
      })
    })
    window.rdEvent.on('openEditor', () => {
      console.log('render render render')
      this.setState({
        width: '100%',
        left: '-72px',
        marginLeft: 0
      })
    })
    window.rdEvent.on('activeDiary', () => {

    })
  }
  render() {
    const {marginLeft = 422, diary} = this.state
    console.log('diaryssss', diary)
    const open = Boolean(this.state.anchorEl)
    return (
      <div
        style={{
          marginLeft,
          flexGrow: 0,
          flexShrink: 1,
          //height: '100%',
          position: 'absolute',
          transition: 'width 0.3s ease-in-out, margin 0.3s ease-in-out, left 1s ease-in-out',
          right: 0,
          left: 140,
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <IconButton
              onClick={this.handleClickOpen}
            >
              <InfoOutline style={{marginLeft: 0}}/>
            </IconButton>
            <StarBorder style={{marginLeft: 10}}/>
            <Menu
              getContentAnchorEl={null}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              id="long-menu"
              anchorEl={this.state.anchorEl}
              open={open}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div style={{marginTop: 10}}>
            <IconButton
              onClick={
                () => {
                  console.log('clickclickclick')
                  this.setState({commitModal: true}) 
                }
              }
            >
              <Save/>
            </IconButton>
            <DeleteForever style={{marginRight: 10}}/>
            <ZoomOutMap style={{marginRight: 10}}/>
            <Button
              onClick={() => {
                const {marginLeft} = this.state
                const ml = marginLeft === 422 ? 0 : 422
                this.setState({marginLeft: ml})
              }}
              raised
              color="accent"
              style={{marginRight: 10, display: 'none'}}
            >
              open
            </Button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center'
          }}
        >
          <SlateEditor
            activeId={this.state.activeId}
            diary={diary}
            onChange={(v) => {
              // const diariesList = localStorage.getItem(diariesList)
              // diariesList.push(v)
              // localStorage.setItem(diariesList)
              // window.rdEvent.emit('editUpdate')
            }}
          />
        </div>
        <Dialog
          open={this.state.commitModal}
          transition={Transition}
          keepMounted
          onClose={()=> {
            this.setState({commitModal: false})
          }}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"填写提交信息"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <TextField
                InputLabelProps={{
                  shrink: true
                }}
                placeholder="commit msg"
                margin="normal"
                onChange={(e) => {
                  const value = e.target.value
                  this.setState({commitMsg: value})
                }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                const {diary, commitMsg} = this.state
                console.log('change', diary)
                const commitList = diary.commitList || []
                const id = Math.random()
                  .toString(36)
                  .substr(2)
                commitList.push({id,message: commitMsg})
                diary.commitList = commitList
                this.setState({commitModal: false, commitMsg: ''})
              }}
              color="primary"
            >
              保存
            </Button>
            <Button
              onClick={() => this.setState({commitModal: false})}
              color="primary"
            >
              取消
            </Button>
          </DialogActions>
        </Dialog>
        <Drawer
          classes={{
            modal: styles.modal
          }}
          anchor="right"
          open={this.state.openRight}
          onClose={this.toggleDrawer('right', false)}
        >
          <div>
            open from left
          </div>
          <ul>
            {diary&&diary.commitList && diary.commitList.map((v, i)=>{
              return <li key={i}>{v.message}</li>
            })}
          </ul>
        </Drawer>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(Diary)
/*
{id: [{hashId: '', message: 'commit msg', ''}, {hashId}]
*/