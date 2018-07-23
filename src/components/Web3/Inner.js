import React from 'react';
import { connect } from 'react-redux';

const Inner = (props) => (
  <div>

    {JSON.stringify(props.accounts)}
  </div>
)

const mapStateToProps = (state) => {
  console.log(state);
  
  return {

  }
}

const mapDispatchToProps = dispatch => (
  {
    
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Inner);