import {
  createDisconnectChatSocketAction,
  createSignOutUserAction,
  store,
} from '../redux'

export function useSignOut() {
  return () => {
    store.dispatch(createSignOutUserAction())
    store.dispatch(createDisconnectChatSocketAction(undefined))
  }
}
