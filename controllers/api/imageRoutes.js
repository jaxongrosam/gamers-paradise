const router = require('express').Router();
const multer = require('multer'); // Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder
const withAuth = require('../../utils/auth');

router.post('/profile', upload.single('image'), (req, res) => {
  console.log("UPLOAD---1")
  try {
    console.log("UPLOAD---2")
    const { filename } = req.file; 
    const { user_id } = req.body; 

    // Save the file details to the database using your Sequelize model
    Image.create({
      filename,
      user_id,
    })
      .then(() => {
        console.log("UPLOAD---4");
        res.status(200).json({ message: 'Image uploaded successfully.' });
      })
      .catch((error) => {
        console.log("UPLOAD---5");
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } catch (error) {
    console.log("UPLOAD---1");
    console.error(error);
    res.status(400).json({ error: 'Bad Request' });
  }
});


// Get image by ID
router.get('/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await Image.findByPk(imageId);

    if (!image) {
      return res.status(404).send('Image not found');
    }

    res.setHeader('Content-Type', 'image/*'); //any image format. It's fine, as post image only accept jpeg or png. 

    //below is a potential future improvement.Help adds a date to image string name, to make it unique.  
    // filename: (req, file, cb) => { console.log(file)}

    // Send the image data as the response body
    res.send(image.path);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;





// const router = require('express').Router();
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); // Specify the destination folder
// const { Image } = require('../../models'); // Import your Sequelize Image model

// router.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     // Check if a file was uploaded
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     // Save the file path to the database
//     const imagePath = req.file.path;

//     // Insert a new record into the Image model
//     const newImage = await Image.create({ path: imagePath });

//     res.status(200).json({ message: 'Image uploaded successfully', image: newImage });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;