import React from "react";
import { ErrorMessage } from "./index";


interface IErrorBoundryState {
  hasError: boolean
}

class ErrorBoundry extends React.Component<object, IErrorBoundryState> {
  state: IErrorBoundryState = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />
    }

    return this.props.children
  }
}


export default ErrorBoundry;
