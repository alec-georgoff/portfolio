import React, { useCallback, useEffect, useState } from 'react';
import { SmugmugAlbum, getAlbumKeys, getRandomImageUrl } from './service';
import { Spinner } from 'react-bootstrap';

export const SmugmugWidget = () => {
    const [albumKeys, setAlbumKeys] = useState<SmugmugAlbum[]>([]);
    const [image, setImage] = useState<
        { imageUrl: string | undefined; albumName: string } | undefined
    >(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        void (async () => {
            const keys = await getAlbumKeys();
            setAlbumKeys(keys);

            const url = await getRandomImageUrl(keys);
            setImage(url);
            setLoading(false);
        })();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, []);

    const refreshImage = useCallback(() => {
        getRandomImageUrl(albumKeys)
            .then((res) => {
                setImage(res);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [albumKeys]);

    const handleRefreshImage = () => {
        setImage(undefined);
        refreshImage();
    };

    return (
        <div>
            {image && !loading ? (
                <div>
                    <img
                        src={image.imageUrl}
                        onClick={() => handleRefreshImage()}
                    />
                    <span>{image.albumName}</span>
                </div>
            ) : (
                <Spinner animation="border" />
            )}
        </div>
    );
};
