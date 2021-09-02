import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import styles from './index.module.less';

const BaseLayout: React.FC<RouteConfigComponentProps> = (props) => {
  const { route, history } = props;
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // 这里可以进行登录拦截
    const isLogin = true;
    if (!isLogin) {
      history.push('/login');
    }
  }, []);

  function handleSwitchTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div data-theme={theme} className={styles['base-layout-wrap']}>
      <header>
        <Button onClick={handleSwitchTheme}>switch theme</Button>
      </header>
      {renderRoutes(route?.routes, { someProp: 'these extra props are optional' })}
      <footer>footer</footer>
    </div>
  );
};

export default BaseLayout;