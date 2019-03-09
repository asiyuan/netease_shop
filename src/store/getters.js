export default {
  knowLedgeFoundSmall (state) {
    return state.knowledgeFound.filter(item => {
      return item.style === 2
    })
  }
}