import React, { Component } from 'react';
import SlateEditor from './editor';
//import Repo from './repo';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import store from 'store';

const styles = {
  container: {}
}

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
  'Umbriel',
];

const ITEM_HEIGHT = 48;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Diary extends Component {
  state = { anchorEl: null}
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    window.rdEvent.on('openEditor', () => {
      console.log('render render render');
      this.setState({
        width: '100%',
        left: '-72px',
        marginLeft: 0
      })
    });
    window.rdEvent.on('activeUpdate', (id) => {
      console.log('activeUpdate');
      const diariesList = store.get('diariesList');
      const targetIndex = diariesList.findIndex((v) => {
        return v.id === id
      });
      const targetDiary = diariesList[targetIndex];
      console.log('targetDiary', targetDiary);
      this.setState({slateValue: targetDiary.value, titleValue: targetDiary.title})
    });
  }
  render() {
    const {width = '100%', left = 0, marginLeft = 422} = this.state;
    console.log('editor', this.state.repoWidth);
    const open = Boolean(this.state.anchorEl);
    console.log('this.state.anchorEl', this.state.titleValue);

    return (
      <div
        style={{
          marginLeft,
          flexGrow: 0,
          flexShrink: 1,
          //width: '100%',
          height: '100%',
          border: '1px solid red',
          position: 'absolute',
          transition: 'width 0.3s ease-in-out, margin 0.3s ease-in-out, left 1s ease-in-out',
          //width: '100%',
          right: 0,       
          left: 0,
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Button
              onClick={this.handleClickOpen}
              raised
              color="accent"
              style={{marginRight: 10}}
            >
              详情
            </Button>
            <Button raised color="primary">
              配置
            </Button>
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
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
                width: 200,
              },
            }}
          >
            {options.map(option => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          </div>
          <div>
            <Button
              onClick={() => {
                console.log('123456');
                const { marginLeft } = this.state;
                const ml = marginLeft === 422 ? 0 : 422;
                console.log('rw', ml);
                this.setState({marginLeft: ml})}
              }
              raised
              color="accent"
              style={{marginRight: 10}}
              >
              open
            </Button>
            <Button raised color="primary">
              repo
            </Button>
          </div>
        </div>
        <div
          style={{
            display: 'flex', width: '100%', height: '100%', border: '1px solid black',
            justifyContent: 'center'
          }}
        >
          <SlateEditor
            slateValue={this.state.slateValue}
            titleValue={this.state.titleValue}
            onChange={
              (v) => {
                const diariesList = localStorage.getItem(diariesList);
                diariesList.push(v)
                localStorage.setItem(diariesList);
                window.rdEvent.emit('editUpdate');
              }
            }
          />
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous location data
              to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Diary;
