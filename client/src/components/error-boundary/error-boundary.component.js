import React from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error-boundary.styles';


class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    //Lifecycle method that has access to React's error boundary; catches error of any children
    static getDerivedStateFromError(error) {
        //process error
        return {
            hasErrored: true
        };
    }

    //access to error and info (which component, etc.)
    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;