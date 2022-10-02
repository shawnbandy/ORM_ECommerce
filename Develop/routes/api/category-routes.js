const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint



router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'no categories found' })
    }
    res.status(200).json(categoryData)
  }
  catch (error) {
    res.status(500).json(error)
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })

    if (!categoryData) {
      res.status(404).json({ message: 'No Category ID Found' })
      return;
    }
    res.status(200).json(categoryData);
  }
  catch (error) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      id: req.body.id,
      category_name: req.body.category_name
    })
    res.status(200).json(req.body.category_name + " has been created")
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update({
      id: req.body.id,
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      })
    res.status(200).json(updateCategory)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(req.params.category_name + ' has been deleted')
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
