export default function RHFTextArea({
    type = "text",
    label,
    name,
    dir = "rtl",
    register,
    errors,
    isRequired,
    validationSchema = {},
    placeholder,
    rows,
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
            <textarea
                type={type}
                name={name}
                id={name}
                dir={dir}
                placeholder={placeholder}
                rows={rows || 6}
                className={`textField__input !h-auto !p-4 resize-none ${hasError ? "!border-red-600" : ""} ${dir === "ltr" ? "text-left" : "text-right"
                    }`}
                {...register(name, validationSchema)}
                {...rest}
            />
            {errors && errors[name] && (
                <span className="text-red-600 block text-xs mt-1">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
}
