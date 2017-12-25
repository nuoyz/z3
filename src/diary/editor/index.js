import React, { Component } from 'react';
import store from 'store';
import RichTextExample from './slateEditor/slateEditor';

const styles = {
  container: {
    padding: '0 48px',
    margin: '0 auto 38px',
    borderBottom: '1px solid #ececec',
    //border: '1px solid black'
  },
  textarea: {
    display: 'block',
    maxWidth: 960,
    minWidth: 240,
    padding: '0 48px',
    margin: '0 auto 38px',
    height: 668,
  }
}

class SlateEditor extends Component {
  state={}
  editorTool = [
    {style: styles.editorTool},
    {style: styles.editorTool},
    {style: styles.editorTool},
    {style: styles.editorTool},
    {style: styles.editorTool},
  ]
  renderEditoolTool = (option, index) => {
    return (
      <div key={index} style={option.style}>
      </div>
    );
  }
  render(){
  return (
    <div
      style={{
        flexGrow: 1,
        flexShrink: 1,
        maxWidth: 960,
        minWidth: 240,
        width: 720,
        transition: 'width 0.3s ease-in-out, margin 0.3s ease-in-out, left 1s ease-in-out',
      }}
    >
      <div style={styles.textarea}>
        <RichTextExample
          slateValue={this.props.slateValue}
          titleValue={this.props.titleValue}
          onChange={(v)=> {
            //获取 id
            const {activeId} = this.props;
            const slateValue = v;
            const diariesList = store.get('diariesList');
            console.log('diariesList', diariesList);
            const index = diariesList.findIndex((v) => v.id == activeId);
            diariesList[index].value = slateValue;
            store.set('diariesList', diariesList);
        }}
      />
      </div>
    </div>
  )
}}

export default SlateEditor;