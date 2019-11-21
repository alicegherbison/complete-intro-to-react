import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error('Error boundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was a problem with this listing link.{' '}
          <Link to="/">Go back home</Link>.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
