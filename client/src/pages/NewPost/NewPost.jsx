import { useState } from "react";
import FormItem from "../../components/FormItem/FormItem";
import RegisterLayout from "../../layout/RegisterLayout/RegisterLayout";
import Button from "../../components/Button/Button";
import axios from "axios";
import { currentTime } from "../../utils/fullDate";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const post = {
      title,
      text,
      dateCreated: currentTime(),
      userId: "64a302007f6a59dd503bc69e",
      edited: false,
    };

    axios.post("http://localhost:3000/posts", post).catch((error) => {
      console.error(error);
    });
  };
  return (
    <RegisterLayout>
      <form className="registerForm" onSubmit={onSubmitHandler}>
        <FormItem
          label="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <div>
          <textarea
            rows="5"
            cols="50"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <Button className="btnReg">Post</Button>
      </form>
    </RegisterLayout>
  );
};

export default NewPost;