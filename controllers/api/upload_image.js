const router = require('express').Router();
const multer = require('multer'); // Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder

router.post('/api/upload', upload.single('image'), (req, res) => {

  //need arguments. try/catch. 
  res.status(200).json({ message: 'Image uploaded successfully.' });
});

module.exports = router;
