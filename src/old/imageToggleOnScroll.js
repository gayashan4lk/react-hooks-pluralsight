import React, {useEffect, useRef} from "react";

const ImageToggleOnScroll = ({bwImage, colorImage}) => {
    const imageRef = useRef(null);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const [inView, setInView] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    },[]);

    const scrollHandler = () => {
        setInView(isInView());
    };

    return (
        <img src={inView ? colorImage : bwImage} alt="" ref={imageRef} />
    );
};
 
export default ImageToggleOnScroll;