import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item"><FontAwesomeIcon icon={faTwitter}/> <span className="d-xl-inline d-none">Tuiter</span></a>
      <a
        className={`list-group-item
                         ${active === "home" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHouseChimney}/> <span className="d-xl-inline d-none">Home</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "explore" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHashtag}/> <span className="d-xl-inline d-none">Explore</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "notifications" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faBell}/> <span className="d-xl-inline d-none">Notifications</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "messages" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faEnvelope}/> <span className="d-xl-inline d-none">Messages</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "bookmarks" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faBookmark}/> <span className="d-xl-inline d-none">Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "lists" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faList}/> <span className="d-xl-inline d-none">Lists</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "profile" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faUser}/> <span className="d-xl-inline d-none">Profile</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "more" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faEllipsis}/> <span className="d-xl-inline d-none">More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
