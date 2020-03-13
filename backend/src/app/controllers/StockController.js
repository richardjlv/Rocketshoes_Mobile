import * as Yup from 'yup';

import Stock from '../models/Stock';

class StockController {
  async store(req, res) {
    const schema = Yup.object().shape({
      amount: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { amount } = req.body;

    const stock = await Stock.create({
      amount,
    });

    return res.json(stock);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      amount: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { product_id } = req.params;

    const stock = await Stock.findOne({
      where: {
        product_id,
      },
    });

    if (!stock) {
      return res.status(400).json({ error: "Stock don't exists." });
    }

    const { amount } = await stock.update(req.body);

    return res.json({ product_id, amount });
  }
}

export default new StockController();
