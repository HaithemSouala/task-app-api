const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'mike.test@gmail.com',
    password: 'clapOsmlksd!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Ekim',
    email: 'ekim.test@gmail.com',
    password: 'clapOsmlksd??',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}


const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Task One',
    completed: false,
    author: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Secode Task',
    completed: false,
    author: userOne._id
}


const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third Task',
    completed: true,
    author: userTwo._id
}

const setupDatabase = async () => {
    // Cleaning database
    await User.deleteMany()
    await Task.deleteMany()
    // Init Users
    await new User(userOne).save()
    await new User(userTwo).save()
    // Init Tasks
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}