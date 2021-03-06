import Sequelize from 'sequelize';

import File from '../app/models/File';
import Product from '../app/models/Product';
import Stock from '../app/models/Stock';
import databaseConfig from '../config/database';

const models = [File, Product, Stock];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
