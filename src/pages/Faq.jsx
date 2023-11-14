import 'flowbite';
import { Accordion } from 'flowbite-react';

const Faq = () => {
  const data = [
    {
      Question: "Q1: What is a tree sponsorship program?",
      Answer: "A: A tree sponsorship program allows individuals or organizations to contribute towards the planting and maintenance of trees. Sponsors typically support environmental initiatives by funding the growth and care of trees."
    },
    {
      Question: "Q2: How does tree sponsorship work?",
      Answer: "A: Tree sponsorship involves making a financial contribution to support the planting and maintenance of a tree. Sponsors may receive updates on the tree's growth, its environmental impact, and other related information."
    },
    {
      Question: "Q3: Can I choose the location for my sponsored tree?",
      Answer: "A: Depending on the program, some sponsors may have the option to choose a general location for their tree. However, specific locations are often determined by environmental considerations and the organization's planting strategy."
    },
    // Add more questions and answers as needed
  ];

  return (
    <div>
      <h1>FAQ</h1><Accordion>
      {data.map((item, index) => (
        <Accordion.Panel key={index}>
          <Accordion.Title>{item.Question}</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {item.Answer}
            </p>
            
          </Accordion.Content>
        </Accordion.Panel>
        
      ))}</Accordion>
    </div>
  );
};

export default Faq;
