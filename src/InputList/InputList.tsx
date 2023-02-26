import React from "react";
import { InputListType } from "../@types";
import { Input } from '../Elements';

export const InputList: React.FC<InputListType> = (data) => {

  return (
    <>
      { (data.inputs !== undefined) && data.inputs.map((input) => (
        <Input key={input.id}
          id={input.id}
          label={input.label} 
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={input.onChange}/>
      ))}
    </>
  );
};