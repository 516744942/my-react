export function bindActionCreators(creators, dispatch) {
  const obj = {}
  for (var key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }
  return obj
}

export function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}