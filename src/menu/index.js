import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 64,
          height: '100%',
          backgroundColor: '#f8f8f8',
          paddingTop: 12,
          paddingRight: 12,
          paddingBottom: 24,
          paddingLeft: 17,
          borderRight: '1px solid #ececec'
        }}
      >
        <div  style={{height: 66}}>
         <div style={{width: 36, height: 36}}></div>
        </div>
        <div>
          <div
            style={{width: 42, height: 42}}
          >
            <img
              alt="o1"
              src="../img/o1.png"
            />
          </div>
          <div  style={{height: 42, paddingTop: 6}}>
            <div style={{width: 42, height: 42}}>
              <img
                alt="o2"
                src="../img/o2.png"/>
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 6}}>
            <div style={{width: 42, height: 42}}>
              <img
                alt="o3"
                src="../img/o3.png"
              />
            </div>
          </div>
        </div>
        <div style={{marginTop: 48}}>
          <div  style={{height: 42}}>
            <div style={{width: 42, height: 42}}>
              <img
                alt="o4"
                src="../img/o4.png"
              />
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 10}}>
            <div style={{width: 42, height: 42}}>
              <img
                alt="o5"
                src="../img/o5.png"
              />
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 10}}>
            <div style={{width: 42, height: 42}}>
              <img
                alt="o6"
                src="../img/o6.png"
              />
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 10}}>
            <div style={{width: 42, height: 42}}>
              <img
                alt="o7"
                src="../img/o7.png"
              />
            </div>
          </div>
        </div>
        <div  style={{marginTop: 300}}>
         <div style={{width: 36, height: 36}}></div>
        </div>
      </div>
    );
  }
}

export default Menu;
