import 'flowbite';
import { Accordion } from 'flowbite-react';
import '../components/Faq.css';
import treeicon from '../assets/tree.png'
const Faq = () => {
  const data = [
    {
      Question: " What is a tree sponsorship program?",
      Answer: "A tree sponsorship program allows individuals or organizations to contribute towards the planting and maintenance of trees. Sponsors typically support environmental initiatives by funding the growth and care of trees."
    },
    {
      Question: " How does tree sponsorship work?",
      Answer: " Tree sponsorship involves making a financial contribution to support the planting and maintenance of a tree. Sponsors may receive updates on the tree's growth, its environmental impact, and other related information."
    },
    {
      Question: " Can I choose the location for my sponsored tree?",
      Answer: " Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy."
    },
    {
      Question: " Can I choose the location for my sponsored tree?",
      Answer: " Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy."
    },
    {
      Question: " Can I choose the location for my sponsored tree?",
      Answer: " Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy."
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className='Faq-container bg-bg-page-color'>
      <h1 className='text-7xl font-thin '>FAQ</h1>
      
      {data.map((item, index) => (
        <Accordion className= 'Accord-container' key={index}>
        <Accordion.Panel className='Panel' >
          <Accordion.Title className='texts title'><img className='imageicon' src={treeicon}></img><div>{item.Question}</div></Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 texts">
              {item.Answer}
            </p>
            
          </Accordion.Content>
        </Accordion.Panel>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
