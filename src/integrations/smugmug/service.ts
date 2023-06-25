import axios from 'axios';

const accessToken = process.env.REACT_APP_SMUGMUG_ACCESS_TOKEN || '';
const apiKey = process.env.REACT_APP_SMUGMUG_API_KEY;

interface SmugmugAlbum {
    AlbumKey: string;
}

interface SmugmugInfo {
    Album: SmugmugAlbum[];
}

interface SmugmugResponse {
    Code: number;
    Message: string;
    Response: SmugmugInfo;
}

interface SmugmugImage {
    ImageKey: string;
}

interface SmugmugImageResponse {
    AlbumImage: SmugmugImage[];
}

interface SmugmugImageSizeDetails {
    ImageSizeLarge: { Url: string };
}

interface SmugmugImageSizeDetailsResponse {
    ImageSizeDetails: SmugmugImageSizeDetails;
}

// const isSmugmugResponse = (res: any): res is SmugmugResponse => {
//     return "Code" in res && "Message" in res && "Response" in res;
// }

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
            // const data = JSON.parse(res.data as string) as SmugmugResponse;
            const typedRes = res.data as unknown as SmugmugResponse;

            const albumKeys = typedRes.Response.Album.map((a) => a.AlbumKey);

            console.log(albumKeys);
            return albumKeys;
        })
        .catch((err) => {
            console.log(err);
            return [] as string[];
        });

    return result;
};

export const getAlbumImages = async (albumKey: string) => {
    const result = await instance
        .get(`/album/${albumKey}!images`)
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

export const getRandomImageUrl = async (albumKeys: string[]) => {
    if (!albumKeys.length) return undefined;

    let randomIndex = Math.floor(Math.random() * albumKeys.length);
    const randomAlbumKey = albumKeys[randomIndex];

    const albumImages = await getAlbumImages(randomAlbumKey);

    if (!albumImages.length) return undefined;

    randomIndex = Math.floor(Math.random() * albumImages.length);
    const randomImageKey = albumImages[randomIndex];

    const imageUrl = await getImageUrl(randomImageKey);

    return imageUrl;
};