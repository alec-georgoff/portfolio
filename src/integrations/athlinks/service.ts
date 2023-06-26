import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://alaska.athlinks.com/Athletes/Api/',
    timeout: 10000,
});

export interface AthlinksRace {
    Race: {
        RaceName: string;
        RaceDate: string;
        Courses: {
            CourseName: string;
        }[];
        Count0: number;
        CountG: number;
        CountA: number;
        Rank0: number;
        RankG: number;
        RankA: number;
        TicksString: string;
    };
}

interface AthlinksResponse {
    Success: boolean;
    ErrorMessage: string | null;
    Result: {
        raceEntries: {
            MasterCount: number;
            List: AthlinksRace[];
        };
    };
}

export const getRaceResults = async () => {
    const result = await instance
        .get('373549733/Races')
        .then((res) => {
            const typedRes = res.data as unknown as AthlinksResponse;

            const raceResults = typedRes.Result.raceEntries.List;

            return raceResults;
        })
        .catch((err) => {
            console.log(err);
            return [] as AthlinksRace[];
        });

    return result;
};
