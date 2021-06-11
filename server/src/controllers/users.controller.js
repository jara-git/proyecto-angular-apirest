//objeto de usuario
const userCtrl = {};

const User = require("../models/User");

//obtener usuarios
userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

//crear usuarios
userCtrl.createUser = async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        dni: req.body.dni,
        bday: req.body.bday,
        favColor: req.body.favColor,
        sex: req.body.sex

    });
    await newUser.save();
    res.json({ status: "Usuario creado" });
};

//obtener un usuario
userCtrl.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);
};

//actualizar usuarios
userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Usuario actualizado" });
};

//borrar usuarios
userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "Usuario borrado" });
};  

module.exports = userCtrl;
