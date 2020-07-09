import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && (
        <img
          src="https://rocketseat.com.br/static/images/logo-rocketseat.svg"
          alt="RocketSeat"
        />
      )}
    </Button>
  );
};

export default ServerButton;
