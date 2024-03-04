const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
    const toDO = await TodoModel.find();
    res.send(toDO);
};

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;

    TodoModel.create({ text })
        .then((data) => {
            console.log('Added Successfully...');
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            console.error('Error occurred while saving todo:', err);
            res.status(500).send('Error occurred while saving todo.');
        });
};

module.exports.updateTodo = async (req,res) => {
    const{_id,text} = req.body
    TodoModel
    .findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updated Successfully"))
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req,res) => {
    const{_id} = req.body
    TodoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("deleted Successfully"))
    .catch((err) => console.log(err))
}