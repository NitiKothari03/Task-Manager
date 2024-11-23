
const config = {
    development: {
        mongodb_uri: 'mongodb://localhost:27017/task-manager',
        port: 3000
    },
};

module.exports = config[process.env.NODE_ENV || 'development'];