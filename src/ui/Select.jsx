export default function Select({ label, name, value, onChange, options, isRequired, errors }) {
    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages);

    return (
        <div className="textField relative">
            <label htmlFor={name} className="text-secondary-800 text-sm block pr-2">
                {label} {isRequired && <span className="text-error">*</span>}
            </label>
            <select value={value} onChange={onChange} id={name} className={`textField__input ${hasError ? "!border-red-600" : ""}`}>
                {options.map((option) => (
                    <option className="bg-primary-800" key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && errors[name] && (
                <span className="text-red-600 block text-xs mt-1">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    );
}
