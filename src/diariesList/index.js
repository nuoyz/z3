import React, { Component } from 'react';

class DiariesList extends Component {
  state = {}
  renderItem = (v) => {
    return (
      <div
        style={{
          width: 335,
          height: 120,
          textAlign: 'left',
          overflow: 'hidden',
          color: '#878787',
          border: '3px solid #d9d9d9',
          borderWidth: v === 3 ? 3 : 0,
          padding: '12px 24px 15px 24px'
        }}
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
          >2017 12 13</span>
          <span
            style={{
              display: 'block',
              fontSize: 11, letterSpacing: 1, marginBottom: 8
              }}
          >2小时前</span>
          <p
            style={{
              fontSize: 12,
              lineHeight: '17px',
              wordWrap: 'break-all',
              width: 287
            }}
          >what is rxjs an api for async with observable streams  think of rxjs as lodash for event /async rxjs Observable本质是订阅发布模式 核心是数据响应式，源头是数据产生者Observable 通过一系列操作比如map filter等operators(操作符) 被数据消费者响应(subscri...</p>
         </div>
       </div>
      )
  };
  componentDidMount() {
    console.log('ddddddddddddddddd');
    console.log('window.rdEvents', window.rdEvent);
    window.rdEvent.on('openEditor', () => {
      console.log('render render render');
      this.setState({display: 'none'})
    });
  }
  render() {
    const {display = 'block'} = this.state;
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
          {([1,2,3,4,5,6]).map((v) => this.renderItem(v))}
        </div>
      </div>
    );
  }
}

export default DiariesList;
