import React from "react";
import PropTypes from "prop-types";

const ListImage = ({ avatar, placeholderSize }) => {
  return (
    <img
      src={
        avatar
          ? avatar
          : `http://via.placeholder.com/${placeholderSize}x${placeholderSize}`
      }
      alt="avatar"
    />
  );
};

ListImage.propTypes = {
  avatar: PropTypes.string
};

export default ListImage;
