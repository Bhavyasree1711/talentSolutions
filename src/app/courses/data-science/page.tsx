"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DataSciencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const curriculum = [
    {
      title: "Python for Data Science",
      topics: [
        "Introduction to Python & Installation (Jupyter, VS Code, Anaconda)",
        "Variables, Data Types, Loops, Functions & Lambda Expressions",
        "File Handling, Exception Handling & Working with JSON/CSV",
        "NumPy: Arrays, Broadcasting, and Vectorized Operations",
        "Pandas: DataFrames, Groupby, Merging, Pivot Tables & Multi-indexing",
        "Data Visualization with Matplotlib & Seaborn",
        "Setting up Virtual Environments with Conda & Pip",
        "Project: Automated Data Cleaning Script for a Real-world CSV Dataset"
      ]
    },
    {
      title: "Statistics & Probability for Data Science",
      topics: [
        "Descriptive Statistics: Mean, Median, Mode, Variance & Standard Deviation",
        "Probability Theory: Conditional Probability & Bayes' Theorem",
        "Statistical Distributions: Normal, Binomial, Poisson & Exponential",
        "Inferential Statistics: Central Limit Theorem & Confidence Intervals",
        "Hypothesis Testing: t-tests, Chi-square Tests & ANOVA",
        "Correlation & Regression Analysis Fundamentals",
        "A/B Testing: Designing Experiments & Interpreting Results",
        "Project: A/B Testing Analysis for an E-commerce Website Conversion Rate"
      ]
    },
    {
      title: "Data Acquisition & Wrangling",
      topics: [
        "SQL for Data Science: SELECT, JOINs, Window Functions & Subqueries",
        "Connecting to Databases: PostgreSQL, MySQL & SQLite with Python",
        "Web Scraping: Extracting Data with BeautifulSoup & Selenium",
        "Working with APIs: RESTful Services, JSON Parsing & Authentication",
        "Data Cleaning: Handling Null Values, Duplicates & Type Casting",
        "Data Validation: Schema Consistency & Data Integrity Checks",
        "Working with Large Files: Chunking, Dask & Memory Optimization",
        "Project: Building a Web Scraper to Collect & Clean Job Listings Data"
      ]
    },
    {
      title: "Exploratory Data Analysis (EDA) & Visualization",
      topics: [
        "Univariate Analysis: Histograms, Box Plots & Density Plots",
        "Bivariate Analysis: Scatter Plots, Heatmaps & Pair Plots",
        "Interactive Visualizations with Plotly & Dash Dashboards",
        "Geospatial Visualization with Folium & Plotly Mapbox",
        "Feature Correlation Analysis: Pearson, Spearman & Kendall Coefficients",
        "Storytelling with Data: Designing Executive-ready Visual Reports",
        "Project: Interactive EDA Dashboard for COVID-19 Data using Plotly Dash"
      ]
    },
    {
      title: "Machine Learning for Data Science",
      topics: [
        "House Price Prediction using Linear Regression",
        "Customer Churn Prediction using Logistic Regression",
        "Classification with Decision Trees & Random Forests",
        "Gradient Boosting: XGBoost & LightGBM for Tabular Data",
        "Support Vector Machines for Text Classification",
        "K-Nearest Neighbors (k-NN) for Recommendation Systems",
        "Model Evaluation: Confusion Matrix, ROC-AUC & Cross-validation",
        "Hyperparameter Tuning with Grid Search & Random Search",
        "Project: Predicting Loan Default Risk using Ensemble Methods"
      ]
    },
    {
      title: "Unsupervised Learning & Advanced Analytics",
      topics: [
        "K-Means Clustering for Customer Segmentation",
        "DBSCAN for Anomaly Detection in Transactions",
        "Hierarchical Clustering with Dendrograms",
        "Dimensionality Reduction: PCA & t-SNE for Data Exploration",
        "Time Series Analysis: Trend, Seasonality & ARIMA Forecasting",
        "Natural Language Processing: Tokenization & Sentiment Analysis",
        "Recommender Systems: Collaborative vs Content-based Filtering",
        "Project: Building a Movie Recommendation Engine with Collaborative Filtering"
      ]
    },
    {
      title: "Feature Engineering & Model Optimization",
      topics: [
        "Feature Creation: Polynomial Features & Interaction Terms",
        "Categorical Encoding: One-Hot, Label & Target Encoding",
        "Feature Scaling: Standardization vs Normalization",
        "Feature Selection: RFE, Boruta & Mutual Information",
        "Handling Imbalanced Data: SMOTE & Undersampling Techniques",
        "Cross-validation Strategies: K-Fold, Stratified & Time Series Split",
        "Automated ML: Introduction to Auto-sklearn & TPOT",
        "Project: End-to-End Feature Engineering Pipeline for Insurance Claim Prediction"
      ]
    },
    {
      title: "Data Science Deployment & Communication",
      topics: [
        "Model Deployment: Serving Predictions with Flask & FastAPI",
        "Building Interactive Dashboards with Streamlit",
        "Containerizing Data Science Apps with Docker",
        "Cloud Deployment: AWS SageMaker & Azure ML Studio",
        "Experiment Tracking & Model Versioning with MLflow",
        "Creating Automated Data Pipelines with Airflow",
        "Communicating Insights: Translating Metrics into Business Value",
        "Project: Deploying a Sales Forecasting Dashboard to the Cloud"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Data Science Training</h1>
            <p className="text-lg mb-6 leading-relaxed">
              Learn data analysis, visualization, statistics, and machine learning for real-world insights. Extract actionable knowledge from complex datasets.
            </p>
            <Link href="/#contact" className="px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              Enroll Now
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64">
            <Image src="/images/datascience.png" alt="Data Science" fill className="object-contain" />
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
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Data Science Curriculum</h2>
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
