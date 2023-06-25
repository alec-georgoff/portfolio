import React from 'react';
import { SmugmugWidget } from '../integrations/smugmug/SmugmugWidget';

const HobbiesPage = () => (
    <div>
        <h2>Hobbies</h2>

        <SmugmugWidget />

        <section>
            <h1 className="hobby-title">Cycling</h1>
            <h2 className="hobby-subtitle">2022 Stats:</h2>
            <ul>
                <li>Rides Logged: 42</li>
                <li>Miles Ridden: 982.6</li>
                <li>Feet of Elevation Gained: 44,511</li>
            </ul>
        </section>

        <section>
            <h1 className="hobby-title">Photography</h1>
            <h2 className="hobby-subtitle">
                <a href="https://georgoff.smugmug.com">Portfolio</a>
            </h2>
        </section>

        <section>
            <h1 className="hobby-title">Running</h1>
            <h2 className="hobby-subtitle">
                <a href="https://www.athlinks.com/athletes/373549733">
                    Athlinks Profile
                </a>
            </h2>
        </section>
    </div>
);

export default HobbiesPage;
