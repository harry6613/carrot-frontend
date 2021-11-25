import { ChangeEvent, useState } from "react";
const WelcomeName = () => {
    const [name, setName] = useState<string>();

const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
};



    return (
        <section>
            <input>반갑습니다 </input>
        <section>
            <input type="text" onChange
    )
];
