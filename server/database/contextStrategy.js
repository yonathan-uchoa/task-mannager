
class ContextStrategy {
  constructor(database) {
    this._database = database;
  }
  isConnected() {
    return this._database.isConnected();
  }
  connect() {
    return this._database.connect()
  }
  create(item) {
    return this._database.create(item);
  }
  read(item) {
    return this._database.read(item);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
}

module.exports = ContextStrategy;
