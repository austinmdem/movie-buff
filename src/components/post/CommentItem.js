import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

import { StyledCommentItem } from '../styles/StyledCommentItem';
import { FaTimes } from 'react-icons/fa';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <StyledCommentItem>
    <div className="container">
      <div class="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img
              class="round-img"
              src={`https://robohash.org/${name}`}
              alt=""
            />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p class="my-1">{text}</p>
          <p class="post-date">
            Post on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => deleteComment(postId, _id)}
              type="button"
              className="btn"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>
    </div>
  </StyledCommentItem>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
