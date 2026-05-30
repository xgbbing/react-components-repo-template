import React, { type FC } from 'react';

import './index.less';

const Header: FC<{ title: string }> = (props) => (
  <div className="title">{props.title}</div>
);

export default Header;
