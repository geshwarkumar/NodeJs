module.exports = {
    HOST: "10.132.49.180",
    PORT: "1433",
    USER: "sa",
    PASSWORD: "nicsi",
    DB: "CRUDSqlNodeDB",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};