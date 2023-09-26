const router = require('express').Router();
const multer = require('multer'); // Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder
const withAuth = require('../../utils/auth');
const { error } = require('console');

router.post('/api/upload', upload.single('image'), (req, res) => {

try{
  //need arguments. try/catch. 
  res.status(200).json({ message: 'Image uploaded successfully.' });
}
catch{
  console.error(err);
  res.status(400).json(err);
}
});

// router.get('/', (req, res) => {
//   res.render('image'); // Use your view engine (e.g., EJS) to render the form
// });

// Get image by ID
router.get('/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await Image.findByPk(imageId);

    if (!image) {
      return res.status(404).send('Image not found');
    }

    res.setHeader('Content-Type', 'image/*'); //any image format. It's fine, as post image only accept jpeg or png. 

    // Send the image data as the response body
    res.send(image.path);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

// filename: (req, file, cb) => { console.log(file)}