function showPeople(people) {
  let newPeople = people
    .map((person) => {
      const { name, job } = person
      return `<p>this is ${name} he is a <strong>${job}</strong> </p>`
    })
    .join(' ')

  return newPeople
}

export default showPeople
