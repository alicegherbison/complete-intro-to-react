import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error('Error boundary caught an error', error, info);
  }

  // called every time props or state change - the equivalent of useEffect
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

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
