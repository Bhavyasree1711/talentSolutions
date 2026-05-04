"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MachineLearningPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const curriculum = [
    {
      title: "Python for Machine Learning",
      topics: [
        "Introduction to Python & Installation (Jupyter, VS Code, Anaconda)",
        "Variables, Data Types, Loops, Conditionals, and Functions",
        "File Handling & Exception Handling",
        "Object-Oriented Programming (OOP) Basics",
        "NumPy: Arrays, Broadcasting, and Vectorized Operations",
        "Pandas: DataFrames, Groupby, Merging, and Pivot Tables",
        "Data Visualization with Matplotlib, Seaborn & Plotly",
        "Project: Building a Complete Data Analysis Report on a Real-world Dataset"
      ]
    },
    {
      title: "Mathematics & Statistics for ML",
      topics: [
        "Linear Algebra: Vectors, Matrices, Dot Products, and Eigenvalues",
        "Calculus: Derivatives, Partial Derivatives & the Chain Rule",
        "Probability Theory: Conditional Probability & Bayes' Theorem",
        "Statistical Distributions: Normal, Binomial, Poisson & Uniform",
        "Hypothesis Testing: t-tests, Chi-square, and ANOVA",
        "Correlation Analysis: Pearson, Spearman & Kendall Coefficients",
        "Project: Statistical Analysis of Customer Purchase Behavior Dataset"
      ]
    },
    {
      title: "Data Preprocessing & Feature Engineering",
      topics: [
        "Data Cleaning: Handling Missing Values, Duplicates & Outliers",
        "Feature Scaling: Standardization (Z-score) vs Min-Max Normalization",
        "Categorical Encoding: One-Hot, Label, Target & Frequency Encoding",
        "Feature Creation: Polynomial Features & Domain-specific Engineering",
        "Handling Imbalanced Datasets: SMOTE, ADASYN & Undersampling",
        "Feature Selection: Recursive Feature Elimination (RFE) & Mutual Information",
        "Building Scikit-learn Pipelines: Integrating Transformers and Estimators",
        "Project: Building an Automated Data Preprocessing Pipeline for Messy CSV Data"
      ]
    },
    {
      title: "Supervised Learning – Regression",
      topics: [
        "Simple Linear Regression: Theory, Cost Function (MSE) & OLS",
        "House Price Prediction using Multiple Linear Regression",
        "Gradient Descent: Batch, Stochastic (SGD) & Mini-batch Optimization",
        "Polynomial Regression for Non-linear Relationships",
        "Regularization: Ridge (L2), Lasso (L1) & ElasticNet Regression",
        "Model Assessment: R-squared, Adjusted R-squared & Residual Analysis",
        "Project: Predicting Real Estate Prices with Feature Engineering & Regularized Models"
      ]
    },
    {
      title: "Supervised Learning – Classification",
      topics: [
        "Logistic Regression: Sigmoid Function & Decision Boundaries",
        "Customer Churn Prediction using Logistic Regression",
        "Decision Trees: Information Gain, Gini Impurity & Pruning Strategies",
        "Random Forest: Bagging & Feature Importance Analysis",
        "Gradient Boosting: XGBoost, LightGBM & CatBoost Comparison",
        "Support Vector Machines (SVM): Hyperplanes & the Kernel Trick",
        "K-Nearest Neighbors (k-NN) & Naive Bayes Classification",
        "Handwritten Digit Recognition using SVM on MNIST Dataset",
        "Project: Credit Card Fraud Detection using Ensemble Methods"
      ]
    },
    {
      title: "Unsupervised Learning & Clustering",
      topics: [
        "K-Means Clustering: Elbow Method & Silhouette Analysis",
        "Customer Segmentation using K-Means on E-commerce Data",
        "DBSCAN: Density-based Clustering for Non-spherical Data",
        "Hierarchical Clustering: Dendrograms & Linkage Criteria",
        "Dimensionality Reduction: PCA (Principal Component Analysis)",
        "Visualization with t-SNE & UMAP for High-dimensional Data",
        "Association Rule Mining: Apriori Algorithm for Market Basket Analysis",
        "Project: Customer Segmentation Dashboard for a Retail Company"
      ]
    },
    {
      title: "Model Evaluation & Hyperparameter Tuning",
      topics: [
        "Confusion Matrix: Accuracy, Precision, Recall & F1-Score",
        "ROC Curves & AUC (Area Under Curve) Analysis",
        "K-Fold Cross-Validation & Stratified Sampling Techniques",
        "Hyperparameter Tuning: Grid Search, Random Search & Bayesian Optimization",
        "Bias-Variance Tradeoff: Diagnosing with Learning Curves",
        "Model Comparison: Selecting the Best Model for Production",
        "Project: Benchmarking 5 Classifiers on Titanic Survival Prediction"
      ]
    },
    {
      title: "MLOps & Model Deployment",
      topics: [
        "Model Serialization: Saving Models with Pickle, Joblib & ONNX",
        "Model Explainability: SHAP Values and LIME Interpretations",
        "Building REST APIs for ML Models using Flask & FastAPI",
        "Creating Interactive ML Dashboards with Streamlit",
        "Containerizing ML Applications with Docker",
        "Experiment Tracking & Model Registry with MLflow",
        "Monitoring Model Drift & Data Drift in Production",
        "Cloud Deployment: Deploying to AWS SageMaker & Azure ML Studio",
        "Project: Deploying a Salary Prediction Model as a Dockerized REST API with CI/CD"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Machine Learning Training</h1>
            <p className="text-lg mb-6 leading-relaxed">
              Learn ML algorithms, model building, evaluation, and deployment using real datasets. Gain hands-on experience to build intelligent systems.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/ML.png" alt="ML Training" fill className="object-contain" />
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
          Back to AI & Data
        </Link>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">ML Curriculum</h2>
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
