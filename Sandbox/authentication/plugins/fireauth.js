import { auth } from '@/utils/fireinit.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.commit('setUser', user))
      }
      return resolve()
    })
  })
}

/*
Slight change found on his github repo
return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      store.commit('setUser', user)
      resolve()
    })
  })
*/