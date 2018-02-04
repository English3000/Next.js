import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from './store';
import { getPosts } from './actions/posts';

const PostForm = (props) => {
  //
};

const Post = (props) => {
  const {key, details} = props;
  return (
    <div id={`post-${key}`}>
      <p>{details.body}</p>
      <p>{details.author}</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  GetPosts: () => dispatch(getPosts())
});

class Index extends React.Component {
  static async getInitialProps({ GetPosts }) { //only available for ./pages-level components
    const posts = GetPosts();
    return {posts};
    //from webpack; indicates whether server- (true) or client-side render
  }

  render() {
    const {posts} = this.props;
    return (
      <div>
        <h1>Posts</h1>

        <PostForm />

        {posts ? Object.keys(posts).map(
          id => <Post key={id} details={posts[id]} />
        ) : null}

        {/* to access static assets:
          <img src='/static/image-name.png'/> */}
        </div>
      );
  }
}

export default withRedux(store, null, mapDispatchToProps)(Index);
//auto-creates a store upon getInitialProps,
// other arg's passed to connect(); equiv. to <Provider />
