import React, { Component } from 'react';

class DiariesList extends Component {
  renderItem = () => {
    
  }
  render() {
    return (
      <div
        style={{
          width: 300,
          height: '100%',
          borderRightWidth: 1,
          borderRightStyle: 'solid',
          borderRightColor: '#ececec'
        }}
      >
        <h3 style={{paddingLeft: 10,}}>笔记</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            borderBottom: '1px solid #ececec'
          }}
          >
          <span>851条笔记</span><span>选项</span>
        </div>
        <div style={{height: 849, overflowX: 'hidden', overflowY: 'scroll', boxSizing: 'border-box'}}>
           <div style={{height: 120, border: '1px solid #ececec', margin: '10px 0'}}>
           </div>
           <div style={{height: 120, border: '1px solid #ececec', margin: '10px 0'}}>
           </div>
           <div style={{height: 120, border: '1px solid #ececec', margin: '10px 0'}}>
           </div>
        </div>
      </div>
    );
  }
}

export default DiariesList;
