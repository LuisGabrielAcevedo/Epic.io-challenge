import React, { useRef } from "react";
import { Field, Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { CameraFormStyle as S } from "./CameraForm.style";
import { CameraSchema } from "src/yupSchemas";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

const CameraForm = ({
  handleClose = () => {},
  currentItem = {},
  onSubmit = () => {},
  cameraTypes = [],
}) => {
  const formRef = useRef(null);

  const renderForm = (formik) => {
    return (
      <Form className="cameraType-form">
        <S.FormControl fullWidth>
          <Field
            required
            id="name"
            label="Name"
            name="name"
            component={TextField}
            value={formik.values.name}
            onChange={(event) => {
              formik.setFieldValue("name", event.target.value);
            }}
          />
        </S.FormControl>
        <S.FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-filled-label" required>
            Type
          </InputLabel>
          <Select
            required
            id="cameraType"
            label="Camera type"
            name="cameraType"
            value={formik.values.cameraType}
            onChange={(event) => {
              formik.setFieldValue("cameraType", event.target.value);
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {cameraTypes.map((cameraType) => (
              <MenuItem
                key={`${cameraType.id}`}
                value={cameraType.id}
              >{`${cameraType.name} - ${cameraType.description}`}</MenuItem>
            ))}
          </Select>
        </S.FormControl>
        <S.FormControl fullWidth>
          <Field
            required
            id="location"
            label="Location"
            name="location"
            component={TextField}
            onChange={(event) => {
              formik.setFieldValue("location", event.target.value);
            }}
            value={formik.values.location}
          />
        </S.FormControl>
        <S.FormControl fullWidth>
          <Field
            required
            id="latitude"
            label="Latitude"
            name="latitude"
            component={TextField}
            onChange={(event) => {
              formik.setFieldValue("latitude", event.target.value);
            }}
            value={formik.values.latitude}
          />
        </S.FormControl>
        <S.FormControl fullWidth>
          <Field
            required
            id="longitude"
            label="Longitude"
            name="longitude"
            component={TextField}
            onChange={(event) => {
              formik.setFieldValue("longitude", event.target.value);
            }}
            value={formik.values.longitude}
          />
        </S.FormControl>
        <S.FormControl fullWidth>
          <Field
            required
            id="brand"
            label="Brand"
            name="brand"
            component={TextField}
            onChange={(event) => {
              formik.setFieldValue("brand", event.target.value);
            }}
            value={formik.values.brand}
          />
        </S.FormControl>
        <S.FormControl fullWidth>
          <Field
            required
            id="model"
            label="Model"
            name="model"
            component={TextField}
            onChange={(event) => {
              formik.setFieldValue("model", event.target.value);
            }}
            value={formik.values.model}
          />
        </S.FormControl>
        <S.Footer>
          <S.CancelButton onClick={handleClose} variant="contained">
            Cancel
          </S.CancelButton>
          <Button
            color="primary"
            disabled={formik.isSubmitting}
            type="submit"
            variant="contained"
          >
            {currentItem?.id ? "Edit" : "Add"}
          </Button>
        </S.Footer>
      </Form>
    );
  };

  const onSubmitCamera = async (values, { resetForm }) => {
    resetForm();
    onSubmit({ ...currentItem, ...values });
  };

  const getFormikProps = () => {
    const { name, cameraType, location, latitude, longitude, brand, model } = {
      ...currentItem,
    };

    return {
      children: renderForm,
      enableReinitialize: true,
      initialValues: {
        name: name || "",
        cameraType: cameraType || "",
        location: location || "",
        latitude: latitude || "",
        longitude: longitude || "",
        brand: brand || "",
        model: model || "",
      },
      onSubmit: onSubmitCamera,
      validationSchema: CameraSchema,
    };
  };

  return (
    <DialogContent>
      <Formik {...getFormikProps()} innerRef={formRef} />
    </DialogContent>
  );
};

export default CameraForm;
