const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw Error('No element with that name')
  }
}

export default getElement
