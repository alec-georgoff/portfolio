import React, { ReactElement } from 'react';

interface ApplicationWrapperProps {
    children: ReactElement;
}

const ApplicationWrapper = (props: ApplicationWrapperProps) => (
    <div style={{ maxWidth: '80%', margin: '3rem 1rem' }}>{props.children}</div>
);

export default ApplicationWrapper;
