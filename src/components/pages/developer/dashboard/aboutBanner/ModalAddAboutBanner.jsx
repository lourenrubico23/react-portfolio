import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { InputFileUpload, InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import { queryData } from '../../../../helpers/queryData'
import useUploadPhoto from '../../../../custom-hooks/useUploadPhoto'
import { devBaseImgUrl } from '../../../../helpers/functions-general'


const ModalAddAboutBanner = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)

    const handleClose = () => dispatch(setIsAdd(false))

    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/aboutBanner/${itemEdit.aboutBanner_aid}` : `/v1/aboutBanner`,
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["aboutBanner"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        }
      
        },
    });

    const initVal = {
        aboutBanner_title: itemEdit ? itemEdit.aboutBanner_title : "",
        aboutBanner_category: itemEdit ? itemEdit.aboutBanner_category : "",
        aboutBanner_image: itemEdit ? itemEdit.aboutBanner_image : "",
        aboutBanner_description: itemEdit ? itemEdit.aboutBanner_description : "",
        aboutBanner_publish_date: itemEdit ? itemEdit.aboutBanner_publish_date : "",
    }

    const yupSchema = Yup.object({
        aboutBanner_title: Yup.string().required("Required*"),
        aboutBanner_category: Yup.string().required("Required*"),
        aboutBanner_description: Yup.string().required("Required*"),
        aboutBanner_publish_date: Yup.string().required("Required*"),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-accent text-darkcolor h-full ">
              <div className="modal-header p-4 relative">
                  <h2>New Banner Info</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4 ">
                  <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        onSubmit={async (values) => {
                            uploadPhoto()
                            mutation.mutate({...values, 
                                aboutBanner_image:
                                (itemEdit && itemEdit.aboutBanner_image === "") || photo
                                  ? photo === null
                                    ? itemEdit.aboutBanner_image
                                    : photo.name
                                  : values.aboutBanner_image,})
                          }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>
                        <div className="input-wrap">

                            {photo || (itemEdit && itemEdit.aboutBanner_image !== "") ? (
                            <img src={ photo
                                ? URL.createObjectURL(photo) // preview
                                : itemEdit.aboutBanner_image // check db
                                ? devBaseImgUrl + "/" + itemEdit.aboutBanner_image
                                : null
                            }
                            alt="Photo"
                            className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                            />
                            ) : (
                            <span className="min-h-20 flex items-center justify-center">
                                <span className="text-primary mr-1 underline">Drag & Drop</span>{" "}
                                photo here or{" "}
                                <span className="text-primary ml-1 underline">Browse</span>
                            </span>
                            )}

                            {(photo !== null ||
                                (itemEdit && itemEdit.aboutBanner_image !== "")) && (
                                <span className="min-h-10 flex items-center justify-center">
                                <span className="text-accent mr-1">Drag & Drop</span>{" "}
                                photo here or{" "}
                                <span className="text-accent ml-1">Browse</span>
                            </span>
                            )}

                            {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                            <InputFileUpload
                                label="Photo"
                                name="photo"
                                type="file"
                                id="myFile"
                                accept="image/*"
                                title="Upload photo"
                                onChange={(e) => handleChangePhoto(e)}
                                onDrop={(e) => handleChangePhoto(e)}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
                            />
                        </div>   

                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="aboutBanner_title"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Category"
                              type="text"
                              name="aboutBanner_category"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image"
                              type="text"
                              name="aboutBanner_image"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputTextArea
                              label="Description"
                              type="text"
                              name="aboutBanner_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="aboutBanner_publish_date"
                          />
                      </div>

                    

                    
                      
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddAboutBanner