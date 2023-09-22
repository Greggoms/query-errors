import { RefCallBack } from "react-hook-form";

type SelectProps = {
  id: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: () => void;
  isMulti?: boolean;
  inputRef?: RefCallBack;
};

export default function CustomSelect({
  id,
  options,
  isMulti,
  value,
  onChange,
  inputRef,
}: SelectProps) {
  return (
    <select
      id={id.toString()}
      multiple={isMulti}
      value={value}
      onChange={onChange}
      ref={inputRef}
    >
      <option value="">--Please choose an Album--</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
