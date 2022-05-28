import { CircularProgress, Stack} from '@mui/material'

import React from 'react'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  const [progress, setProgress] = React.useState(0);
  return (
    <div className='container mx-auto  py-16'>
      <div className="my-inpo mb-5 py-5">
        <div className="avatar">
          <div className="w-32 rounded">
            <img src="https://i.ibb.co/Ny78SRG/278309870-1131012231011981-6232825432157365218-n.jpg" alt='my avater' />
          </div>
        </div>
        <h1 className='font-bold'>Name : <span className='font-normal'>Md Tomiz Uddin</span></h1>
        <h1 className='font-bold'>Email : <span className='font-normal'>mdtomiz.official@gmail.com</span></h1>
        <h1 className='font-bold'>Phone : <span className='font-normal'> +8801824692955</span></h1>
        <h1 className='font-bold'>Facebook : <span className='font-normal'><a href="https://www.facebook.com/mdtomiz.420/" target={'_blank'} rel="noreferrer">https://www.facebook.com/mdtomiz.420/</a></span></h1>
        <h1 className='font-bold mt-3'>Skills</h1>
        <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 list-disc border p-5'>
          <li>
            <h1>React</h1>
          <CircularProgress variant="determinate" value={85} />
          </li>
          <li>Javascript</li>
          <li>Node js</li>
          <li>Express</li>
          <li>Mongoose</li>
          <li>Css</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
          
         

      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7'>
        <PortfolioCard to='https://headset-analisis.netlify.app/' image={'https://i.ibb.co/GnypQs0/Screenshot-2022-05-25-at-01-30-39-Headset-Review.png'} name='Product Review website' />

        <PortfolioCard image={'https://i.ibb.co/kh5r9g1/Screenshot-2022-05-25-at-01-34-19-React-App.png'}
          to='https://online-store420.netlify.app/'
          name="Luckey Online Shop"
        />
        <PortfolioCard image={'https://i.ibb.co/hBHMwNn/Screenshot-2022-05-25-at-03-22-25-Hostingly-1.png'}
          name="Hostingly Website"
          to={'https://hostingly.netlify.app/'}
        />
        <PortfolioCard image={'https://i.ibb.co/THkSzkM/Screenshot-2022-05-25-at-01-40-00-Fithness.png'}
          to='https://beautiful-dodol-d678b1.netlify.app/'
          name="Fithness Zone"
        />
        <PortfolioCard image={'https://i.ibb.co/k8Wqf0D/Screenshot-2022-05-25-at-01-43-24-Linear-Graphic-1.png'}
          to='http://lineargraphic.com/'
          name="Linear Graphic"
        />
        <PortfolioCard image={'https://i.ibb.co/Fsmm8YZ/Screenshot-2022-05-25-01-49-34.png'}
          to='https://code-house.netlify.app/'
          name="Code House"
        />


      </div>
    </div>
  )
}

export default Portfolio