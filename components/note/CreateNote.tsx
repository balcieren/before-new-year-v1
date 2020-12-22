import Axios from "axios";
import Button from "components/main/Button";
import Card from "components/main/Card";
import Input from "components/main/Input";
import TextArea from "components/main/TextArea";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { BackgroundColor, ThemeColor } from "theme/GlobalStyle";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";
import useAPI from "hooks/useApi";

interface NotePropTypes {
  username: string;
  text: string;
}

const CreateNote = () => {
  const { register, handleSubmit, errors } = useForm<NotePropTypes>();
  const router = useRouter();
  const API = useAPI();

  const [loading, setLoading] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Create Note");
  const [buttonColor, setButtonColor] = useState<ThemeColor>("success");
  const [buttonIsDisabled, setButtonDisabled] = useState<boolean>(false);

  const sendPost = async (data: NotePropTypes) => {
    setLoading(true);
    return await API.post("/notes/create", {
      note: data,
    })
      .then(() => {
        setButtonText("Created Successfully");
        setButtonDisabled(true);
        setTimeout(() => {
          router.reload();
        }, 500);
      })
      .catch(() => {
        setButtonColor("danger");
        setButtonText("Couldn't Created");
        setButtonDisabled(true);
        setTimeout(() => {
          setButtonText("Create Note");
          setButtonColor("success");
          setButtonDisabled(false);
        }, 1500);
      })
      .finally(() => setLoading(false));
  };
  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Form onSubmit={handleSubmit(sendPost)}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <h2>Create Note</h2>
        </motion.div>
        <div>
          <Input
            name="username"
            ref={register({ required: "Username is required." })}
            border
            borderColor="primary"
            placeholder="username"
          />
          {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
        </div>
        <div>
          <TextArea
            name="text"
            ref={register({ required: "Text is required" })}
            placeholder="write somethings..."
            border
            borderColor="primary"
          />
          {errors.text && <ErrorText>{errors.text.message}</ErrorText>}
        </div>

        {loading ? (
          <LoadingContainer>
            <PropagateLoader color={BackgroundColor("primary")} />
          </LoadingContainer>
        ) : (
          <Button disabled={buttonIsDisabled} border color={buttonColor}>
            {buttonText}
          </Button>
        )}
      </Form>
    </Card>
  );
};

const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 1rem;
`;
const ErrorText = styled.p`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 0.9em;
  color: ${BackgroundColor("danger")};
`;
const LoadingContainer = styled.div`
  display: flex;
  height: 2.5rem;
  align-items: center;
  height: auto;
  justify-content: center;
`;
export default CreateNote;
