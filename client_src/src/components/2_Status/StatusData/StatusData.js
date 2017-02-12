// CORE
import React from 'react';
// SCSS
import './StatusData.scss';

const StatusData = (props) => {

    const { icon, data, disabled } = props;

    if (disabled) return null;

    return (
      <article className="StatusData">
          <i className={`StatusData_icon fa fa-${icon}`} />
          <span className="StatusData_value">{data}</span>
      </article>
    );
};

export default StatusData;
