import { Formik, Form } from 'formik'
import React from 'react'
import { BsSend } from 'react-icons/bs'
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import * as Yup from 'yup'
import { StoreContext } from '../../../../../store/StoreContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'

const Contact = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)

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
    <section className="contactme bg-primary py-[5rem] ">
        <div className="container">
                <h1 className='text-7xl opacity-5 text-accent text-center uppercase'>Contact</h1>
                <h2 className='uppercase text-3xl text-center -translate-y-[60px] text-lightcolor'>get in touch</h2>
            <div className="contactme__wrapper grid grid-cols-[.5fr,1fr] gap-20">
                
                
                
                <div className="address text-lightcolor">
                    <h4>DON’T BE SHY!</h4>
                    <p className='mb-10'>Feel free to get in touch with me.
                    I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                    <div className=''>
                        
                       <div className="contact__address grid grid-cols-[.2fr,1fr] mb-5">
                            <div className="icons">
                                <FaMapMarkerAlt className='text-buttons text-3xl' />
                            </div>
                            <div className="location ">
                                <h4>Address</h4>
                                <p>Brgy. Bulakin 1 Dolores, Quezon</p>
                            </div>
                        </div>
                        <div className="contact__address grid grid-cols-[.2fr,1fr] mb-5">
                            <div className="icons">
                                <FaEnvelopeOpen className='text-buttons text-3xl'/>
                            </div>
                            <div className="location">
                                <h4>Mail Me</h4>
                                <p>lourenisobel18@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact__address grid grid-cols-[.2fr,1fr] mb-5">
                            <div className="icons">
                                <FaPhoneAlt className='text-buttons text-3xl'/>
                            </div>
                            <div className="location">
                                <h4>Call Me</h4>
                                <p>+639174278410</p>
                            </div>
                        </div> 
                    </div>
                </div>


                
                <div className="inputs max-w-[700px]">
                    <Formik 
                     initialValues={initVal}
                     validationSchema={yupSchema}
                     onSubmit={async (values) => {
                     mutation.mutate(values)
                   }}>

                    {(props) => { 
                        return(
                          <Form>
                                <div className="names grid grid-cols-2 gap-2">
                                    <div class="inputGroup">
                                        <InputText
                                            label="Your Name"
                                            type="text"
                                            name="message_name"
                                            autoComplete="off"
                                            className="max-w-[100%]"
                                        />
                                    </div>
                                    <div class="inputGroup">
                                        <InputText
                                            label="Your Email"
                                            type="text"
                                            name="message_email"
                                            autoComplete="off"
                                            className="max-w-[100%]"
                                        />
                                    </div>
                                </div>
                                <div class="inputGroup">
                                        <InputText
                                            label="Your Subject"
                                            type="text"
                                            name="message_subject"
                                            autoComplete="off"
                                            className="max-w-[700px] mb-2"
                                        />
                                </div>
                                <div class="inputGroup">
                                        <InputTextArea
                                            label="Your Message"
                                            type="text"
                                            name="message_note"
                                            className='max-w-[700px] h-[160px]'
                                        />
                                </div>
                                <div className='flex justify-end'>
                                    <a href="" className="btn2 btn-home uppercase" type="submit"><span className='iconround p-3 bg-btncircle rounded-full'><BsSend className='text-2xl font-thicker text-darkcolor' /></span>Send Message</a>
                                </div>
                            </Form>  
                        )
                    }}
                    
                    </Formik>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Contact
