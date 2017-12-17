import React, { Component } from 'react'

const styles = {
  container: {
    maxWidth: 960,
    minWidth: 240,
    height: 35,
    padding: '0 48px',
    margin: '0 auto 38px',
    borderBottom: '1px solid #ececec',
  },
  editorTool: {
    display: 'inline-block',
    height: 17,
    width: 13,
    margin: 5,
    overflow: 'hidden',
    background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAAnUlEQVR42u2VuxFAUBREJYpQA9mLSd9HDXpQAwXoQQ1q0IAaaEABvJ3ZULqBmXtmpM7s3h2KwjAMOSml5+v5rwj0Gbw8xrhL68uChUlm9Z0OijqZxHtfQZLbu51zpTLNwDSburaViUb1EE6KGuV9atZ2SdOgLopW9X02igaZBFPGpCHCxJW1tUxzqO8z8fu2qGe9QxRCSPb/MQxDwwve1W8goUO3vwAAAABJRU5ErkJggg==") -0px -0px  no-repeat',
    backgroundSize: '13px 17px'
  },
  textarea: {
    display: 'block',
    maxWidth: 960,
    minWidth: 240,
    padding: '0 48px',
    margin: '0 auto 38px',
    height: 668,
    border: '1px solid black'
  }
}

class SlateEditor extends Component {
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
        border: '1px solid black'
      }}
    >
      <div style={styles.container}>
        {this.editorTool.map((v, i) => this.renderEditoolTool(v, i))}
      </div>
      <p style={styles.textarea}>
      </p>
    </div>
  )
}}

export default SlateEditor;