import React from 'react';
import './index.scss';

class ErrorBoundary extends React.Component {
  constructor ( props ) {
    super ( props );
    this.state = { hasError : false, error : null };
  }

  shouldComponentUpdate () {
    return true;
  }

  componentDidCatch ( error, errorInfo ) {
    console.log ( error, errorInfo );
  }

  static getDerivedStateFromError ( error ) {
    return { hasError : true, error };
  }

  render () {
    const { state : { hasError, error }, props : { children } } = this;

    return hasError
      ? <h1 className="danger">{ error } { `Error loading component!` }</h1>
      : children;
  }
}

export default ErrorBoundary;
