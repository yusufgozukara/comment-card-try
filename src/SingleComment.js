import React from 'react'


const SingleComment = (props) => {
  return (
    <div className="comment">
                <a href="/" className="avatar">
                    <img src={props.pic} alt="profile picture" />
                </a>
                <div className="content">
                    <a href="/" className="author">{props.name}</a>
                    <div className="metadata">
                        <span className="date">
                            {props.time}
                        </span>
                    </div>
                    <div className="text">
                        {props.comment}
                    </div>
                </div>
            </div>
  )
}

export default SingleComment