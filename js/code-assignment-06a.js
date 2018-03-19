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

for (let i = 0; i < projects.length; i++) {
  console.log('Index position' + i + 'title:' + projects[i].title)
  if (projects[i].thumb === true){
    console.log('images/ss-project-' + projects[i].id + '.png')
  } else {
    console.log('images/no-preview.pgn')
  }
}

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
