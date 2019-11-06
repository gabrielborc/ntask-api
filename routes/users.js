module.exports = app => {
    const Users = app.conn.db.models.Users;

    app.get("/users", (req, res) => {
        Users.findAll({
            attributes: ["id", "name", "email"]
        })
        .then(users => { 
            res.json({users: users});
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });

    app.get("/users/:id", (req, res) => {
        Users.findById(req.params.id, {
            attributes: ["id", "name", "email"]
        })
        .then(result => { 
            if (result) {
                res.json(result)
            } else {
                res.sendStatus(404);
            }
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });

    app.post("/users", (req, res) => {
        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

    app.delete("/users/:id", (req, res) => {
        Users.destroy({where: {id: req.params.id}})
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    });

}