import React from 'react';
const url = 'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d8b89ab14a2e4a6fb0ba7ed856e0ee86';
const req = new Request(url);

class News extends React.Component {
  state = {
    news: [],
    isLoaded: true
  }

  componentDidMount() {
    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ news: Object.values(response)[2]});
        this.setState({ isLoaded: false });
      })
  }
  render() {
    const { news, isLoaded} = this.state;
    if (isLoaded) return <div>...Loading</div>
    return (
      <div className="container">
        {news.map(i => (
          <>
            <div className="news">
              <p className="title">{i.title}</p>
              <p className="content">{i.description}</p>
              <p className="content">{i.content?i.content!=='':''}</p>
              <p>More...<a href={i.url} className="link">{i.url}</a></p>
              <hr />
              <p className="author">
                <i class="user icon"></i> {i.author} <i>{i.publishedAt}</i></p>
              <img src={i.urlToImage} alt={i.title} style={{ width: "80%" }} />  
            </div>
          </>
        ))}
      </div>
    )
  }

}
export default News

/*fetch(req)
    .then(function(response) {
        console.log(response.json());
    })*/