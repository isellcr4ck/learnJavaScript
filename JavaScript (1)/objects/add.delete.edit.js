const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
}

// Add elements
student.experience = 6

// Delete elements
// delete - key word

delete student.experience
console.log(student)

// Edit elements

student.hasExperienceInReact = true
console.log(student)