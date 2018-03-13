module.exports = {
  getProducts(req, res) {
    const db = req.app.get('db');
    db
      .get_products([req.params.id])
      .then(products => res.status(200).json(products))
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  updateProduct(req, res) {
    const db = req.app.get('db');
    db
      .update_product([req.body.shelfid, req.body.binid, req.body.name, req.body.price])
      .then(() => {
        res.status(200).json();
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  deleteProduct(req, res) {
    const db = req.app.get('db');
    db
      .delete_product([req.query.shelfid, req.query.binid])
      .then(() => {
        res.status(200).json();
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },

  createProduct(req, res) {
    const db = req.app.get('db');
    db
      .create_product([req.body.shelfid, req.body.binid, req.body.name, req.body.price])
      .then(() => {
        res.status(200).json();
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },
};
