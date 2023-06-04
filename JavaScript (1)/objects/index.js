const developer = {
    name: 'Spartak',
    job: 'Front-End разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJS',
    }
}

// Функциональная цепочка ?.
console.log(developer.jobAllInfo.framework)
/*
if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
    console.log('Разработчик уже знает фрэймворм')
} else {
    console.log('Разработчик ещё не знает фрэймворк')
}
*/

if (developer?.jobAllInfo?.framework) {
    console.log('Разработчик уже знает фрэймворм')
} else {
    console.log('Разработчик ещё не знает фрэймворк')
}










// // Получение значения по ключу 

// // 1 способ - рекомендованный способ
// console.log('name', developer.name)
// console.log('jobAllInfo', developer.jobAllInfo)

// // 2 способ
// console.log('name', developer['name'])

// const key = 'name'
// console.log('Name', developer[key])

// console.log('Framework', developer.jobAllInfo.framework)
// console.log('Type', developer['jobAllInfo']['type'])
