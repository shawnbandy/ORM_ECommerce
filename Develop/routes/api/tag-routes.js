const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      attributes: ['id', 'tag_name'],
      include:
      [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
      ]
    });
    if (!tagData) {
      res.status(404).json({ message: 'no tags found' });
      return
    }
    res.status(200).json(tagData);
  }
  catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      attributes: ['id', 'tag_name'],
      include:
        [{
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock']
        }]
    })

    if (!tagData) {
      res.status(404).json({ message: 'No tag ID Found' })
      return;
    }
    res.status(200).json(tagData)
  }
  catch (error) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      id: req.body.id,
      tag_name: req.body.tag_name
    })
    res.status(200).json(req.body.tag_name + " has been created")
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update({
      id: req.body.id,
      tag_name: req.body.tag_name
    },
      {
        where: {
          id: req.params.id
        }
      })
    res.status(200).json(tagData)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(deleteTag)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
