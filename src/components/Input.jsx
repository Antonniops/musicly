
function Input( {type, placeholder, onChange}) {
  return (
    <input
    type={type}
    className="default:ring-2 border-0  mt-10 border-b-2 border-pink-300 rounded p-3"
    placeholder={placeholder}
    onChange={onChange}
  />
  )
}

export default Input