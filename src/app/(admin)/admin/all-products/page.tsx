import ProductCard from "@/components/CommonComponents/ProductCard/ProductCard";
import { LuPlusCircle } from "react-icons/lu";
import clock from '../../../../assets/images/clock.png';
import Search from "@/components/CommonComponents/Search/Search";

const page = () => {
    return (
        <div className="pb-10">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-medium">All products</h2>
                <button className="sm:text-lg sm:font-medium bg-black text-white px-2 sm:px-6 py-2.5 rounded-xl"><span className="flex items-center gap-2"><LuPlusCircle /> ADD NEW PRODUCT</span></button>
            </div>
            <div className="mt-4 md:w-[50%]">
                <Search />
            </div>
            <div className="mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center sm:justify-items-start">
                <ProductCard image={clock} width={150} height={150} title="COLMI P73 Bluetooth Calling Smart Watch" descriptionOne="1.9 inch HD Display" descriptionTwo="AI intelligent voice" descriptionThree="Bluetooth call support" descriptionFour="IP56 water-resistant" price="2,236৳ " discountPrice="1,638৳ " />
                <ProductCard image={clock} width={150} height={150} title="COLMI P73 Bluetooth Calling Smart Watch" descriptionOne="1.9 inch HD Display" descriptionTwo="AI intelligent voice" descriptionThree="Bluetooth call support" descriptionFour="IP56 water-resistant" price="2,236৳ " discountPrice="1,638৳ " />
                <ProductCard image={clock} width={150} height={150} title="COLMI P73 Bluetooth Calling Smart Watch" descriptionOne="1.9 inch HD Display" descriptionTwo="AI intelligent voice" descriptionThree="Bluetooth call support" descriptionFour="IP56 water-resistant" price="2,236৳ " discountPrice="1,638৳ " />
                <ProductCard image={clock} width={150} height={150} title="COLMI P73 Bluetooth Calling Smart Watch" descriptionOne="1.9 inch HD Display" descriptionTwo="AI intelligent voice" descriptionThree="Bluetooth call support" descriptionFour="IP56 water-resistant" price="2,236৳ " discountPrice="1,638৳ " />
                <ProductCard image={clock} width={150} height={150} title="COLMI P73 Bluetooth Calling Smart Watch" descriptionOne="1.9 inch HD Display" descriptionTwo="AI intelligent voice" descriptionThree="Bluetooth call support" descriptionFour="IP56 water-resistant" price="2,236৳ " discountPrice="1,638৳ " />
                <ProductCard image={clock} width={150} height={150} title="COLMI P73 Bluetooth Calling Smart Watch" descriptionOne="1.9 inch HD Display" descriptionTwo="AI intelligent voice" descriptionThree="Bluetooth call support" descriptionFour="IP56 water-resistant" price="2,236৳ " discountPrice="1,638৳ " />
            </div>
        </div>
    )
}

export default page
