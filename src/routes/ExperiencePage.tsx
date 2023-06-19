import React from 'react';

const ExperiencePage = () => (
    <div>
        <h2>Work Experience</h2>

        <section className="job">
            <div className="job-title-and-date-row">
                <div className="job-title">Software Engineer</div>
                <div className="job-dates">Feb 22 - Nov 22</div>
            </div>
            <div className="job-company-name">
                <a href="https://convoy.com">Convoy</a>
            </div>
            <div className="job-location">Seattle, WA</div>

            <ul>
                <li>
                    Built a heuristics model for predicting trailer loading
                    delays prior to carrier arrival, resulting in a 55%
                    reduction in carrier reported issues for trailer delays
                </li>
                <li>
                    Designed and built a feature to allow shipping companies to
                    define their own late tolerance for shipments, reducing
                    undesired outreach emails by over 50%
                </li>
            </ul>
        </section>

        <section className="job">
            <div className="job-title-and-date-row">
                <div className="job-title">Software Engineer</div>
                <div className="job-dates">Feb 20 - Jul 21</div>
            </div>
            <div className="job-company-name">
                <a href="https://dmcinfo.com">DMC</a>
            </div>
            <div className="job-location">Seattle, WA</div>

            <ul>
                <li>
                    Maintained full stack web application for self-guided
                    apartment touring, driving growth for a client startup
                    company
                </li>
                <li>
                    Designed and implemented new features in existing code base,
                    including third-party API integrations and end user UI/UX
                    updates
                </li>
                <li>
                    Worked within cloud computing environment, regularly
                    troubleshooting deployment pipelines
                </li>
                <li>
                    Created single page web application for camera lens
                    manufacturing client, transforming UX Designer wireframes
                    into a fully functional, interactive product
                </li>
            </ul>
        </section>

        <section className="job">
            <div className="job-title-and-date-row">
                <div className="job-title">Wear Test Analyst</div>
                <div className="job-dates">Apr 19 - Feb 20</div>
            </div>
            <div className="job-company-name">
                <a href="https://brooksrunning.com">Brooks Running</a>
            </div>
            <div className="job-location">Seattle, WA</div>

            <ul>
                <li>
                    Managed user perception surveys in Qualtrics, designing
                    questions to extract key fit, feel, and ride characteristics
                    of 3 running shoe models to align with development
                    requirements
                </li>
                <li>
                    Wrote reports summarizing testing results for shoes in
                    development, presenting key findings and recommendations to
                    stakeholders throughout footwear department
                </li>
            </ul>
        </section>

        <section className="job">
            <div className="job-title-and-date-row">
                <div className="job-title">Post Bachelor Fellow</div>
                <div className="job-dates">Sep 17 - Apr 19</div>
            </div>
            <div className="job-company-name">
                <a href="https://uw.edu">University of Washington</a>
            </div>
            <div className="job-location">Seattle, WA</div>

            <ul>
                <li>
                    Developed mathematical models of malaria transmission at{' '}
                    <a href="https://healthdata.org">
                        The Institute for Health Metrics and Evaluation
                    </a>{' '}
                    using R
                </li>
                <li>
                    Analyzed and mapped GPS travel data for humans in Southeast
                    Asia to incorporate travel behavior into existing malaria
                    transmission models
                </li>
            </ul>
        </section>
    </div>
);

export default ExperiencePage;
