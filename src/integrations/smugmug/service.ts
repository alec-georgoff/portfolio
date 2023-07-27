import axios from 'axios';

const accessToken = process.env.REACT_APP_SMUGMUG_ACCESS_TOKEN || '';
const apiKey = process.env.REACT_APP_SMUGMUG_API_KEY;

interface SmugmugImageResponse {
    AlbumImage: {
        ImageKey: string;
    }[];
}

export interface SmugmugAlbum {
    AlbumKey: string;
    Title: string;
    WebUri: string;
}

interface SmugmugImageSizeDetailsResponse {
    ImageSizeDetails: {
        ImageSizeLarge: {
            Url: string;
        };
    };
}

interface SmugmugAlbumResponse {
    Album: SmugmugAlbum[];
}

export interface SmugmugImageDetails {
    imageUrl?: string;
    albumName: string;
    albumUrl: string;
    imageKey: string;
}

const instance = axios.create({
    baseURL: 'https://api.smugmug.com/api/v2',
    headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
    },
    params: { APIKey: apiKey },
    timeout: 10000,
    responseType: 'json',
});

export const getAlbumKeys = async () => {
    const result = await instance
        .get('/user/georgoff!albums')
        .then((res) => {
            const typedRes = res.data as unknown as {
                Code: number;
                Message: string;
                Response: SmugmugAlbumResponse;
            };

            const albumKeys = typedRes.Response.Album;

            console.log(albumKeys);
            return albumKeys;
        })
        .catch((err) => {
            console.log(err);
            return [] as SmugmugAlbum[];
        });

    return result;
};

export const getAlbumImages = async (albumInfo: SmugmugAlbum) => {
    const result = await instance
        .get(`/album/${albumInfo.AlbumKey}!images`)
        .then((res) => {
            const typedRes = res.data as unknown as {
                Code: number;
                Message: string;
                Response: SmugmugImageResponse;
            };
            const imageKeys = typedRes.Response.AlbumImage.map(
                (ai) => ai.ImageKey
            );

            console.log(imageKeys);
            return imageKeys;
        })
        .catch((err) => {
            console.log(err);
            return [] as string[];
        });

    return result;
};

export const getImageUrl = async (imageKey: string) => {
    const result = await instance
        .get(`/image/${imageKey}!sizedetails`)
        .then((res) => {
            const typedRes = res.data as unknown as {
                Code: number;
                Message: string;
                Response: SmugmugImageSizeDetailsResponse;
            };

            const url = typedRes.Response.ImageSizeDetails.ImageSizeLarge.Url;

            console.log(url);
            return url;
        })
        .catch((err) => {
            console.log(err);
            return undefined;
        });

    return result;
};

export const getRandomImageUrl = async (albums: SmugmugAlbum[]) => {
    if (!albums.length) return undefined;

    let randomIndex = Math.floor(Math.random() * albums.length);
    const randomAlbumKey = albums[randomIndex];

    const albumImages = await getAlbumImages(randomAlbumKey);

    if (!albumImages || !albumImages.length) return undefined;

    randomIndex = Math.floor(Math.random() * albumImages.length);
    const randomImageKey = albumImages[randomIndex];

    const imageUrl = await getImageUrl(randomImageKey);

    return {
        imageUrl: imageUrl,
        albumName: randomAlbumKey.Title,
        albumUrl: randomAlbumKey.WebUri,
        imageKey: randomImageKey,
    } as SmugmugImageDetails;
};
