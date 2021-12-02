import { ChangeEvent, useState } from "react";
const WelcomeName = () => {
  const [name, setName] = useState<string>();

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);

    return <></>;
  };
};
