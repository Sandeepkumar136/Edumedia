import React from "react";
import { motion } from "framer-motion";

const Dev = () => {
  return (
    <motion.div 
      className="dev-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <motion.h4 
        className="heading-dev"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        For Developers
      </motion.h4>
      
      <motion.div 
        className="dev-s-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <h5 className="heading-dev-s">Software Used in</h5>
        <div className="dev-s-contain">
          <div className="dev-s-card">
            <i className="bx bxl-visual-studio"></i>
            <p className="text-dev-s-card">Vs Code</p>
          </div>
          <div className="dev-s-card">
            <i className="bx bxl-google"></i>
            <p className="text-dev-s-card">Google Fonts</p>
          </div>
          <div className="dev-s-card">
            <i className="bx bx-package"></i>
            <p className="text-dev-s-card">Boxicons</p>
          </div>
        </div>
        
        <motion.div 
          className="dese-dev"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          Developers interested in contributing or integrating similar
          functionalities can explore our open-source codebase. Our app is
          designed with modular components, making it easy to extend, modify, or
          enhance.
        </motion.div>
        
        <motion.ul 
          className="dev-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <li className="dev-item">
            <span className="heading-dev-item">API Integration</span>
            <p className="text-dev-item">
              Efficiently fetch and display book data using Open Library API.
            </p>
          </li>
          <li className="dev-item">
            <span className="heading-dev-item">State Management</span>
            <p className="text-dev-item">
              Utilize Context API for effective global state handling.
            </p>
          </li>
          <li className="dev-item">
            <span className="heading-dev-item">Component-Based Architecture</span>
            <p className="text-dev-item">
              Build scalable React applications with reusable components.
            </p>
          </li>
          <li className="dev-item">
            <span className="heading-dev-item">Performance Optimization</span>
            <p className="text-dev-item">
              Implement best practices for fast-loading apps.
            </p>
          </li>
          <li className="dev-item">
            <span className="heading-dev-item">Customization</span>
            <p className="text-dev-item">
              Modify styles, enhance features, or integrate third-party
              services.
            </p>
          </li>
          <li className="dev-item">
            <span className="heading-dev-item">Open Source Contribution</span>
            <p className="text-dev-item">
              Join our community, report issues, suggest improvements, and
              contribute enhancements.
            </p>
          </li>
        </motion.ul>
        
        <h5 className="heading-end">EndPoints</h5>
        <motion.div 
          className="end-point-contain"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <pre className="pre-endpoints">
            <p className="heading-pre">In Search</p>
            <code className="code-endpoints">
              https://openlibrary.org/search.json?q=harry+potter
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">In Library ID</p>
            <code className="code-endpoints">
              https://openlibrary.org/works/OL45883W.json
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">By ISBN</p>
            <code className="code-endpoints">
              https://openlibrary.org/isbn/9780140328721.json
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">By Author ID</p>
            <code className="code-endpoints">
              https://openlibrary.org/authors/OL23919A.json
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">By Cover ID</p>
            <code className="code-endpoints">
              https://covers.openlibrary.org/b/id/240727-S.jpg
            </code>
          </pre>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dev;