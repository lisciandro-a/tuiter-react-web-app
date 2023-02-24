import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="#"><FontAwesomeIcon icon={faTwitter}/> <span className="d-xl-inline d-none">Tuiter</span></a>
      <a
        className={`list-group-item
                         ${active === "home" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faHouseChimney}/> <span className="d-xl-inline d-none">Home</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "explore" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faHashtag}/> <span className="d-xl-inline d-none">Explore</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "notifications" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faBell}/> <span className="d-xl-inline d-none">Notifications</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "messages" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faEnvelope}/> <span className="d-xl-inline d-none">Messages</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "bookmarks" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faBookmark}/> <span className="d-xl-inline d-none">Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "lists" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faList}/> <span className="d-xl-inline d-none">Lists</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "profile" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faUser}/> <span className="d-xl-inline d-none">Profile</span>
      </a>
      <a
        className={`list-group-item
                         ${active === "more" ? "active" : ""}`} href="#"
      >
        <FontAwesomeIcon icon={faEllipsis}/> <span className="d-xl-inline d-none">More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
