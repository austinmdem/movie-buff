import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../elements/Spinner';
import PostItem from '../posts/PostItem';
import PostForm from '../posts/PostForm';
import { getPosts } from '../../actions/post';
import { StyledPosts } from '../styles/StyledPosts';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <StyledPosts>
      <Fragment>
        <div className="container">
          <div className="box">
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">Welcome to the community</p>
            <PostForm />
            <div className="post">
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    </StyledPosts>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
