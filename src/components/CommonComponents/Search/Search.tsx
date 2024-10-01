import { IoIosSearch } from "react-icons/io";
const Search = () => {
    return (
        <div>
            <form className="w-auto flex">
                <input type="text" id="first_name" className=" text-sm rounded-lg  block w-full p-2 border border-second-200" placeholder="Search..." required />
                <button className="relative top-0.5 right-10">
                    <IoIosSearch className="text-3xl" />
                </button>
            </form>
        </div>
    )
}

export default Search
