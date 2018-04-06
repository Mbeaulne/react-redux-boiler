/**
 * @jest-environment node
 */

import { selectUserName } from './userSelector';

describe('User Selector', () => {
  const state = {
    user: {
      name: 'Test User'
    }
  };
  it('should select user name', () => {
    const UserName = selectUserName(state);
    expect(UserName).toBe('Test User');
  });
});
