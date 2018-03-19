let project1 = {
  id: 1,
  title: 'GEOG 4046 Assignment Portfolio',
  hasThumbnail: true
}

let project2 = {
  id: 2,
  title: 'Book Assignment1',
  hasThumbnail: true
}

let projects = [
  project1,
  project2
]

function describeFruit (fruit) {
  let description = 'The ' + fruit + ' is a delicious snack.'
  return description
}

let my favfruit = 'apple'
let description = descriptFruit ('apple')
console.log(description)

function createTitle (i) {
  return projects[i].title
}

fucntion createImageSrc (i) {
  if (project[i].thumb === true){
    teturn 'images/ss-project-' + project[i].id + '.png'
  } else {
    return 'images/no-preview.png'
  }
}
