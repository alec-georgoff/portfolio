import React, { useEffect, useState } from 'react';
import { getAlbumKeys, getRandomImageUrl } from './service';

export const SmugmugWidget = () => {
    const [albumKeys, setAlbumKeys] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log(1);
        getAlbumKeys()
            .then((res) => setAlbumKeys(res))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        void (async () => {
            const url = await getRandomImageUrl(albumKeys);
            setImageUrl(url);
        })();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, [albumKeys]);

    return (
        <div>
            {imageUrl ? <img src={imageUrl} /> : <span>Loading image</span>}
        </div>
    );
};
