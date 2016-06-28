const React = require('react');
const { bindActionCreators } = require('redux');
const { createStructuredSelector } = require('reselect');
const { connect } = require('react-redux');

const Section = require('./Section');
const { ACCESSIBILITY } = require('../models/sections');
const Row = require('../../common/Row');
const Form = require('../../common/Form');
const StatusDropdown = require('../../common/StatusDropdown');
const Node = require('../../common/models/Node');
const selectors = require('../selectors');
const actions = require('../actions');

const { func, instanceOf, bool } = React.PropTypes;

class AccessibilitySection extends React.Component {
  static propTypes = {
    onClickAction: func.isRequired,
    onNodeChange: func.isRequired,
    node: instanceOf(Node).isRequired,
    loading: bool.isRequired
  };

  onChangeStatus(attr, status) {
    const { onNodeChange, node } = this.props;

    onNodeChange(node.set(attr, status));
  }

  onChange(attr, event) {
    const { onNodeChange, node } = this.props;

    onNodeChange(node.set(attr, event.target.value));
  }

  onChangeWheelchairStatus = (status) => {
    this.onChangeStatus('wheelchair', status);
  };

  onChangeWheelchairToiletStatus = (status) => {
    this.onChangeStatus('wheelchairToilet', status);
  };

  onChangeWheelchairDescription = (event) => {
    this.onChange('wheelchairDescription', event);
  };

  render() {
    const { onClickAction, node, loading } = this.props;

    return (
      <Section section={ACCESSIBILITY} onClickAction={onClickAction} loading={loading}>
        <div className="nodes-new-content-section--status-status">
          <Row>
            <Row.Span rows={6}>
              <StatusDropdown
                type="wheelchair"
                status={node.wheelchair}
                onChange={this.onChangeWheelchairStatus}
              />
            </Row.Span>
            <Row.Span rows={6}>
              <StatusDropdown
                type="toilet"
                status={node.wheelchairToilet}
                onChange={this.onChangeWheelchairToiletStatus}
              />
            </Row.Span>
          </Row>
        </div>
        <Form.ControlGroup labelFor="wheelchair_description" labelScope="activerecord.attributes.poi.note">
          <Form.Controls>
            <Form.Textarea
              name="wheelchair_description"
              onChange={this.onChangeWheelchairDescription}
              value={node.wheelchairDescription}
              rows={5}
            />
          </Form.Controls>
        </Form.ControlGroup>
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: actions.navigateToNextSection,
    onNodeChange: actions.changeNode
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccessibilitySection);
