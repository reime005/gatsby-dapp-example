import React from 'react';
import { connect } from 'react-redux';

const Inner = (props) => (
  <div>

    {JSON.stringify(props)}
  </div>
)

const mapStateToProps = state => (
  {
    ...state
  }
)

const mapDispatchToProps = dispatch => (
  {
    
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Inner);