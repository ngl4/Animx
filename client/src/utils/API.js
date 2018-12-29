import axios from "axios";

export default {

  // Upload a photo
  uploadPhoto: function(photoData) {
    return axios.post("/api/upload", photoData);
  }
};
