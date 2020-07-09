import React from 'react';
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SetttingsIcon,
} from './styles';
const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Thiago Pereira</strong>
          <span>#3094</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SetttingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
