import React from 'react'
import HomeCardItem from './HomeCardItem'
import './HomeCards.css'

function HomeCards() {
  return (
    <div className='cards'>
        <h1>A Multitude of Accessible Features</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <HomeCardItem
                    src='public\..\Image1.jpg'
                    text='Create and Edit Your Own Tickets'
                    label = 'Create'
                    path = '/sign-up'/>
                    <HomeCardItem
                    src='public\..\Image2.png'
                    text='Maintain Your Facility at an Efficient Rate'
                    label = 'Maintain'
                    path = '/sign-up'/>
                </ul>
                <ul className='cards__items'>
                <HomeCardItem
                    src='public\..\Image3.jpg'
                    text='Give Teachers the Peace of Mind to Focus on Teaching'
                    label = 'Balance'
                    path = '/sign-up'/>
                    <HomeCardItem
                    src='public\..\Image4.jpg'
                    text='Works for Any Location You Want Regardless of Building or Classroom'
                    label = 'Versatility'
                    path = '/sign-up'/>
                    <HomeCardItem
                    src='public\..\Image5.png'
                    text='Allow Teachers and Maintenance Staff to Work Together to Build a Better Learning Environment'
                    label = 'Build'
                    path = '/sign-up'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeCards