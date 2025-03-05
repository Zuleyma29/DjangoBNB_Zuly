interface CustomButtonProps{
    label : string
     className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => {
    return(
        <div 
            onClick={onClick}
            className={`w-auto px-4 py-2 bg-airbnb hover:bg-airbnb-dark text-white text-sm text-center rounded-lg transition cursor-pointer ${className}`} 
        >
            {label}
        </div>
    )
}

export default CustomButton;