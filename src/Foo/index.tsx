import React, { type FC } from 'react';

import styles from './index.module.less';

const Foo: FC<{ title: string }> = (props) => (
  <div className={styles.title}>{props.title}</div>
);

export default Foo;
