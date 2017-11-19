import * as actions from '../actions'
import reducer from '../reducer'

describe('Posts actions and reducer', () => {
  const newPost = {
    title: 'Javascripts 101',
    body: 'Javascript is not like java?'
  }

  it('runs addPosts action', () => {
    const actionCalled = actions.addPosts(newPost)
    expect(actionCalled.type).toEqual('ADD_POSTS')
    expect(actionCalled.payload).toEqual(newPost)
  })

  it('runs reducer with no action', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        'body': 'how are things',
        'title': 'hey dudes'
      }
    ])
  })

  it('runs reducer with newPost', () => {
    expect(reducer(undefined, actions.addPosts(newPost))).toEqual([
      {
        'body': 'how are things',
        'title': 'hey dudes'
      },
      newPost
    ])
  })
})
