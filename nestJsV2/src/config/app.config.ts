export default () => ({
    enviroment: process.env.NODE_ENV || 'development',
    database: {
        usernameDB: process.env.USERNAMEDB,
        passwordDB: process.env.PASSWORDDB
    }
})