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
