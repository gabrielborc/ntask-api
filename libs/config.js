module.exports = {
    database: "ntask",
    username: "ntask",
    password: "ntask123",
    params: {
        host: "localhost",
        dialect: "mariadb",
        dialectOptions: {
            timezone: 'America/Sao_Paulo',
        },
        define: {
            underscored: true
        }
    }
}