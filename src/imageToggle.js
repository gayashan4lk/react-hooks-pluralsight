import React, {useRef} from "react";

const ImageToggle = ({bwImage, colorImage}) => {
    const imageRef = useRef(null);

    return (
        <img onMouseOver={() => {
            imageRef.current.src = colorImage;
        }} onMouseOut={() => {
            imageRef.current.src = bwImage;
        }} src={bwImage} alt="" ref={imageRef} 
        />
    );
};
 
export default ImageToggle;