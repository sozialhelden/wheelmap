jest.unmock('../WidgetBuilder');

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const WidgetBuilder = require('../WidgetBuilder');

describe('React Widget component', function () {
  it('loads correctly', function () {
    const component = TestUtils.renderIntoDocument(
      <WidgetBuilder.WrappedComponent
        width={100}
        height={400}
        lat={50}
        lon={50}
        providers={[]}
        categories={[]}
        src={'http://src.src'}
        resource={'http://resource.src'}
      />
    );

    expect(component).not.toBeNull();
  });
});
