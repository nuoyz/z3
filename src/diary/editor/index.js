import React from 'react'


const SlateEditor = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: 960,
          minWidth: 240,
          height: 35,
          padding: '0 48px',
          margin: '0 auto 38px',
          borderBottom: '1px solid #ececec'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            height: 17,
            width: 13,
            margin: 5,
            overflow: 'hidden',
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAAq0lEQVR42mNgGAWjYBRQDXh5ef3Hhb29vT8D6X1A7ENTi5Cxp6dnC10sglrmSxeLQMFINYuQ5Tw8PGzQ5D/RxCJgUFmjJ46hF3QEkvsVHx8faXr4CIQvAIOUnR4WgXyWS9XEAALu7u6SQPFtaOqOU90iJMuQ1f2giUVAcQmKkzkhi0CpDGjwVqoHHZE4jx4WXaRH8r5Aywz7BYhPA3F+aGgo22hTYRSMAvoDAPz4cYulondpAAAAAElFTkSuQmCC") -0px -0px  no-repeat',
            backgroundSize: '13px 17px'
          }}
        ></div>
        <div
          style={{
            display: 'inline-block',
            height: 17,
            width: 13,
            margin: 5,
            overflow: 'hidden',
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAAnUlEQVR42u2VuxFAUBREJYpQA9mLSd9HDXpQAwXoQQ1q0IAaaEABvJ3ZULqBmXtmpM7s3h2KwjAMOSml5+v5rwj0Gbw8xrhL68uChUlm9Z0OijqZxHtfQZLbu51zpTLNwDSburaViUb1EE6KGuV9atZ2SdOgLopW9X02igaZBFPGpCHCxJW1tUxzqO8z8fu2qGe9QxRCSPb/MQxDwwve1W8goUO3vwAAAABJRU5ErkJggg==") -0px -0px  no-repeat',
            backgroundSize: '13px 17px'
          }}
        >
        </div>
        <div
          style={{
            display: 'inline-block',
            height: 17,
            width: 13,
            margin: 5,
            overflow: 'hidden',
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAAq0lEQVR42mNgGAWjYBRQHXh5ef0HYWqpG7Vo1KJRi4aJRT9BBnh6evLhUuPg4MADUuPt7f2ZEouOQw0JwqUGJAf10XFKLMqDGnI9ICBAAF0eJAaSg6rJI9siYJCxAw24ADXoBsj1fn5+vCAM9ckNqNxFkFqKSnAfHx9poEHnYRGOBV8AqaFKdREaGsoGNDAfiE8D8RcoBrHzQXKjFSrOjEgsHvwWjYJRQHMAAE1iwj1xRry4AAAAAElFTkSuQmCC") -0px -0px  no-repeat',
            backgroundSize: '13px 17px'
          }}
        >
        </div>
        <div
          style={{
            display: 'inline-block',
            height: 17,
            width: 13,
            margin: 5,
            overflow: 'hidden',
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAABB0lEQVR42mNgGAWjYBSMggEAoaGhzF5eXulAfAqIvwLxByDeDcQ+9HbEFiD+D8XPgPg1Er+dLg7x9PQsg1p42cPDQw9J3Boo9hgq509zhwAtuQm1zASLIwOgcofo4ZBfIMtAUYQu5+bmxg11yDd6OOQFyDJ3d3eVAc0xwOBfDvX1KgcHB5aRV2YgZUuK8PBxyFCNxnpYQh5Qh/j4+EhDHfKCHr7+DrLM19eXC10OlJ2hDvlND4ecgVrmiiVEVKFy9+lRoOXALANV+8CintPY2JgV6Agjb2/vw1C5Nno1A9biyqZAhx7DFm00AfX19UxA36chNYxA+ByoiQDE7KNNx1EwCkbBQAAA/frKvFBAF3MAAAAASUVORK5CYII=") -0px -0px  no-repeat',
            backgroundSize: '13px 17px'
          }}
        >
        </div>
        <div
          style={{
            display: 'inline-block',
            height: 17,
            width: 13,
            margin: 5,
            overflow: 'hidden',
            background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAANUlEQVR42u3UoQ0AMAhEUea7/fdpwwCIigqS95IzKNSvAvgkyelN99ftfwTQER0BHdERYIkL/bmy4e4uZ2MAAAAASUVORK5CYII=") -0px -0px  no-repeat',
            backgroundSize: '13px 17px'
          }}
        >
        </div>
      </div>
      <textarea
        style={{
          maxWidth: 960,
          minWidth: 240,
          padding: '0 48px',
          margin: '0 auto 38px',
          height: 668
        }}
      >
      </textarea>
    </div>
  )
}

export default SlateEditor;