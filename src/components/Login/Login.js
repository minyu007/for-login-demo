import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// import {  } from '../../actions';

class Home extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return  (
    	<div>
    		login page
    	</div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
