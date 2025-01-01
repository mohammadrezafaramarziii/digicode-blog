import ButtonIcon from "./ButtonIcon";
import { EyeClosedOutlineIcon, EyeLinearIcon } from "./Icons";

export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  isPass = false,
  showPass,
  setShowPass,
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative`}
    >
      <label htmlFor={name} className="text-secondary-800 text-sm block pr-2">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input  
          ${dir === "ltr" ? "text-left" : "text-right"}
          ${hasError ? "!border-red-600" : ""}
        `}
        {...register(name, validationSchema)}
        {...rest}
      />
      {isPass &&
        <ButtonIcon type="button" variant="none" onClick={setShowPass} className="absolute left-2 top-[34px]">
          {showPass ? <EyeLinearIcon className="!w-5 !h-5 !text-secondary-800"/> : <EyeClosedOutlineIcon className="!w-5 !h-5 !text-secondary-800"/>}
        </ButtonIcon>
      }
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
