import multer from "multer";
import os from "os";

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tempDir = os.tmpdir(); // Get the system's temporary directory
    cb(null, tempDir); // Set the destination to the temporary directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original filename
  },
});

export const upload = multer({ storage });
