import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import { queryData } from '../../../../helpers/queryData'


const ModalAddProjects = ({itemEdit}) => {
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
            itemEdit ? `/v1/projects/${itemEdit.projects_aid}` : `/v1/projects`,
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["projects"] });
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
        projects_title: itemEdit ? itemEdit.projects_title : "",
        projects_category: itemEdit ? itemEdit.projects_category : "",
        projects_image: itemEdit ? itemEdit.projects_image : "",
        projects_description: itemEdit ? itemEdit.projects_description : "",
        projects_publish_date: itemEdit ? itemEdit.projects_publish_date : "",
    }

    const yupSchema = Yup.object({
        projects_title: Yup.string().required("Required*"),
        projects_category: Yup.string().required("Required*"),
        projects_description: Yup.string().required("Required*"),
        projects_publish_date: Yup.string().required("Required*"),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-accent text-darkcolor h-full ">
              <div className="modal-header p-4 relative">
                  <h2>New Projects</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4 ">
                  <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        onSubmit={async (values) => {
                        mutation.mutate(values)
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>
                          
                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="projects_title"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Category"
                              type="text"
                              name="projects_category"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image"
                              type="text"
                              name="projects_image"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputTextArea
                              label="Description"
                              type="text"
                              name="projects_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="projects_publish_date"
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

export default ModalAddProjects