// backend/controllers/documentController.js

import Document from '../model/Document.js'
// Controller to create a new document
export const createDocument = async (req, res) => {
  try {
    const { title, description, filePath } = req.body;
    const owner = req.user._id; // Assuming you have user authentication implemented

    const newDocument = new Document({
      title,
      description,
      filePath,
      owner,
    });

    await newDocument.save();

    res.status(201).json({ message: 'Document created successfully', document: newDocument });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to fetch all documents
export const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json({ documents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

