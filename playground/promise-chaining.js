require('../src/db/mongoose')
const User = require('../src/models/user')


// 5cdf04bc41e399313c646f0f

/* User.findByIdAndUpdate('5cdf75b9be373535fc20cc19', {
    age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
}) */

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return {
        user,
        count
    }
}

updateAgeAndCount('5cdf04bc41e399313c646f0f', 2).then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})