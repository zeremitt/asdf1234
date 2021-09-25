const { User } = require('../../models/user.model')

exports.resolvers = {
    Query: {
        getUser: (root, args) => {
            let query = {}
            if ('username' in args)
                query.username = args.username
        }
    },
    Mutation: {
        createUser: (root, args) => {
            const user = new User()
            if('username' in args)
                user.username = args.username
            if('password' in args)
                user.password = args.password
            return user.save({validateBeforeSave: true})
        }
    }
}