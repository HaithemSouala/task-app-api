require('../src/db/mongoose')
const Task = require('../src/models/task')


/* Task.findByIdAndDelete('5cdeeb0359b2190c5caa44cc').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
}) */

const deleteTaskAndCount = async (id, completed) => {
    const deletedTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('5cdf0737321694148c4c69f', false).then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})