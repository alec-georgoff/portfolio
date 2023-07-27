import React from 'react';
import UMLogo from '../images/um_logo.png';

const EducationPage = () => (
    <div className="education">
        <h2>Education</h2>

        <img src={UMLogo} className="um-logo" />

        <section>
            <div className="education-degree">
                B.S. - Biomedical Engineering
            </div>
            <div className="education-dates">Sep '13 - May '17</div>
            <div className="education-school-name">
                <a href="https://umich.edu">University of Michigan</a>
            </div>
            <div className="education-location">Ann Arbor, MI</div>
        </section>
    </div>
);

export default EducationPage;
