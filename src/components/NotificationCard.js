import React from "react";

const NotificationCard = ({messageNoti, title, createTime}) => {
  return (
    <div className="frame">
      <div className="pic"></div>
      <div className="right">
        <div className="text">
          <div className="text1">{title}</div>
          <div className="text2">{messageNoti}</div>
        </div>
        <div className="date">{createTime}</div>
      </div>
    </div>
  );
};

export default NotificationCard;
