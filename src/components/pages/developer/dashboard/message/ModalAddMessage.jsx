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


const ModalAddMessage = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)

    const handleClose = () => dispatch(setIsAdd(false))


    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/message/${itemEdit.message_aid}` : `/v1/message`,
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["message"] });
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
       message_name: itemEdit ? itemEdit.message_name : "",
       message_email: itemEdit ? itemEdit.message_email : "",
       message_subject: itemEdit ? itemEdit.message_subject : "",
       message_note: itemEdit ? itemEdit.message_note : "",
       message_publish_date: itemEdit ? itemEdit.message_publish_date : "",
    }

    const yupSchema = Yup.object({
       message_name: Yup.string().required("Required*"),
       message_email: Yup.string().required("Required*"),
       message_subject: Yup.string().required("Required*"),
       message_note: Yup.string().required("Required*"),
       message_publish_date: Yup.string().required("Required*"),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-accent text-darkcolor h-full ">
              <div className="modal-header p-4 relative">
                  <h2>New Message</h2>
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
                              label="Name"
                              type="text"
                              name="message_name"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Email"
                              type="text"
                              name="message_email"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Subject"
                              type="text"
                              name="message_subject"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputTextArea
                              label="Message"
                              type="text"
                              name="message_note"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="message_publish_date"
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

export default ModalAddMessage