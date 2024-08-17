import React from 'react'
import './Navbar.css';
import img2 from '../Header/Images/home-page-28.jpeg'
import searchIcon from '../Header/Images/searchbox 1.jpeg'
import avatar from '../Header/Images/login-avatar (2).png'
import img3 from '../Header/Images/Daily.jpeg'
import img4 from '../Header/Images/consumer.jpeg'
import img5 from '../Header/Images/media.jpeg'
import img6  from '../Header/Images/politics.jpeg'
import img7  from '../Header/Images/traval.jpeg'
import img8 from '../Header/Images/education.jpeg'
import img9 from '../Header/Images/template.jpeg'
import img10 from '../Header/Images/c1.jpeg'
import img11 from '../Header/Images/c2.jpeg'
import img12 from  '../Header/Images/c3.jpeg'
import img13 from  '../Header/Images/c4.jpeg'
import img14 from  '../Header/Images/c5.jpeg'
import img15 from '../Header/Images/tem1.jpeg'
import { Footer } from './Footer';




export const Navbar = () => {

  return (
    <div>
        <body>
      <div className='Container'>
        <div className='headerimg'>
          <img src={img2} alt="Navbar" />
        </div>
        <div className='headername'>
          <h1>NAME</h1>
          <h4>Ratings</h4>
          <h4>Topics</h4>
          <h4>Politics</h4>
          <h4>2019 Elections</h4>
          <h4>Watch Video</h4>
          <h5>Login</h5>
        </div>
        <div className='searchbox'>
          <img src={searchIcon} alt="Search" className='search-icon' />
        </div>
        <div className='avatar'>
          <img src={avatar} alt="Search" className='avatar' />
        </div>
      </div>
        
      
        <div className='card1'>
          <img src={img3} alt="Card 1" />
        </div>

        <div className='card2'>
          <img src={img4} alt="Card 2" />
        </div>
       
        <div className='card3'>
          <img src={img5} alt="Card 3" />
        </div>

        <div className='card4'>
          <img src={img6} alt="Card 4" />
        </div>
        
        <div className='card5'>
          <img src={img7} alt="Card 5" />
        </div>

        <div className='card6'>
          <img src={img8} alt="Card 6" />
        </div>
         
        <div className='name1'>

          <p> Meet your candidates </p>
          <p> Join trending debate </p>
          <p>  Rate a Company </p>

          </div>

          <div className='name2'>
           <h1> TAKE ACTION </h1>
          <p> A community of more than five million.Over 900 electron victories including every Latina,Africa American,</p>
          <p> and Asian American Democratic congresswoman currently serving in Congress.All with a single focus-progressive</p>
          <p>                change that matters   </p>

          
                          <p> Are you with us? </p>
         

          </div>

          <div className='poster1'>
          <img src={img9} alt="Card 7" />
          </div>
           

          <div className='name3'>
          <h2> Your stories.Behind every review is an </h2>
          <h2>  experience that matters </h2>
          <p> Trustpilot is the world's most powerful review platform. We aim to continually improve,and every </p>
          <p> heart-felt review helps us provide ever-better experiences for both people and companies </p>
          </div>

          <div className='poster2'>
          <img src={img10} alt="Card 8" />
          </div>

          <div className='poster3'>
          <img src={img11} alt="Card 9" />
          </div>

          <div className='poster4'>
          <img src={img12} alt="Card 10" />
          </div>

          <div className='poster5'>
          <img src={img13} alt="Card 11" />
          </div>
           

          <div className='poster6'>
          <img src={img14} alt="Card 12" />
          </div>

          

          <div className='poster2'>
          <img src={img10} alt="Card 8" />
          </div>

          <div className='poster3'>
          <img src={img11} alt="Card 9" />
          </div>

          <div className='poster4'>
          <img src={img12} alt="Card 10" />
          </div>

          <div className='poster5'>
          <img src={img13} alt="Card 11" />
          </div>
          
          <h3> Read reviews.Write reviews</h3>

          <button className="add-review-btn">
          <span className="plus-sign">+</span> Add a Review
          </button>
        <div className='rating'>
        <h2> YouGov Ratings</h2>
        </div>


        <div className='rating1'>
        <p> Based on millions of responses and growing daily, YouGov Ratings continually measures the</p>
        <p> popularity of everything from pop stars to politicians,sports teams to snack foods and </p>
        <p>  almost anything in between.Find out more </p>
        </div>
       

        <button className="add-review-btn">
          <span className="plus-sign">+</span> Politics
          </button>
        <div className='rating2'>
        <h3>  Politics & current affairs</h3>
        <div className='rating3'>
          <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ALL </p>
        </div>

         <div className='poster7'>
          <img src={img15} alt="Card 12" />
          </div>


        </div>
<Footer />
      </body>
    </div>

  )
}
