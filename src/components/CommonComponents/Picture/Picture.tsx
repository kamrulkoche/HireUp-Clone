import Image from 'next/image'

interface PictureProps {
    image: any;
    width: number;
    height: number;
}

const Picture: React.FC<PictureProps> = ({ image, width, height }) => {
    return (
        <div>
            <Image
                src={image}
                width={width}
                height={height}
                alt="Picture of the author"
            />
        </div>
    );
}

export default Picture;
