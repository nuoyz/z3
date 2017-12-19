import React, { Component } from 'react';
import SlateEditor from './editor';
//import Repo from './repo';
import Button from 'material-ui/Button';

const styles = {
  container: {}
}

class Diary extends Component {
  state = {}
  componentDidMount() {
    window.rdEvent.on('openEditor', () => {
      console.log('render render render');
      this.setState({
        width: '100%',
        left: '-72px',
        marginLeft: 0
      })
    });
  }
  render() {
    const {width = '100%', left = 0, marginLeft = 422} = this.state;
    console.log('editor', this.state.repoWidth);
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
              详情
            </Button>
            <Button raised color="primary">
              配置
            </Button>
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
      </div>
    );
  }
}

export default Diary;
