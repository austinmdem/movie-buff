import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

import { StyledPostForm } from '../styles/StyledPostForm';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <StyledPostForm>
      <div className="post-form">
        <form
          className="form my-1"
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text });
            setText('');
          }}
        >
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Start a new post"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    </StyledPostForm>
  );
};

PostForm.propTypes = {};

export default connect(null, { addPost })(PostForm);
