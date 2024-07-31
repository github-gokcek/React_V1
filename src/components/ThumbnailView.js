import React from "react";

const ThumbnailView = ({ userData, onThumbnailClick }) => {
  //! mongodb _id olarak tutuyor. id değil
  return (
    <div className="thumbnail-view">
      {userData.map((user) => (
        <div key={user.id} onClick={() => onThumbnailClick(user.image)}>
          <img src={user.image} alt={`${user.name} thumbnail`} />
          <p className="thumbnail_p">ID: {user._id}</p>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailView;
