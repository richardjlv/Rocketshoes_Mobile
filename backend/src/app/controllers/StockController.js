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
}

export default new StockController();
