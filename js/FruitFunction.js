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
