import { ChangeEvent, useState } from "react";
const ConditionalText = () => {
  const [text, setText] = useState<string>("");
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={updateName} />
      <article>{text.length > 5 && text}</article>
    </>
  );
};

export default ConditionalText;
