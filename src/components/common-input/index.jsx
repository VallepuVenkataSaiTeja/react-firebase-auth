function CommonInput(){
    return 
        <input 
        type={type || "text"}
        placeholder={placeholder || "enter your value"}
        value={value}
        onChange={onChange}
        className={className || "w-full full px-5 py-2 mt-2 text-black border"}
         />
}
export default CommonInput;