import React, {FC} from "react";
import s from "./inputFilterButton.module.scss"

interface IInputFilterButton {
  name?: string,
  value: string | undefined,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLHeadingElement>) => void
}

const InputFilterButton: FC<IInputFilterButton> = ({name, value, ...props}) => {
  return (
    <input
      name={name}
      type="button"
      value={value}
      {...props}
    />
  );
};

export default InputFilterButton;
