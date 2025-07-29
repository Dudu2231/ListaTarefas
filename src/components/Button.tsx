interface ButtonProps{
    label: string,
    color: string,
    onClick: () => void
}

function Button({label, color, onClick}: ButtonProps){
    return (
        <button
        className="rounded-md p-2
                    hover:opacity-65 
                    hover:translate-y-1.5
                    transition cursor-pointer
                    active:opacity-5 active:scale-50
                    text-white font-semibold"
        style={{backgroundColor: `${color}`}}
        onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button