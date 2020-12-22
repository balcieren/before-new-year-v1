import styled from "styled-components";
import moment from "moment";
import { rgba } from "polished";
import { motion } from "framer-motion";
import { FC } from "react";
import { NotePropTypes } from "api/models/Note";

interface Props {
  note: {
    username: string;
    text: string;
    date: Date;
  };
}

const Note: FC<Props> = ({ note }) => {
  moment.locale();
  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Top>
        <UserBox>
          <Name>{note.username}</Name>
        </UserBox>
        <div>
          <DateText>{moment(note.date).calendar()}</DateText>
        </div>
      </Top>
      <Content>
        <Paragraph>{note.text}</Paragraph>
      </Content>
      <Bottom></Bottom>
    </Card>
  );
};

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;

  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  :hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  align-items: center;
`;
const Content = styled.div`
  word-break: break-all;
`;
const Bottom = styled.div``;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  word-break: break-all;
`;

const Avatar = styled.img`
  border-radius: 100%;
`;
const Name = styled.p`
  font-weight: 600;
  font-size: 1.1em;
`;
const DateText = styled.p`
  font-weight: 500;
  color: ${rgba("#000000", 0.7)};
  font-size: 0.8em;
`;

const Paragraph = styled.p``;
export default Note;
