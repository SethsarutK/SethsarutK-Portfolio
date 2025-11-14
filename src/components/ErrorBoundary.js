import React from 'react';
import '../styles/ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to your error tracking service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-icon">
              ⚠️
            </div>
            
            <h1>Oops! Something went wrong</h1>
            <p>We're sorry for the inconvenience. Here's what you can do:</p>
            
            <div className="error-actions">
              <button
                onClick={() => window.location.reload()}
                className="primary-button"
              >
                Refresh Page
              </button>
              
              <button
                onClick={() => window.history.back()}
                className="secondary-button"
              >
                Go Back
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="error-details">
                <h3>Error Details</h3>
                <pre>{this.state.error && this.state.error.toString()}</pre>
                <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;