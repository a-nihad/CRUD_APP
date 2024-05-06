function Input({ onChange, name, label, value }) {
  return (
    <div className="flex flex-col">
      <label htmlFor=""> {label} </label>
      <input
        type="text"
        name={name}
        placeholder={label}
        onChange={onChange}
        className="px-4 py-2 border rounded-lg"
        autoComplete="false"
        value={value}
      />
    </div>
  );
}

export default Input;
