import React from 'react'
import assignmentImage from '/src/resources/assignment1.jpeg';

const Main = () => {
  return (
    <>
    <div className='bg-blue h-96' style={{ backgroundImage: `url(${assignmentImage})` }}>
        <div className='flex h-96 items-center justify-center font-semibold text-5xl  '><h1 className='text-white'>Glossary</h1></div>
    </div>
    <div className='flex h-screen'>
        <div>
            {data.map((item,i) => (
                <div className="item">
                    <div className='Title'>
                        <h1>{item.Title}</h1>
                    </div>
                    <div className="subTitle">
                        <h2>{item.subTitle}</h2>
                    </div>
                    <div className="info">
                        {item.info}
                    </div>
                </div>
            ))}
        </div>

    </div>
    </>
    
  )
}

const data = [
    {
        Title:'CB1',
        subTitle:'Cannabinoid Receptor 1',
        info:'A G protein-coupled cannabinoid receptor that in humans is encoded by the CNR1 gene. CB1 receptors mediate physical and psychoactive effects of Cannabinoids.'
    },
    {
        Title:'CB2',
        subTitle:'Cannabinoid Receptor 2',
        info:'CB2 receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs.'
    },
    {
        Title:'CB2',
        subTitle:'Cannabinoid Receptor 2',
        info:'CB2 receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs.'
    },
    {
        Title:'CB2',
        subTitle:'Cannabinoid Receptor 2',
        info:'CB2 receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs.'
    },
    {
        Title:'CB2',
        subTitle:'Cannabinoid Receptor 2',
        info:'CB2 receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs.'
    },
    {
        Title:'CB2',
        subTitle:'Cannabinoid Receptor 2',
        info:'CB2 receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs.'
    },
    {
        Title:'CB2',
        subTitle:'Cannabinoid Receptor 2',
        info:'CB2 receptors regulate inflammation and immune response throughout the immune and peripheral nervous systems including the gut, spleen, liver, heart, kidneys, bones, blood vessels, lymph cells, endocrine glands, and reproductive organs.'
    },
    
    
]

export default Main