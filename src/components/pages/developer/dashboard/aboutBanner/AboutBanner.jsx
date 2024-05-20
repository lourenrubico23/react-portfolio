import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import Navigation from '../../../../partials/Navigation'
import useQueryData from '../../../../custom-hooks/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import HeaderDashboard from '../header/HeaderDashboard'
import Searchbar from './Searchbar'
import AboutBannerTable from './AboutBannerTable'
import ModalAddAboutBanner from './ModalAddAboutBanner'

const AboutBanner = () => {
    const {store, dispatch} =React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword, setKeyword] = React.useState('')
    const [itemEdit, setItemEdit ] = React.useState(null);

    const {
        isLoading,
        isFetching,
        error,
        data: aboutBanner,
      } = useQueryData(
        isSearch ? "/v1/aboutBanner/search" : "/v1/aboutBanner", // endpoint
        isSearch ? "post" : "get", // method
        "aboutBanner", // key
        {
            searchValue: keyword
        }
      );

      const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)//for reset of modal from update to add
      }


  return (
    <section className='flex overflow-x-hidden'>
    <Navigation/>
    <main className='w-[calc(100%-250px)]'>
        <HeaderDashboard/>
        <div className='flex relative'>
            <div className='main-wrapper transition-all px-4 py-3 w-full'>
                <div className='flex justify-between items-center'>
                    <h1>Home Banner</h1>
                    <Searchbar setIsSeach={setIsSearch} setKeyword={setKeyword}/>
                </div>    
            
                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                
                        <ul className='flex space-x-10 '>
                            <li className='tab-link '><Link to="/dashboard/projects">Projects</Link></li>
                            <li className='tab-link '><Link to="/dashboard/skills">Skills</Link></li>
                            <li className='tab-link'><Link to="/dashboard/message">Message</Link></li>
                            <li className='tab-link'><Link to="/dashboard/homebanner">Home Banner</Link></li>
                            <li className='tab-link active'><Link to="/dashboard/aboutbanner">About Banner</Link></li>
                        </ul>
                        
                    
                    <button className='btn btn--accent'  onClick={handleAdd}><FiPlus/>New</button>
                </div>

                <AboutBannerTable isLoading={isLoading} aboutBanner={aboutBanner} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
            
            
        </div>
    </main>

    {store.isAdd && <ModalAddAboutBanner itemEdit={itemEdit}/>}
    {store.error && <ModalError position='center'/>}
    {store.success && <Toast/>}
</section>
  )
}

export default AboutBanner