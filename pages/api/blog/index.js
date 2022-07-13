import { blogList } from '../../../database/blog';

export default function handler(req, res) {
    res.json(blogList)
}
