import React from "react";
import "./error-button.css";


interface IErrorButtonState {
  renderError: boolean
}

interface IErrorButtonProps {
  children: React.ReactNode
}

class ErrorButton extends React.Component<IErrorButtonProps, IErrorButtonState> {
  state: IErrorButtonState = {
    renderError: false
  };

  handleSwitchButton = (): void => {
    this.setState({
      renderError: true
    })
  };

  render() {
    if (this.state.renderError) {
      // @ts-ignore
      this.foo.bar = 0;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={ this.handleSwitchButton }
      >
        { this.props.children }
      </button>
    );
  }
}


export default ErrorButton;
