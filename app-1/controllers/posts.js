import Post from '../models/post';

export default {
  async index(req, res) {
    const posts = await Post.findAll();
    return res.status(200).send(posts);
    // try {
    //
    // } catch (err) {
    //   return res.status(500).send(err);
    // }
  }
};
