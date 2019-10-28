import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      dataRoute: "http://13.236.237.115/wp-json/wp/v2/posts"
    };
  }

  render() {
    const { posts } = this.state;

    console.log(posts);

    return (
      <div>
        <header className="image-container">
          <div className="home-header-text">
            <h1 className="tagline">Title page / Title page</h1>
            <h2 className="subtagline">Title page</h2>
            <p className="home-tagline_sub">
              Ko te taiao ko au, Ko au te taiao.
            </p>
            <p className="home-tagline_sub_italic">
              The enviroment is me, I am the enviroment.
            </p>
          </div>

          <img className="full-image" src="/images/home-lab.jpg" />
        </header>

        <div className="posts">
          {posts.map(post => (
            <div className="post" key={`post-${post.id}}`}>
              <h2 className="post-title">{post.name}</h2>
              <div
                className="content-text"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(posts =>
        this.setState((prevState, props) => {
          return { posts: posts.map(this.mappost) };
        })
      );
  }

  mappost(post) {
    return {
      id: post.id,
      price: post.price,
      image: post.image,
      name: post.title.rendered,
      content: post.content.rendered,
      description: post.description
    };
  }
}

export default Posts;
