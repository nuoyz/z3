import React, { Component } from 'react';
// import SlateRichTextEditor from './editor';
import {} from 'slate';
class Diary extends Component {
  state = {}
  componentDidMount() {
    console.log('llllllllllllllllllllllll');
    window.rdEvent.on('openEditor', () => {
      this.setState({width: '100%'})
    });
  }
  render() {
    return (
      <div
        style={{
          width: 900,
          height: '100%',
          border: '1px solid blackx``'
        }}
      >
       <div style={{display: 'flex', justifyContent: 'flex-end', height: 29, padding: '12px 0'}}>
         <div style={{display: 'flex', width: 210, justifyContent: 'space-between'}}>
           <button
             style={{
               backgroundColor: '#1090f7', color: 'white',
               border: '1px solid #1090f7', borderRadius: 3,
               lineHeight: '26px', padding: '0 18px', margin: '0, 10px'
              }}
          >升级</button>
           <button style={{
             backgroundColor: '#ffffff', color: '#606060',
             border: '1px solid #c4c4c4', borderRadius: 4,
             lineHeight: '26px', padding: '0 18px'
           }}>共享</button>
           <button style={{
             backgroundColor: '#2dbe60', color: '#ffffff',
             border: '1px solid #2dbe60', borderRadius: 4,
             lineHeight: '26px', padding: '0 18px'
           }}>完成</button>
         </div>
       </div>
        
      </div>
    );
  }
}

export default Diary;
// <SlateRichTextEditor/>
