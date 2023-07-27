import React, { useCallback, useEffect, useState } from 'react';
import {
    SmugmugAlbum,
    SmugmugImageDetails,
    getAlbumKeys,
    getRandomImageUrl,
} from './service';
import { Button, Spinner } from 'react-bootstrap';
import RefreshIcon from '../../icons/refresh.svg';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export const SmugmugWidget = () => {
    const [albumKeys, setAlbumKeys] = useState<SmugmugAlbum[]>([]);
    const [image, setImage] = useState<SmugmugImageDetails | undefined>(
        undefined
    );
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
                        className="smugmug-image fade-in"
                    />
                    <div className="album-label">
                        <Button
                            variant="outline-primary"
                            href={image.albumUrl}
                            target="_blank"
                        >
                            {image.albumName}
                        </Button>
                        <Button
                            variant="outline-secondary"
                            href={image.albumUrl + `/i-${image.imageKey}/A`}
                            target="_blank"
                        >
                            View on Website
                        </Button>
                        <Button variant="outline-secondary">
                            <img
                                className="refresh-icon"
                                src={RefreshIcon}
                                onClick={() => handleRefreshImage()}
                            />
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="smugmug-spinner fade-in">
                    <Spinner animation="border" />
                </div>
            )}
        </div>
    );
};
