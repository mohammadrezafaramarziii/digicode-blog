export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
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
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
