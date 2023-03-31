import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 col-md-1">
          <img
            className="rounded-circle"
            height={48}
            src={`/images/${tuit.image}`}
            alt=''
          />
        </div>
        <div className="col-10 col-md-11 ps-md-4">
          <div>
          <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
            {tuit.username} <FontAwesomeIcon icon={faCircleCheck}/> <span>&#183;</span> {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
