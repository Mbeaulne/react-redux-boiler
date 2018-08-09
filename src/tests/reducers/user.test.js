/**
 * @jest-environment node
 */

import * as actions from '../../actions';
import reducer from '../../reducers/user';

describe('Users actions and reducer', () => {
  const users = [{ name: 'Owen', age: 2 }, { name: 'Fitz', age: 11 }];
  it('runs updateUser action', () => {
    const actionCalled = actions.updateUser(users);
    expect(actionCalled.type).toEqual('ADD_USER');
    expect(actionCalled.payload).toEqual(users);
  });
});
