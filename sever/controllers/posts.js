import postMessage from '../models/postMessage.js'

export const getPost = async (req, res) => {
    try {
        res.send('Post Create');
        // const postMessages = await postMessage.find();
        // res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req,res) => {
    res.send('Post Create');
}