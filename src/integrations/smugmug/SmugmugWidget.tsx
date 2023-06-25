import React, { useCallback, useEffect, useState } from 'react';
import { getAlbumKeys, getRandomImageUrl } from './service';

export const SmugmugWidget = () => {
    const [albumKeys, setAlbumKeys] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(1);
        void (async () => {
            const keys = await getAlbumKeys();
            setAlbumKeys(keys);

            const url = await getRandomImageUrl(keys);
            setImageUrl(url);
            setLoading(false);
        })();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, []);

    const refreshImage = useCallback(() => {
        console.log('refresh');
        getRandomImageUrl(albumKeys)
            .then((res) => {
                setImageUrl(res);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [albumKeys]);

    const handleRefreshImage = () => {
        setImageUrl(undefined);
        refreshImage();
    };

    return (
        <div>
            {imageUrl && !loading ? (
                <img src={imageUrl} onClick={() => handleRefreshImage()} />
            ) : (
                <span>Loading image</span>
            )}
        </div>
    );
};
