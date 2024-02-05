const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  // Do we need categories??
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'candles' },
    // { name: 'Household Supplies' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Ubelicious',
      description:
        'Sweet, Nutty, and Mellow with a hint of Vanilla and Creamy Coconut.',
      image: 'ubelicious12.jpg',
      category: categories[0]._id,
      size: '12oz',
      price: 40.00,
      quantity: 1,
    },
    {
      name: 'Ubelicious',
      description:
      'Sweet, Nutty, and Mellow with a hint of Vanilla and Creamy Coconut.',
      image: 'ubelicious8.jpg',
      category: categories[0]._id,
      size: '8oz',
      price: 25.00,
      quantity: 1,
    },
    {
      name: 'Pandan',
      description:
        'Fresh Pandan Leaves, Coconut, and Vanilla.',
      image: 'kalamansi.jpg',
      category: categories[0]._id,
      size: '8oz',
      price: 25.00,
      quantity: 1,
    },
    {
      name: 'Kalamansi Flower',
      description:
        'Calamansi, Lime Flowers, and Citrus Leaves.',
      image: 'kalamansi.jpg',
      category: categories[0]._id,
      size: '12oz',
      price: 25.00,
      quantity: 1,
    },
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
