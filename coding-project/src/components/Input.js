function Input() {
  return (
    <>
      <div className="input">
        <label className="label" htmlFor={label}>
          {" "}
          {label}{" "}
        </label>

        <input
          name={name}
          id={name}
          type={inputType}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
