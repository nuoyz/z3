import React, { Component } from 'react';
import store from 'store';
import localforage from 'localforage';
import RichTextExample from './slateEditor/slateEditor';
import { localeData } from 'moment';

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
  onChangeTitleEvent = (title) => {
    const id = this.props.activeId;
    localforage.getItem('diary', (err, value) => {
      const diary = value || [{id: '100001', title: 'welcome', diary: ''}];
      const index = value.findIndex((v) => v.id === id)
      if (!~index) {
        const id = Math.random()
          .toString(36)
          .substr(2)
        diary.unshift({id, title: title, diary: ''})
      } else {
        diary[index].title = title;
      }
      console.log('diary', diary)
      localforage.setItem('diary', diary) 
    })
  }
  onChangeEditorEvent = (slateValue) => {
    const id = this.props.activeId;
    localforage.getItem('diary', (err, value) => {
      const diary = value || [{id: '100001', title: 'welcome', diary: ''}];
      const index = diary.findIndex((v) => v.id === id)
      console.log('vvvvvvvv, v', diary, slateValue, index, id);      
      if (!~index) {
        const id = Math.random()
          .toString(36)
          .substr(2)
        diary.unshift({id, title: '', diary: slateValue})
      } else {
        diary[index].diary = slateValue;
      }
      localforage.setItem('diary', diary)      
    })
  }
  componentWillMount() {
  }
  componentDidMount() {
    window.rdEvent.on('diary', () => {
    
    })
  }
  render(){
    const {diary} = this.props;
    console.log('diary', diary)
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
        {diary &&
          <RichTextExample
            slateValue={diary.diary}
            titleValue={diary.title}
            onChangeTitleEvent={this.onChangeTitleEvent}
            onChangeEditorEvent={this.onChangeEditorEvent}
          />
        }
        </div>
      </div>
    )
}}

export default SlateEditor;
/*
mockdata
 [{
   id, title, diary
 }]

*/