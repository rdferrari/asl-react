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
        <div>
          <h2>Posts Barbara</h2>
        </div>

        <div className="posts">
          {posts.map(post => (
            <div className="post" key={`post-${post.id}}`}>
              <p>{post.name}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
