export default function Input({ name, placeholder, type, value, onChange, ...props }) {
    return (
        <div className='control'>
            <label htmlFor={name}>{placeholder}</label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={()=>onChange(name,event)} // Add onChange handler
                {...props}
            />
        </div>
    );
}