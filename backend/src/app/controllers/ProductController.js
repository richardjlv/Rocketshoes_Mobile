import * as Yup from 'yup';

import File from '../models/File';
import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      order: ['price'],
      attributes: ['id', 'title', 'price'],
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(products);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, price } = req.body;

    const product = await Product.create({
      title,
      price,
    });

    return res.json(product);
  }
}

export default new ProductController();
