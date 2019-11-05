module.exports = app => {
    app.conn.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`NTask API - porta ${app.get("port")}`);
        });
    });
}