// File: utils/filecoinUpload.js
const { Web3Storage, getFilesFromPath } = require('@web3.storage/client');

async function uploadToFilecoin(filePath) {
    const storage = new Web3Storage({ token: process.env.FILECOIN_API_KEY });
    const files = await getFilesFromPath(filePath);
    const cid = await storage.put(files);
    return cid; // returns CID to reference the stored file
}

module.exports = { uploadToFilecoin };
