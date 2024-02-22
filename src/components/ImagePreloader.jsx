import React, { useState, useEffect } from 'react';

const PreloadImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            setLoaded(true);
        };

        return () => {
            imageToLoad.onload = null;
        };
    }, [src]);

    return <>{loaded ? <img className={className} src={src} alt={alt} /> : null}</>;
};

export default PreloadImage;
