import React, { Component } from 'react';
import SlateEditor from './editor';
import Repo from './repo';
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
        left: '-72px'
      })
    });
  }
  render() {
    const {width = '100%', left = 0} = this.state;
    console.log('editor', this.state.repoWidth);
    return (
      <div
        style={{
          marginLeft: 422,
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
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            onClick={() => {
              console.log('123456');
              const { repoWidth } = this.state;
              const rw = repoWidth === 240 ? 0 : 240;
              console.log('rw', rw);
              this.setState({repoWidth: rw})}
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
        <div
          style={{
            display: 'flex', width: '100%', height: '100%', border: '1px solid black',
            justifyContent: 'center'
          }}
        >
          <SlateEditor/>
          <Repo repoWidth={this.state.repoWidth || 240}/>
        </div>
      </div>
    );
  }
}

export default Diary;
