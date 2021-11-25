type Titletext = {
  title: string;
  subTitle?: string;
};
const Title = (text: Titletext) => {
  const { title, subTitle } = text;
  return (
    <>
      <h1>{title}</h1>
      <hr />
      <h3>{subTitle}</h3>
    </>
  );
};
export default Title;
