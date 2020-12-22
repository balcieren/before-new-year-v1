import CreateNote from "components/note/CreateNote";
import GreetBox from "components/note/GreetBox";
import Note from "components/note/Note";
import CounterBox from "components/stats/CounterBox";
import styled from "styled-components";
import { NextPageContext } from "next";
import Pagination from "components/note/Pagination";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { FC } from "react";
import useAPI from "hooks/useApi";
import Head from "next/head";

export async function getServerSideProps(context: NextPageContext) {
  const API = useAPI();
  const { data } = await API.get(`/notes/?page=${context.query.page}`);
  const { data: allNotes } = await API.get(`/notes`);
  return {
    props: {
      defaultPage: context.query.page,
      notes: data,
      allNotes,
    },
  };
}

interface Props {
  notes: any;
  allNotes: any;
  defaultPage: number;
}

const Notes: FC<Props> = ({ notes, allNotes, defaultPage }) => {
  return (
    <Grid>
      <Head>
        <title>Notes</title>
      </Head>
      <div className="greetbox">
        <GreetBox />
      </div>
      <div className="counter">
        <CounterBox />
      </div>

      <div className="note">
        {notes?.map((note) => (
          <Note key={note._id} note={note} />
        ))}

        <Pagination defaultPage={defaultPage} notes={allNotes} />
      </div>
      <div className="create">
        <CreateNote />
      </div>
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 40vw 30vw;
  grid-row-gap: 1rem;
  column-gap: 1rem;
  grid-template-areas: "top top", "content content";
  .greetbox {
    grid-area: "top";
  }
  .note {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    grid-area: "content";
  }
  .counter {
    grid-area: "top";
    @media (max-width: 680px) {
    }
  }

  .create {
    grid-area: "content";

    @media (max-width: 680px) {
      grid-row-start: 3;
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 50vw 40vw;
    grid-template-areas: "top", "content";
  }
  @media (max-width: 680px) {
    grid-template-columns: 90vw;
    grid-template-areas: "top", "content";
  }
`;

const AnimationBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
export default Notes;
