import React from 'react'
import WebsiteLayout from '../../layouts/WebsiteLayout'

function FaqPage() {
  const faqData = [
    {
      question: 'What is the cancellation policy?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta doloribus inventore aut beatae perspiciatis consectetur suscipit voluptatibus expedita iure, quisquam ipsam at. Harum maiores minima quibusdam voluptatum, veritatis qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta doloribus inventore aut beatae perspiciatis consectetur suscipit voluptatibus expedita iure, quisquam ipsam at. Harum maiores minima quibusdam voluptatum, veritatis qui!',
    },
    {
      question: 'How I see rent in my local area?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta doloribus inventore aut beatae perspiciatis consectetur suscipit voluptatibus expedita iure, quisquam ipsam at. Harum maiores minima quibusdam voluptatum, veritatis qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta doloribus inventore aut beatae perspiciatis consectetur suscipit voluptatibus expedita iure, quisquam ipsam at. Harum maiores minima quibusdam voluptatum, veritatis qui!',
    },
    {
      question: "What will I do if I'm not okay with my rent?",
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta doloribus inventore aut beatae perspiciatis consectetur suscipit voluptatibus expedita iure, quisquam ipsam at. Harum maiores minima quibusdam voluptatum, veritatis qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque soluta doloribus inventore aut beatae perspiciatis consectetur suscipit voluptatibus expedita iure, quisquam ipsam at. Harum maiores minima quibusdam voluptatum, veritatis qui!',
    },
    // Add more FAQ items as needed
  ];
  return (
    <WebsiteLayout>
      
       <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded p-4">
            <h3 className="text-lg font-medium mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </WebsiteLayout>
  )
}

export default FaqPage