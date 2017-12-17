import React, { Component } from 'react';
import o1 from '../img/o1.png';
import o2 from '../img/o2.png';
import o3 from '../img/o3.png';
import o4 from '../img/o4.png';
import o5 from '../img/o5.png';
import o6 from '../img/o6.png';
import o7 from '../img/o7.png';

const styles = {
  container: {
    flexGrow: 0,
    flexShrink: 0,
    width: 43,
    height: '100%',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 24,
    paddingLeft: 17,
    borderRight: '1px solid #ececec',
    backgroundColor: '#f8f8f8',
  },
  menuStyle: {width: 42, height: 42},
  imgStyle: {width: 36, height: 36}
}

class Menu extends Component {
  state = {}
  addNewDiary = () => {
    window.rdEvent.emit('openEditor');
    //this.setState({display: 'none'})
  }
  topButtonMenu = [
    {event: this.addNewDiary, src: o1, style: styles.menuStyle, imgStyle: styles.imgStyle},
    {event: this.addNewDiary, src: o2, style: styles.menuStyle, imgStyle: styles.imgStyle},
    {event: this.addNewDiary, src: o3, style: styles.menuStyle, imgStyle: styles.imgStyle}
  ]
  bottomButtonMenu = [
    {event: this.addNewDiary, src: o4, style: styles.menuStyle, imgStyle: styles.imgStyle},
    {event: this.addNewDiary, src: o5, style: styles.menuStyle, imgStyle: styles.imgStyle},
    {event: this.addNewDiary, src: o6, style: styles.menuStyle, imgStyle: styles.imgStyle},
    {event: this.addNewDiary, src: o7, style: styles.menuStyle, imgStyle: styles.imgStyle},
  ]
  renderMenuChild = (option, index) => {
    return (
      <div
        key={index}
        onClick={option.event}
        style={option.style}
      >
        <div style={{height: 36, padding: '6px 0'}}>
          <img
            style={option.imgStyle}
            alt={option.alp || `img${index}`}
            src={option.src}
          />
        </div>
      </div>
    )
  }
  render() {
    return (
      <div style={styles.container}>
        <div  style={{height: 66}}>
         <div style={{width: 36, height: 36}}></div>
        </div>
        <div
          style={{
            height: 144,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          {this.topButtonMenu.map((v, i) => this.renderMenuChild(v, i))}
        </div>
        <div style={{marginTop: 48}}>
          {this.bottomButtonMenu.map((v, i) => this.renderMenuChild(v, i))}
        </div>
        <div  style={{marginTop: 300}}>
         <div style={{width: 36, height: 36}}></div>
        </div>
      </div>
    );
  }
}

export default Menu;
