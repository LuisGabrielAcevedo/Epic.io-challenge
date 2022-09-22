import React, { useRef } from "react";
import { Field, Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { CameraTypeFormStyle as S } from "./CameraTypeForm.style";
import { CameraTypeSchema } from "src/yupSchemas";

const CameraTypeForm = ({
  handleClose = () => {},
  currentItem = {},
  onSubmit = () => {},
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
        <S.FormControl fullWidth>
          <Field
            required
            id="description"
            label="Description"
            name="description"
            component={TextField}
            onChange={(event) => {
              formik.setFieldValue("description", event.target.value);
            }}
            value={formik.values.description}
            multiline
            maxRows={4}
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
            Add
          </Button>
        </S.Footer>
      </Form>
    );
  };

  const onSubmitCameraType = async (values, { resetForm }) => {
    resetForm();
    onSubmit({ ...currentItem, ...values });
  };

  const getFormikProps = () => {
    const { name, description } = { ...currentItem };

    return {
      children: renderForm,
      enableReinitialize: true,
      initialValues: {
        name: name || "",
        description: description || "",
      },
      onSubmit: onSubmitCameraType,
      validationSchema: CameraTypeSchema,
    };
  };

  return (
    <DialogContent>
      <Formik {...getFormikProps()} innerRef={formRef} />
    </DialogContent>
  );
};

export default CameraTypeForm;
