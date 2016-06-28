jest.dontMock('../initNode');

import { NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, enterContent, changeNode, changeMapCenter, load, setErrors } from '../../actions';
import { replace } from '../../../common/actions/router';
import Node from '../../../common/models/Node';
import api from '../../../common/helpers/api';

const initNode = require('../initNode').default;

describe('initNode', () => {
  it('redirects to name & category section if no node in query', () => {
    const gen = initNode();

    expect(gen.next().value)
      .toTake(ENTER_CONTENT);

    const nextState = { params: {}, location: { query: {} } };
    const action = enterContent(nextState);

    expect(gen.next(action).value)
      .toPut(replace.newNodeSectionPath(NAME_CATEGORY));

    expect(gen.next().done)
      .toBe(true);
  });

  it('initializes node', () => {
    const gen = initNode();

    expect(gen.next().value)
      .toTake(ENTER_CONTENT);

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' };
    const nextState = { params: {}, location: { query: { node: queryNode } } };
    const action = enterContent(nextState);

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    expect(gen.next(action).value)
      .toCall(Node.create, { lat: node.lat, lon: node.lon, title: node.title });

    expect(gen.next(node).value)
      .toPut(changeNode(node));

    expect(gen.next().value)
      .toCall([ node, node.location ]);

    const location = { lat: node.lat, lon: node.lon };

    expect(gen.next(location).value)
      .toPut(changeMapCenter(location));

    expect(gen.next().value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(api.validateNode, node);

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(true);
  });

  it('redirects to name & category section if node is invalid', () => {
    const gen = initNode();

    expect(gen.next().value)
      .toTake(ENTER_CONTENT);

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' };
    const nextState = { params: {}, location: { query: { node: queryNode } } };
    const action = enterContent(nextState);

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    expect(gen.next(action).value)
      .toCall(Node.create, { lat: node.lat, lon: node.lon, title: node.title });

    expect(gen.next(node).value)
      .toPut(changeNode(node));

    expect(gen.next().value)
      .toCall([ node, node.location ]);

    const location = { lat: node.lat, lon: node.lon };

    expect(gen.next(location).value)
      .toPut(changeMapCenter(location));

    expect(gen.next().value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(api.validateNode, node);

    const validationError = new api.HTTPError();
    validationError.errors = { error: 'error message' };

    expect(gen.throw(validationError).value)
      .toPut(replace.newNodeSectionPath(NAME_CATEGORY));

    expect(gen.next().value)
      .toPut(setErrors(validationError.errors));

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(true);
  });
});
