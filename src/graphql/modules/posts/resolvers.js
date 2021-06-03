import User from '../../models/User'

export default{
    Query:{
        post: () => Post.find(),
        post:(_, { id }) => Post.findById(id),
    },
    Mutation:{
        createPost: (_, { data }) => Post.create(data),
        updatePost: (_, { data }) => Post.findOneAndUpdate(id, data, { new: true }),
        deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
    }
}