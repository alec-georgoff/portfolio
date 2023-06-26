import React, { useCallback, useEffect, useState } from 'react';
import { AthlinksRace, getRaceResults } from './service';
import { Spinner } from 'react-bootstrap';

export const AthlinksWidget = () => {
    const [races, setRaces] = useState<AthlinksRace[] | undefined>();
    const [selectedRace, setSelectedRace] = useState<
        AthlinksRace | undefined
    >();

    const refreshRace = useCallback(() => {
        if (races?.length) {
            const randomIndex = Math.floor(Math.random() * races.length);
            setSelectedRace(races[randomIndex]);
        }
    }, [races]);

    useEffect(() => {
        void (async () => {
            const raceResults = await getRaceResults();
            setRaces(raceResults);
        })();

        refreshRace();

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }, []);

    const handleRefreshRace = () => {
        setSelectedRace(undefined);
        refreshRace();
    };

    return (
        <div>
            {selectedRace ? (
                <div>
                    <span onClick={() => handleRefreshRace()}>
                        {selectedRace.Race.RaceName}
                    </span>
                </div>
            ) : (
                <Spinner animation="border" />
            )}
        </div>
    );
};
