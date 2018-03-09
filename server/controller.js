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

  getProduct(req, res) {
    const db = req.app.get('db');
    db
      .get_product([req.params.shelf, req.params.bin])
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json();
      });
  },
};
