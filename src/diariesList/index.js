import React, { Component } from 'react';
import {fromJS} from 'immutable';
import moment from 'moment';
import store from 'store';
import initialValue from '../diary/editor/slateEditor/value.json';
class DiariesList extends Component {
  state = {}
  renderItem = (v) => {
    console.log('v.date', v.date);
    const {activeId} = this.state;
    return (
      <div
        style={{
          flexGrow: 0,
          flexShrink: 0,
          width: 335,
          height: 120,
          textAlign: 'left',
          overflow: 'hidden',
          color: '#878787',
          border: '3px solid #d9d9d9',
          borderWidth: v === 3 ? 3 : 0,
          padding: '12px 24px 15px 24px',
          background: '#ffffff',
          borderType: 'solid ',
          borderColor: '#d9d9d9',
          borderWidth: activeId === v.id ? 3 : 0,
          borderBottomWidth: 1 //3px solid #d9d9d9
        }}
        onClick={
          () => {
            console.log('id', v.id);
            window.rdEvent.emit('activeUpdate', v.id);
            this.setState({activeId: v.id})
          }
        }
      >
        <div
          style={{height: 104, overflow: 'hidden'}}
        >
          <span
            style={{
              fontSize: 16,
              color: '#4a4a4a',
              fontWeight: 400,
              whiteSpace: 'nowrap',
              breakWord: 'break-word',
              lineHeight: '20px',
            }}
          >{v.title}</span>
          <span
            style={{
              display: 'block',
              fontSize: 11, letterSpacing: 1, marginBottom: 8
              }}
          >{moment(v.date).fromNow()}</span>
       </div>
       </div>
      )
  };
  componentWillMount() {
    let diariesList = store.get('diariesList');
    console.log('diariesList', diariesList);
    if (Array.isArray(diariesList)) {
      diariesList = diariesList;
    } else {
      diariesList = [];
    }
    this.setState({diariesList});
  }
  componentDidMount() {
    window.rdEvent.on('openEditor', () => {
      //this.setState({display: 'none'})
    });
    window.rdEvent.on('editUpdate', () => {
      const diariesList = store.get('diariesList');
      this.setState({diariesList});
    });
  }
  render() {
    const {display = 'block', diariesList} = this.state;
    console.log('display', display);
    return (
      <div
        style={{
          width: 350,
          display,
          height: '100%',
          borderRightWidth: 1,
          borderRightStyle: 'solid',
          borderRightColor: '#ececec'
        }}
      >
        <span
          style={{
            display: 'block',
            width: 'fit-content',
            paddingTop: 24,
            paddingRight: 20,
            paddingBottom: 0,
            paddingLeft: 24,
            fontWeight: 300,
            color: '#878787', fontSize: 21
          }}
        >
          笔记
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
            borderBottom: '1px solid #ececec',
            color: '#ababab',
            fontSize: 13,
            padding: '0 24px',
            marginTop: 32
          }}
          >
          <span>851条笔记</span><span>选项</span>
        </div>
        <div style={{height: 849, overflowX: 'hidden', overflowY: 'scroll', boxSizing: 'border-box'}}>
          {diariesList.map((v) => this.renderItem(v))}
        </div>
      </div>
    );
  }
}

export default DiariesList;
