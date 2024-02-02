// backend/middleware/upload.js

import multer from 'multer';

const storage = multer.memoryStorage(); // Using memory storage for simplicity

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit, adjust as needed
});

export const singleUpload = upload.single('file'); // 'file' should match the field name in your form
