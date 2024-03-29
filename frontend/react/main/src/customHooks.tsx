import { useState, ChangeEvent } from "react";

export const useForm = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  return [
    values,
    (e: ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [e.target.id]: e.target.value }),
  ];
};
