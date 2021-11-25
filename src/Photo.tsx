type PhotoType = {
  address: string;
  description: string;
};
const Photo = (mind: PhotoType) => {
  const { address, description } = mind;
  return (
    <>
      <section>
        <img src={address} />
      </section>
      <article>
        <code>{description}</code>
      </article>
    </>
  );
};
export default Photo;
