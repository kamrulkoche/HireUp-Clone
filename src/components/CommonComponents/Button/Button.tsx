import { PiShoppingCartFill } from "react-icons/pi";

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <div>
            <button
                className="text-xl font-medium w-full flex items-center gap-4 justify-center bg-fifth-100 hover:bg-first-100 text-first-100 hover:text-fifth-white duration-500 rounded-md py-2.5"
                onClick={onClick}
            >
                <PiShoppingCartFill />
                {title}
            </button>
        </div>
    );
};

export default Button;
