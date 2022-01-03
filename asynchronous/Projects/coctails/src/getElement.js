function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) return element

  throw new Error('no element with that selector')
}

export default getElement
