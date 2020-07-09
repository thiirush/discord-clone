import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';
const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Thiago Pereira"
            date="26/06/2020"
            content="Chama que chama"
          />
        ))}

        <ChannelMessage
          author="Pedro Bazoli"
          date="26/06/2020"
          content={
            <>
              <Mention>@Thiago Pereira</Mention>, me carrega no Lol e CS de novo
              por favor?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre " />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
