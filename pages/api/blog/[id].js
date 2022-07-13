import { blogList } from '../../../database/blog';

export default function handler(req, res) {
    const id = Number(req.query.id);
    const result = blogList.find((blog) => blog.id === id);
    if(result){
    res.json(result);
    } else {
        res.send('no data');
    }
}
