import * as yup from "yup";

export const CameraTypeSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup.string().required("Name required"),
  description: yup.string().required("Description required"),
});

export const CameraSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup
    .string()
    .min(2, "Too short to be a camera name")
    .max(240, "Too long to be a camera name")
    .required("Camera name required"),
  cameraType: yup.string().required("Camera type required").nullable(),
  location: yup.string().required("Camera location required"),
  latitude: yup.string().required("Camera latitude required"),
  longitude: yup.string().required("Camera longitude required"),
  brand: yup.string().required("Camera brand required"),
  model: yup.string().required("Camera model required"),
});
