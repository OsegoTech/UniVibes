import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../lib/firebase.config";

const Storage = {
  uploadFile: (media) => {
    return new Promise(async (resolve) => {
      try {
        const fileRef = ref(storage, `images/${media.title}`);
        await uploadBytes(fileRef, media.file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          resolve({ path: snapshot.metadata.fullPath, name: media.title });
        });
      } catch (error) {
        console.error(error);
      }
    });
  },
};

export default Storage;