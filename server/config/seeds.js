const db = require('./connection');
const { User, Product } = require('../models');
const cleanDB = require('./cleanDB');



db.once('open', async () => {
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');


  const products = await Product.insertMany([
    {
      name: 'Ubelicious - 12oz',
      description: "The Essence of Purple Yam Bliss. Indulge your senses with the enchanting aroma of our Ube Delight scented candle. This candle captures the essence of the beloved Filipino purple yam, known as 'ube,' creating an aromatic experience that's as delightful as it is unique.",
      fragranceNotes: "TOP NOTES: Sweet Ube As you light the candle, the sweet and earthy top notes of ube unfurl, immediately immersing you in the delectable world of this beloved Filipino ingredient. MIDDLE NOTES: Creamy Coconut The heart of the fragrance reveals a creamy, coconut undertone. It complements the ube's sweetness, evoking memories of traditional Filipino desserts and tropical indulgence. BASE NOTES: Vanilla Elegance The base notes introduce a touch of vanilla elegance. This velvety richness adds depth to the fragrance, creating a balanced and harmonious aroma.",
      signatureNotes: "Purple Yam Symphony Throughout the candle's burn, a signature note of 'Purple Yam Symphony' weaves these elements together into a melodious and captivating fragrance.",
      inspiration: "Ube Delight is inspired by the rich culinary heritage of the Philippines, where ube is a cherished ingredient used in a wide array of sweet treats. This candle captures the essence of Filipino culture and cuisine.",
      intendedExperience: "Lighting the Ube Delight scented candle invites the essence of Filipino tradition and tropical delight into your space. It evokes the comfort of homemade desserts and the warmth of Filipino hospitality. Allow this candle to transport you to a place of sweetness and nostalgia, all within the soothing ambiance of your home.",
      pleaseNote: 'Please note that the Ube Delight scented candle is meticulously crafted with high-quality soy wax and premium fragrance oils to ensure a clean and luxurious burn, allowing you to fully enjoy the unique and delightful scent of ube.',
      image: 'Ubelicious_12oz.jpg',
      size: '12oz',
      price: 40.00,
      quantity: 1,
    },
    {
      name: 'Ubelicious - 8oz',
      description: "The Essence of Purple Yam Bliss. Indulge your senses with the enchanting aroma of our Ube Delight scented candle. This candle captures the essence of the beloved Filipino purple yam, known as 'ube,' creating an aromatic experience that's as delightful as it is unique.",
      fragranceNotes: "TOP NOTES: Sweet Ube As you light the candle, the sweet and earthy top notes of ube unfurl, immediately immersing you in the delectable world of this beloved Filipino ingredient. MIDDLE NOTES: Creamy Coconut The heart of the fragrance reveals a creamy, coconut undertone. It complements the ube's sweetness, evoking memories of traditional Filipino desserts and tropical indulgence. BASE NOTES: Vanilla Elegance The base notes introduce a touch of vanilla elegance. This velvety richness adds depth to the fragrance, creating a balanced and harmonious aroma.",
      signatureNotes: "Purple Yam Symphony Throughout the candle's burn, a signature note of 'Purple Yam Symphony' weaves these elements together into a melodious and captivating fragrance.",
      inspiration: "Ube Delight is inspired by the rich culinary heritage of the Philippines, where ube is a cherished ingredient used in a wide array of sweet treats. This candle captures the essence of Filipino culture and cuisine.",
      intendedExperience: "Lighting the Ube Delight scented candle invites the essence of Filipino tradition and tropical delight into your space. It evokes the comfort of homemade desserts and the warmth of Filipino hospitality. Allow this candle to transport you to a place of sweetness and nostalgia, all within the soothing ambiance of your home.",
      pleaseNote: 'Please note that the Ube Delight scented candle is meticulously crafted with high-quality soy wax and premium fragrance oils to ensure a clean and luxurious burn, allowing you to fully enjoy the unique and delightful scent of ube.',
      image: 'Ubelicious_8oz.jpg',
      size: '8oz',
      price: 25.00,
      quantity: 1,
    },
    {
      name: 'Pandan',
      description: "Immerse yourself in the lush, tropical paradise of Southeast Asia with our Pandan scented candle. This exquisite fragrance captures the essence of fresh Pandan leaves, creamy Buko (young coconut), and velvety vanilla cream, creating an aromatic journey that evokes the beauty of the tropics.",
      fragranceNotes: "TOP NOTES: Fresh Pandan Leaves The journey begins with the invigorating top notes of freshly harvested pandan leaves. This distinctive scent is green, earthy, and slightly nutty, reminiscent of the vibrant landscapes where pandan thrives. MIDDLE NOTES: Creamy Buko Coconut As the candle continues to burn, it reveals the rich and creamy heart of buko coconut. This delightful aroma carries hints of coconut milk and tropical sweetness, conjuring images of sipping coconut water on a pristine beach. BASE NOTES: Velvety Vanilla Cream The base notes add depth and warmth to the fragrance. Velvety vanilla cream emerges, infusing the scent with a sweet and comforting undertone that lingers like a fond memory.",
      signatureNotes: "Tropical Harmony Throughout the fragrance experience, a signature note of 'Tropical Harmony' blends these elements seamlessly, creating a harmonious and indulgent scent profile.",
      inspiration: "Pandan draws inspiration from the lush, tropical landscapes of the Philippines, where Pandan leaves are prized for their unique aroma and versatility. This scented candle captures the essence of the region's culinary treasures and natural beauty.",
      intendedExperience: "Lighting the Pandan scented candle transports you to a tranquil beachside retreat, where the fragrance of Pandan leaves mingles with the sweetness of buko coconut and the warmth of vanilla cream. It embodies the serenity of tropical paradises and the culinary delights of the region. Let this candle evoke the spirit of the Philippines in your home.",
      pleaseNote: 'Please note that the Pandan scented candle is made with high-quality, sustainable soy wax and premium fragrance oils to ensure a clean and luxurious burn, allowing you to enjoy the tropical paradise experience to the fullest.',
      image: 'Pandan_8oz.jpg',
      size: '8oz',
      price: 25.00,
      quantity: 1,
    },
    {
      name: 'Kalamansi Flower',
      description: 'A Citrus Garden in Full Bloom. Step into a fragrant citrus garden in full bloom with our Kalamansi Flower scented candle. This exquisite blend captures the vibrant essence of Kalamansi lemons, lime blossoms, lemon flower buds, and citrus green leaves, creating an invigorating and refreshing olfactory journey.',
      fragranceNotes:"TOP NOTES: Zesty Kalamansi Lemons As you light the candle, the zesty top notes of Kalamansi lemons burst forth, filling the air with their tangy and revitalizing aroma, reminiscent of a sunny orchard in full harvest. MIDDLE NOTES: Lime Blossoms and Lemon Flower Buds The heart of the fragrance reveals a delicate and harmonious blend of lime blossoms and lemon flower buds. These floral notes infuse the scent with a bright and uplifting quality, like a bouquet of freshly picked blossoms. BASE NOTES: Citrus Green Leaves The base notes provide a grounding element to the fragrance with the subtle scent of citrus green leaves. This adds depth and a touch of earthiness, enhancing the overall complexity of the aroma.",
      signatureNotes:"Citrus Symphony Throughout the candle's burn, a signature note of 'Citrus Symphony' unites these elements into a harmonious and invigorating fragrance, creating a symphony of citrus delight.",
      inspiration:"Kalamansi Flower is inspired by the lush citrus groves found in tropical regions, where Kalamansi lemons and citrus blossoms flourish. This scented candle captures the essence of these bountiful groves and the joy of citrus in full bloom.",
      intendedExperience:"Lighting the Kalamansi Flower scented candle is like opening the door to a sun-drenched citrus garden. It's a sensory journey that invigorates the spirit, refreshes the mind, and fills your space with the vibrant energy of citrus in all its glory.",
      pleaseNote: "Please note that the Kalamansi Flower scented candle is handcrafted with premium soy wax and the finest fragrance oils to ensure a clean and luxurious burn, allowing you to fully immerse yourself in the delightful scent of citrus, blossoms, and green leaves.",
      image: 'Calamansi_Flower_8oz.jpg',
      size: '8oz',
      price: 25.00,
      quantity: 1,
    },
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Matthew',
    lastName: 'Thurber',
    email: 'a@a.com',
    password: '12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
