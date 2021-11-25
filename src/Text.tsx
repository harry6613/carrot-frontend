type TextType = {
  text: string;
  type: string;
};
const Text = (mine: TextType) => {
  const { text, type } = mine;
  return (
    <>
      {type == "header" && <h1>{text}</h1>}
      {type == "bold" && <strong>{text}</strong>}
    </>
  );
};

export default Text;
