import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';

import AppFrame from '../../components/AppFrame';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({ });

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withTranslation(['common']),
)(AppFrame);
