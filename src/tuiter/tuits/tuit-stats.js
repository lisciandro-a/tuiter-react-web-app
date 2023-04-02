import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faShareNodes,
  faHeart as faHeartLiked,
  faThumbsDown as faThumbsDownUnliked,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartUnliked,
  faThumbsDown as faThumbsDownUnDisliked,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const toggleLikeTuitHandler = (tuit) => {
    dispatch(updateTuitThunk({
      ...tuit,
      likes: !tuit.liked ? tuit.likes + 1 : tuit.likes - 1,
      liked: !tuit.liked
    }));
  };
  const toggleDislikeTuitHandler = (tuit) => {
    dispatch(updateTuitThunk({
      ...tuit,
      dislikes: !tuit.disliked ? tuit.dislikes + 1 : tuit.dislikes - 1,
      disliked: !tuit.disliked
    }));
  };
  return (
    <div className="row mt-2">
      <div className="col">
        <button onClick={() => {}} className="btn">
          <FontAwesomeIcon icon={faComment} />
          <span className="ms-2">{tuit.replies}</span>
        </button>
      </div>

      <div className="col">
        <button onClick={() => {}} className="btn">
          <FontAwesomeIcon icon={faRetweet} />
          <span className="ms-2">{tuit.retuits}</span>
        </button>
      </div>

      <div className="col">
        <button onClick={() => toggleLikeTuitHandler(tuit)} className="btn">
          <FontAwesomeIcon
            icon={tuit.liked ? faHeartLiked : faHeartUnliked}
            className={tuit.liked ? "text-danger" : "text-dark"}
          />
          <span className="ms-2">{tuit.likes}</span>
        </button>
      </div>

      <div className="col">
        <button onClick={() => toggleDislikeTuitHandler(tuit)} className="btn">
          <FontAwesomeIcon
            icon={tuit.disliked ? faThumbsDownUnliked : faThumbsDownUnDisliked}
            className={tuit.disliked ? "text-primary" : "text-dark"}
          />
          <span className="ms-2">{tuit.dislikes}</span>
        </button>
      </div>

      <div className="col-2">
        <button onClick={() => {}} className="btn">
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
      </div>
    </div>
  );
};
export default TuitStats;
