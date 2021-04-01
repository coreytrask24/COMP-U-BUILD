import React from 'react';
import CardItem from './CardItem';
import CardItems from './CardItems';
import './Cards.css';

 function Cards(s) {
    

    return (
        <div className='cards'>
            <h1>Explore Comp-U-Build</h1>
            <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                src="images/forum.jpeg"
                text="Join us on our community forums to talk to other builders and stay up to date on all the latest and greatest."
                label='Forums'
                path='/forum'
                /> 
                     <CardItem
              src='images/signup.jpeg'
              text='Sign Up to get exclusive access to all things Comp-U-Build to include special offers and access to our forums'
              label='Sign-Up'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/store.jpeg'
              text='Explore our cast inventory of new and old computer parts and apparel.'
              label='Store'
              path='/products'
            />
            <CardItem
              src='images/guide.jpeg'
              text='Watch top rated builders, build a PC. All the information you need, all in one place.'
              label='Build Guides'
              path='/buildguide'
            />
            <CardItems
              className='top'
              src='images/socialmedia.jpeg'
              text='Follow us on your favorite social media platform. '
              label='Social Media'>
              </CardItems>
                        
                </ul>
            </div>

            </div>
            
        </div>
    )
}

export default Cards