export const TOGGLE_OPTIONS = 'OPTIONS/TOGGLE_OPTIONS'

export const toogleOption = optionId => {
  return {
    type: TOGGLE_OPTIONS,
    payload: {
      optionId
    }
  }
}