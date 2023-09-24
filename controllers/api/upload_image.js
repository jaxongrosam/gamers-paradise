const router = require('express').Router();
const multer = require('multer'); // Middleware for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder
const withAuth = require('../../utils/auth');
const { error } = require('console');

router.post('/api/upload', withAuth, upload.single('image'), (req, res) => {

try{
  //need arguments. try/catch. 
  res.status(200).json({ message: 'Image uploaded successfully.' });
}
catch{
  res.status(400).json(err);
}
});

module.exports = router;


// filename: (req, file, cb) => { console.log(file)}