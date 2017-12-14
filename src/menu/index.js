import React, { Component } from 'react';

class Menu extends Component {
  state = {}
  addNewDiary = () => {
    window.rdEvent.emit('openEditor');
    this.setState({display: 'none'})
  }
  render() {
    const {width = 64, display = 'block'} = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          display,
          width,
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
              onClick={this.addNewDiary}
              style={{width: 42, height: 42}}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAClUlEQVR42s2Yz0sbQRTH9+bZv6HnIu2liDalQqNSz0ILVoOn4opi0IBovai5lxa8KL14Vbx41JjEH4i2ohHBSKS9KI34s1BqTKbzWboSG2N2N5Nk3zKw7M6892Vm3nvf9zTNpgzvTz17vRoYbFrtX/Qu+0/rwl2pp6HODIN3vvGPOczVSiEf4/NVresf/I0r/sOGaK8Y2ZsSc0dRsXOREGfXV+ImkzYG73zjH3OYyxrWokMJmI6Nsbcvot0/2zfHRSi5ZRi2KswNJb8J1nqkDnQ5BhLcnq5uWQvMN6/0i6WTLVGsoANd6Ax+n662BWZo58sjT1iPD8QmxK/Ub6FK0IVOdGPDMpj6iH70KTEjMvJRLehENzYKgmIrQc+CUsvE4Zy8V3r8wePjfNnSUuzMfTsVkLawmdebuHQq74yVO4VN39fgm5w4g2ur8CYn3kdIuBOnCFzECqfStjFqDKfSvjkmwHALiGhK0HMqjxc6jOF4l6Rt73Lfj9vcRIi3E4FVA8L2y2iPGN6brNVIguSdYqRYQAgYwKKRmUmGlQYEBrBo0IWYzNCVBgQGsGhwGGhDpQGdSwy14fc32hNJrKxcaNzaNGx3WAkJYKhZ9GXKAuidjDOF5DqdEmBxzZGd/rkUYHHfpXad27suMLoudSBeFyTXV2ZyVUU/rLh2fvoxfpd+QI48biJolaaweQtICHegnCR/9wGSn10GfU7MlqUMeh7RDwpWsRRvdRH9mAWlKhTRjY2huNXqVU4EPVuqupRGp1FKWwWTfXyuaTb8732ef+2YJQftGNYY7ZhId7Kodsx9DSuiKSHebFjFLhMG00tLw/AZKATfzIYVc1mjtGGV09KT+Sa7pQftrFnwGeQqp6Vn5iYb8heRUjaIguwUDAAAAABJRU5ErkJggg=="
              />
            </div>
          <div  style={{height: 42, paddingTop: 6}}>
            <div style={{width: 42, height: 42}}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC00lEQVR42s2Yu24TQRSGt6PmGahR6BAF8AIImhSECigQIKChQEQKErRcGl6AF6BCSoXiwkKEQOESKUGO15ddxzZ2YSwj7+5hviVYcYJ356y9iX9ptZc5c86/M+cyM46jRLvdPt9oNFbNVajVaj/NNXJdN+LimW+0IYOskwdE5JTneY/r9Xq5Wq2KMST9fl+Gw6EEQSBRFMUXz3yjDRlk6UNfdMyFjPnTG+av93zfl8FgEBu2BbL0oS860JWZSK/XO20UrJs/jJXOCnSgC53oVpFpNptnzHBvt1otCcNQ5gV0oRPd2NCQ8brdruQFdGMjlRRDCfs8yfyDsYVfbSdOH/PLkB4XsIXNqdGE083TZ2x8CpsmCleO5BnC0iaagiiQD94nuVt6LReLD+Rc4XZ8553vtGujD9sTeYrERa5Iw+4vT5a3nsnZjZty5fMTefH9nbz98T6+88532stGTgNsw2FMiGyaNjqQuVR8KJeLj+Tj3rcjCZJ3vtOOnIbUfo5yx7WJFJ+UgZkG/hxjlUHySNKO3PLWmowspw/bcOh0Ohec/SKY2AHfYDoYARsghzz9bAEHuECoQDFMAg6Lj9jWMeSQp58t4AAXh+UCFToJRBGOqwHy9LMFHOACoRHLhiQsmdAmmjRAfmnjlrU8HIwfBQ4Lq7SpOI4RggNcrAhl9aH7pTd6QjZTljXK1v1N1ZTBxcqpR3EeWlPloZWvzyWMQr1T24Q9KCsyNaNz7cuqtH/39GFvkxgPkmKkkmoZI3N186ma1Dgx2pSOw9P3t9q/iqOI0OZ+zzgwPsM0QQIytqQmSodtcdVCQ2qiuGqWH7OQum6m0nr5oVmgZSEFmTull/YLtJNewk7dQC7UIv8ktkHG1k7qLpbNm6kpPh3yJIMN7e51ZyG20gt52JDHcYwZldZMxzFTDqzcDAdW7lwPrA6DenPwSI9lZ6VSkf8d6Y1rkwJ/ABuA2U2cNqFnAAAAAElFTkSuQmCC"/>
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 6}}>
            <div style={{width: 42, height: 42}}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC+0lEQVR42s2YS2sTURTHs3PtZ3DtxlTUjdS94EZFuxKtxY11UQUp+FgqrlzUT+BO14KCptKCkqJZ2F0rkslzmqRJMcTYPI73FyZDHvO4M5mRHrhkyNzzP/+597zuTSQCSrVaPVMsFlfVSOXz+X01OoZh9Bk88x/vmMPcRBwiIsdKpdJKoVD4lcvlRBmSZrMp7XZbut2u9Pv9weCZ/3jHHOaigy4YkZBRX7qgvnqvXC5Lq9UaGNYV5qKDLhhghSbSaDSOK4B36gsHoLMKGGCBCXYgMqZpnlDLvVOpVKTX60lUAhaYYGMjCJlSvV6XuARsbPiSYilhHyeZoShb+NWO5/axvyzp/xJsYdM1mnA6J585OGzKyvaazK3flpOfbgQa6KALhpNPYVNF4fWpPENYukUTgEGJTA4w3KIP22N5isRFrnCT4coYLTPwtqCDblJhuAm24WATIpt65ZrhV4YVP30rRxl2bSLFe2XguAlhGw61Wu1cwiqCoQEfbL+Sq+knYrb3Z/ogOMAFQimKoR+hC5v3HN/dyjwfvL/45aErKR1CcIBLgnaBCu0l99UqNDvOPlY//C2X0488SekQggNcINShbfCsQZZ/pSoZufn9mZxeX3IN70tfV+35QQjBQflRN0FjpdNSvPz5RivfQKgfghA6cNEixMoAeCq1KK9zH6QxknXJwNe2ns68ZTYhnS1jmwCEzKQsRuTUcICLllPPWT7TcKhHOPyV9OOZw952at2wjzMxjoX9rIkxKkJ2YtQpHcmYi+tY6dAprm7tx/zmsnzc+2aDvi2sy/zGcqD2Y6q46rQfwwYt6dCgQar4pypLmReORJJWg+YUEK7th1+D5ucbZz/fGfye37gr78104OPRVIPm18L6ERpsyY81qf09CHwsss5qC5E0+WFXRavJD3MMCrMqo8cgZWvX9xTL4U3VlDIKcZ7JsBH09Lp7JI7SR/KyIY7rGLUqlZmuY1wurIwQF1ZGpBdWk0K9Gb3So+3MZrPidKVn16YA8g+bRU/QfM0VvAAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
        <div style={{marginTop: 48}}>
          <div  style={{height: 42}}>
            <div style={{width: 42, height: 42}}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABjklEQVR42mNgGAWjYBSMgmEA9PbH6ujtT9YZNA7S3RvXrrMvvm1wuOY/A6POvoQHuvsS7oPYA+4erf2xNkDH/Adh7X3x1gPuIJ298dNhDtLdFz9lQB1jfCaNFZh23iAclPCKYb8Dy8CFzv44HyTHQPDeOE+aWqq9Py5Fd3/CcWDCPQ/EV4Ehchto8UMgfg7E3zActC/+G1TuIUgtRE/CeSD/uO7e+ETqZOt98WlAQ79jWk4sjv+msyc+maohpbk3xgho+F1SHQMKJa39CQY0iT6D/QkCwGDfSLSD9ieuU9odyk/rtAwqCKuIiKYy+lUV+xLtCTlIa3esDT0Lw25CDtLem9BOx/In8Rpq2ZPwFYxR0k/CJXqFjjKqxfHHNA8mqIIwMN0cR5L7p7E9QYH2DtoTlw8JlfifwCxdybAqlBkuCWSDEzxQDhxte+KzaZ+g9yfsAlp6AegwPdwtgAQDYBReAobeNpo6RmqzL5fO/oR6rVWhbASbJVdC2YBR2KiwP4FjtE09CkbBKBgFFAAAOuNcGQsu+2kAAAAASUVORK5CYII="
              />
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 10}}>
            <div style={{width: 42, height: 42}}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAg0lEQVR42mNgGAWjYBSMglFAHtDdl+ivuy/hORD/JxE/B+mlgYPIcgzcUbRw0H9K8MhzkML+BA58eDSEBp2DqK1+NMpGo2w0yoixAC6/P66cYb8DC41rexJCA+gYFLH98c0D6yCU0KKBY0htfsAdRCvHkNpAA6unpWNGwSgYBaNgJAEAAps4GapcyPIAAAAASUVORK5CYII="
              />
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 10}}>
            <div style={{width: 42, height: 42}}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAcElEQVR42mNgGAWjYBSMglFAHtDdl/AfhJHZROLnuvsS/QeTg8COGmwO+j9yHUSMnlEHDSoHjSbqUQeNOojaDiITPx9MDqJdba+zN8aKPL3xhbRw0HNyHKS1P9aGRlGW6A8J/kESZaNgFIyCUTBSAACoogXoPTWfWgAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
          <div  style={{height: 42, paddingTop: 10}}>
            <div style={{width: 42, height: 42}}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA4klEQVR42mNgGAWjYBQMBfCfgRGMBwPQ3hfrrrs3/iUIg9gD6hidvfGZuvvif+vuS/gPwfG/QWL0d0l9PRPQ8j6EQzBwL0gNXdyitT+UR2dvwiY8joHg/Qkb9HbGctPUMXrbomV098efQ7F4b8J6nT2R4iAMYqM57Kz6riQpmjhGf3ecIdCCJ+ghAXIIPE2BHIURWvGPtXYlGFDdQdgcQ5yDgGr2xj+khYOwpxX8UQbH9HMQkXjUQaMOIsfw0SgbjbLRKCPRQc8pcNBzGjgo0Z9MRz0H6R3teIyCUTAKRgGZAACRbUH5K5hx5gAAAABJRU5ErkJggg=="
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
