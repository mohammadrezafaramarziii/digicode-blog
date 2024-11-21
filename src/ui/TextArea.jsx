function TextArea({
    type = "text",
    label,
    name,
    value,
    dir = "rtl",
    onChange,
    isRequired,
    className,
    rows,
    placeholder
  }) {
    return (
      <div className="textField">
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
          className={`textField__input !h-auto !p-4 resize-none ${
            dir === "ltr" ? "text-left" : "text-right"
          } ${className}`}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  export default TextArea;
  