const User = require('../models/user.model');

/*async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur serveur lors de la création de l\'utilisateur' });
  }
}*/

function getUser(req, res) {
    userSchema.find((err, docs) => {
        if (!err) return res.status(200).send(docs)
    }).sort({createdAt: -1});
}

async function createUser(req, res) {
    const newUser = new User({
      username: req.body.username, 
      email: req.body.username, 
      password: req.body.password,
    });
    try {
      const post = await newUser.save();
      return res.status(201).json({message: 'User created', user: newUser});
    } catch {
      return res.status(400).json({message: err});
    }
}

module.exports = {
  createUser,
  getUser
};