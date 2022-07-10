import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu'
import Footer from './components/Footer';
import sliderImg1 from './res/slider_img1.jpg'
import sliderImg2 from './res/slider_img2.jpg'
import sliderImg3 from './res/slider_img3.jpg'
import sliderImg4 from './res/slider_img4.jpg'
import ImageSlider from './components/ImageSlider';
import Form from './components/Form';
import CategoryViewCard from './components/CategoryViewCard';
import Login from './pages/admin-portal/Login';
import Admin from './pages/admin-portal/Admin';
import Blog from './pages/website/Blog'
import BlogListCard from './components/BlogListCard';

const slides = [
  {img: 'https://static.wixstatic.com/media/03c5c59e7e2748159fa0d753985f1052.jpg/v1/fill/w_1895,h_1032,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/03c5c59e7e2748159fa0d753985f1052.jpg', title:'img1'},
  {img: 'https://static.wixstatic.com/media/11062b_db30375d3d824082b985816b60724829~mv2.jpg/v1/fill/w_1895,h_1032,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_db30375d3d824082b985816b60724829~mv2.jpg', title:'img2'},
  {img: 'https://static.wixstatic.com/media/11062b_afd18fe1238c454b9ecd4bdd01555bab~mv2.jpg/v1/fill/w_1895,h_1032,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_afd18fe1238c454b9ecd4bdd01555bab~mv2.jpg', title:'img3'},
  {img: 'https://static.wixstatic.com/media/11062b_db30375d3d824082b985816b60724829~mv2.jpg/v1/fill/w_1895,h_1032,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_db30375d3d824082b985816b60724829~mv2.jpg', title:'img4'},

]

const imgUrlCategoryViewDefault = 'https://static.wixstatic.com/media/11062b_e639c688221445f396084300eaccf184~mv2.jpeg/v1/crop/x_910,y_0,w_3748,h_3712/fill/w_467,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Back%20to%20School%20with%20Mask.jpeg'
const defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'



function App() {
  console.log("Hello")
  return (
    <>
      <div>
      <Router>
            <Header/>
            <Routes>
              //temporary form for dev purposes
              <Route path='/login' element={<Login/>} />
              <Route path='/me' element={<Admin/>}/>
              <Route path='/blog' element={<Blog/>}></Route>
            </Routes>
      </Router>
      </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <ImageSlider slides={slides}/>
            <ul style={{display:'flex', flexDirection:'row'}}>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
              <li><CategoryViewCard imgUrl={imgUrlCategoryViewDefault} title={'TITLE'} content={defaultContent}/></li>
            </ul>
            <BlogListCard img={'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'} 
            title={'This is the Title'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}

          />
            <Form/>
            <Footer/>
          
          
        </div>
    
    </>
  );
}

export default App;
