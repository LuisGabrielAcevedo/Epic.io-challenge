import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentLayout,
  CustomTable,
  CustomDialog,
  EmptyState,
} from "src/components";
import AddIcon from "@material-ui/icons/Add";
import {
  addCameraTypeAction,
  closeCameraTypeDialogAction,
  deleteCameraTypeAction,
  editCameraTypeAction,
  openCameraTypeDialogAction,
} from "src/store/actions";
import CameraTypeForm from "./components/CameraTypeForm";
import { CameraTypeListPagetyle as S } from "./CameraTypeListPage.style";

const metadata = [
  {
    key: "id",
    label: "Id",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "description",
    label: "Description",
  },
];

const CameraTypeListPage = () => {
  const [usedError, setUsedError] = useState(false);
  const { list, dialogState, currentItem } = useSelector(
    (state) => state.cameraTypes
  );
  const { list: cameras } = useSelector((state) => state.cameras);
  const d = useDispatch();
  const openDialog = (item) => d(openCameraTypeDialogAction(item));
  const closeDialog = () => d(closeCameraTypeDialogAction());
  const deleteCameraType = (id) => {
    const isUsedType = cameras.find((item) => item.cameraType === id);
    if (isUsedType) {
      return setUsedError(true);
    } else {
      setUsedError(false);
      d(deleteCameraTypeAction(id));
    }
  };

  const onSubmit = (values) => {
    const { id } = values || {};
    d(id ? editCameraTypeAction(values) : addCameraTypeAction(values));
  };

  return (
    <ContentLayout title="Camera types">
      {usedError && (
        <S.Alert severity="error">
          You cannot delete this type of camera because it is in use!
        </S.Alert>
      )}
      <CustomTable
        {...{ metadata }}
        data={list}
        handleDelete={deleteCameraType}
        handleEdit={openDialog}
        rightComponent={() => (
          <>
            <IconButton color="primary" onClick={() => openDialog(null)}>
              <AddIcon />
            </IconButton>
            <CustomDialog
              visible={dialogState}
              handleClose={closeDialog}
              title="Add camera type"
            >
              <CameraTypeForm
                handleClose={closeDialog}
                {...{ currentItem, onSubmit }}
              />
            </CustomDialog>
          </>
        )}
        searchCondition={(item, reg) =>
          item.name.match(reg) || item.description.match(reg)
        }
      />
      <EmptyState data={list} text="No camera types added." />
    </ContentLayout>
  );
};

export default CameraTypeListPage;
