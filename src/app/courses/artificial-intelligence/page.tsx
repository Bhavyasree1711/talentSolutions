"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ArtificialIntelligencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const curriculum = [
    {
      title: "Python for AI Development",
      topics: [
        "Introduction to Python & Installation (Jupyter, VS Code, Anaconda)",
        "Variables, Data Types, Loops, Conditionals, and Functions",
        "File Handling, Exception Handling & Logging",
        "Object-Oriented Programming (OOP): Classes, Inheritance, and Polymorphism",
        "NumPy for Numerical Computing & Matrix Operations",
        "Pandas for Data Manipulation, Cleaning & Exploration",
        "Matplotlib & Seaborn for Data Visualization",
        "Project: Building an AI-Ready Data Processing Pipeline in Python"
      ]
    },
    {
      title: "Foundations of AI & Intelligent Agents",
      topics: [
        "History of AI: From Turing Machines to Modern Deep Learning",
        "AI Agent Architecture: Sensors, Effectors, and Environment Interaction",
        "Problem Solving via State Space Search: BFS, DFS, and Uniform Cost Search",
        "Informed Search Algorithms: A* Search, Greedy Best-First, and Hill Climbing",
        "Game Playing AI: Minimax Algorithm with Alpha-Beta Pruning",
        "Constraint Satisfaction Problems (CSP): Backtracking and Arc Consistency",
        "Knowledge Representation: Propositional Logic, First-Order Logic & Semantic Networks",
        "Project: Building a Maze-Solving AI Agent using A* Search Algorithm"
      ]
    },
    {
      title: "Machine Learning for AI",
      topics: [
        "Introduction to Machine Learning: Supervised, Unsupervised & Reinforcement Learning",
        "House Price Prediction using Linear Regression with Scikit-learn",
        "Customer Churn Prediction using Logistic Regression",
        "Handwritten Digit Recognition using Support Vector Machines (SVM)",
        "Spam Email Classification using Naïve Bayes Classifier",
        "Decision Trees & Random Forests for Classification & Regression",
        "K-Means Clustering for Customer Segmentation",
        "Model Evaluation: Confusion Matrix, Precision, Recall, F1-Score & ROC Curves",
        "Project: End-to-End ML Pipeline for Predicting Student Performance"
      ]
    },
    {
      title: "Deep Learning & Neural Networks",
      topics: [
        "Perceptrons & Multi-Layer Neural Networks from Scratch",
        "Backpropagation Algorithm: Mathematical Derivation & Implementation",
        "Activation Functions: ReLU, Sigmoid, Softmax, and Swish",
        "Optimizers: SGD, Adam, RMSprop & Learning Rate Scheduling",
        "Regularization Techniques: Dropout, Batch Normalization & Early Stopping",
        "Building Neural Networks with PyTorch: Tensors, Autograd & DataLoaders",
        "Building Neural Networks with TensorFlow/Keras: Sequential & Functional API",
        "Hyperparameter Tuning using Grid Search, Random Search & Optuna",
        "Project: Image Classification on CIFAR-10 Dataset using PyTorch"
      ]
    },
    {
      title: "Natural Language Processing (NLP) & LLMs",
      topics: [
        "Text Preprocessing: Tokenization, Stemming, Lemmatization & Stop-word Removal",
        "Text Representation: Bag of Words, TF-IDF & Word2Vec Embeddings",
        "Sentiment Analysis using LSTM (Long Short-Term Memory) Networks",
        "Sequence-to-Sequence Models for Machine Translation",
        "The Transformer Architecture: Self-Attention & Multi-Head Attention Deep Dive",
        "BERT for Text Classification and Named Entity Recognition (NER)",
        "GPT & Large Language Models: Fine-tuning with LoRA and QLoRA",
        "Prompt Engineering: Zero-shot, Few-shot & Chain-of-Thought Prompting",
        "Project: Building a Sentiment Analysis API using BERT and FastAPI"
      ]
    },
    {
      title: "Computer Vision & Image Intelligence",
      topics: [
        "Image Processing: Convolutions, Edge Detection, and Spatial Filtering with OpenCV",
        "Convolutional Neural Networks (CNNs): LeNet, AlexNet, VGG & ResNet Architectures",
        "Transfer Learning: Using Pre-trained Models for Custom Image Classification",
        "Object Detection with YOLO (You Only Look Once) v8",
        "Image Segmentation: U-Net for Medical Image Segmentation",
        "Face Detection & Recognition using OpenCV and Deep Learning",
        "Generative AI for Images: GANs (Generative Adversarial Networks) & Diffusion Models",
        "Project: Real-time Object Detection System using YOLOv8 with Webcam Feed"
      ]
    },
    {
      title: "Reinforcement Learning & AI Agents",
      topics: [
        "Markov Decision Processes (MDP): States, Actions, Rewards & Transitions",
        "Q-Learning: Tabular Reinforcement Learning from Scratch",
        "Deep Q-Networks (DQN) for Playing Atari Games",
        "Policy Gradient Methods: REINFORCE & Actor-Critic Algorithms",
        "Proximal Policy Optimization (PPO) for Continuous Control Tasks",
        "OpenAI Gymnasium: Training RL Agents in Simulated Environments",
        "Multi-Agent Systems and Cooperative AI",
        "Project: Training an AI Agent to Play CartPole using DQN"
      ]
    },
    {
      title: "AI Ethics, Deployment & Production",
      topics: [
        "Algorithmic Bias: Detecting & Mitigating Unfairness in AI Systems",
        "Explainable AI (XAI): Model Interpretability using SHAP and LIME",
        "AI Safety & Alignment: Ensuring AI Behaviors Match Human Values",
        "Model Deployment: Serving AI Models with Flask, FastAPI & Docker",
        "Cloud AI Services: AWS SageMaker, Azure ML Studio & Google Vertex AI",
        "MLOps Basics: Model Versioning, Experiment Tracking with MLflow",
        "AI Legal Frameworks: GDPR, EU AI Act & Responsible AI Guidelines",
        "Project: Deploying a Full AI Application to Cloud with CI/CD Pipeline"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Artificial Intelligence Training</h1>
            <p className="text-lg mb-6 leading-relaxed">
              Master AI concepts including search, reasoning, NLP, and computer vision with hands-on projects. Build intelligent systems that can learn and adapt.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/Ai.png" alt="AI Training" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* BACK BUTTON (OVERLAY) */}
      <div className="absolute top-4 left-4 z-20">
        <Link
          href="/courses/ai"
          className="inline-flex items-center text-sm font-semibold text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 transition shadow-md"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to AI Courses
        </Link>
      </div>

      {/* ✅ CURRICULUM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            AI Curriculum
          </h2>

          <div className="space-y-4">
            {curriculum.map((item, index) => (
              <div key={index} className="border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 bg-white text-[#0B1F3A] font-bold hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {item.title}
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* CONTENT */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                    <ul className="space-y-3">
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
