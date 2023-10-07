


import React, { Component } from 'react';
import './FAQ.css';

class FAQ extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null, // Keeps track of the active question
      faqData: [
        {
          question: '1) What is DayZero?',
          answer: 'DayZero is an innovative platform that transforms your ideas and visions into actionable plans. It helps individuals, startups, and companies convert their thoughts into comprehensive blueprints for projects, ranging from website development and marketing campaigns to product roadmaps and business strategies.',
        },
        {
                    question: '2) How does DayZero help with project planning and execution?',
                    answer: 'DayZero simplifies project planning and execution by generating detailed blueprints tailored to your specific requirements. Our intelligent system guides you through a conversational interface, asking relevant questions to capture all the necessary information.',
                  },
                  {
                    question: '3) Who can benefit from using DayZero?',
                    answer: 'DayZero is designed to benefit anyone with a project or idea, regardless of their level of expertise.',
                  },
                  {
                    question: '4) How does DayZero generate blueprints?',
                    answer: 'DayZero utilizes advanced algorithms and industry best practices to generate blueprints. By analyzing the information you provide and leveraging our extensive knowledge base, DayZero creates detailed plans that encompass the necessary components, features, technologies, and strategies for your project. It streamlines the process, saving you valuable time and ensuring a comprehensive roadmap for success.',
                  },
                  {
                    question: '5) Can I customize the generated blueprints?',
                    answer: 'Yes, absolutely! DayZero understands that every project is unique, and we provide you with the flexibility to customize the generated blueprints. While our system generates a detailed plan based on the information provided, you have the option to refine, modify, and add specific details according to your preferences. This ensures that the blueprint aligns perfectly with your vision and requirements.',
                  },
                  {
                    question: '6) Does DayZero also help me in executing my vision?',
                    answer: 'Yes, DayZero not only helps you in planning and documenting your vision but also provides guidance and resources for executing it. Along with comprehensive blueprints, DayZero offers an AI Library with a repository of tools to enhance implementation. The Expert Network connects you with professionals for specialized expertise and support throughout the execution process. With DayZero, you have the tools, resources, and guidance to execute your vision effectively and achieve success.',
                  },
                  {
                    question: '7) Is DayZero suitable for both startups and established companies?',
                    answer: 'Yes, DayZero is suitable for both startups and established companies. Whether you are just starting out or have been in business for years, DayZero provides a valuable solution for project planning and documentation. It helps startups establish a solid foundation for their ventures and assists established companies in refining their strategies and executing new initiatives.',
                  },
                  {
                    question: '8) Is my data secure on the DayZero platform?',
                    answer: 'The Launching Absolutely. we take data security and privacy seriously. We employ robust security measures to protect your data from unauthorized access, loss, or misuse. Your information is stored securely and treated with strict confidentiality, adhering to industry best practices and data protection regulations. for Premium users only. Yes, DayZero allows for seamless collaboration with your team members. You can invite team members to join your projects, share and discuss the generated blueprints, and work together on refining the scope, deliverables, and strategies. Collaboration ensures that everyone is aligned and working towards the same goals, enhancing overall project success. virtual DOM is a lightweight copy of the actual DOM in memory.',
                  },
                  {
                    question: '9) Can I integrate DayZero with other project management tools?',
                    answer: 'componentDidMount is called after a component is rendered to the DOM.',
                  },
                  {
                    question: ' 10) Can I collaborate with team members on DayZero?',
                    answer: 'You Launching soon for Premium userLaunching soon for Premium users only. Yes, DayZero allows for seamless collaboration with your team members. You can invite team members to join your projects, share and discuss the generated blueprints, and work together on refining the scope, deliverables, and strategies. Collaboration ensures that everyone is aligned and working towards the same goals, enhancing overall project success.s only. DayZero is being designed to seamlessly integrate with other project management tools. We understand the importance of connectivity and collaboration across different platforms. By integrating with other tools, you can enhance your project management workflow, streamline processes, and ensure a smooth transition from planning to execution. handle events in React using event handlers like onClick, onChange, etc.',
                  },
      
      ],
    };
  }

  toggleAnswer = (index) => {
    // Toggle the active question by index
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    return (
      <div className="FAQ">
        <h1>FAQS</h1>
        <ul>
          {this.state.faqData.map((item, index) => (
            <li key={index}>
              <div className="question" onClick={() => this.toggleAnswer(index)}>
                {item.question}
              </div>
              {this.state.activeIndex === index && (
                <div className="answer">{item.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FAQ;
