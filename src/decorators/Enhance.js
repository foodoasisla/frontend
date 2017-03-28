/* Libraries */
import React from 'react';


const Enhance = (ComposedComponent, settings) => class extends React.Component {
  componentDidMount() {

  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};

export default Enhance;
