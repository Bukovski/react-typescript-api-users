import React from "react";
import { DotsRoller } from "../loader";
import { ErrorMessage } from "../error";


interface IwithLoadIndicatorState {
  loading: boolean,
  error: boolean
}

interface IwithLoadIndicatorProps {
  onLoaded: () => void,
  onLoadStart: () => void,
  onError: () => void,
  hasData: boolean
}


const withLoadIndicator = <P extends IwithLoadIndicatorProps>(
  WrappedComponent: React.ComponentType<P>
) => class extends React.Component<
  Omit<P, "onLoaded"|"onLoadStart"|"onError"|"hasData">,
  IwithLoadIndicatorState
  > {
    state: IwithLoadIndicatorState = {
      loading: true,
      error: false,
    };
    
    onLoadStart = (): void => {
      this.setState({
        loading: true
      });
    };
    
    onLoaded = (): void => {
      this.setState({
        loading: false,
        error: false
      })
    };
    
    onError = (): void => {
      this.setState({
        error: true,
        loading: false
      })
    };
    
    render() {
      const { loading, error } = this.state;
      
      const errorMessage = error ? <ErrorMessage /> : null;
      const spinner = loading ? <DotsRoller/> : null;
      
      const hasData = !(loading || error);
      
      return <WrappedComponent
        {...this.props as P}
        onLoadStart={this.onLoadStart}
        onLoaded={this.onLoaded}
        onError={this.onError}
        hasData={hasData}
      >
        { errorMessage }
        { spinner }
      </WrappedComponent>;
    }
  };


export default withLoadIndicator;
