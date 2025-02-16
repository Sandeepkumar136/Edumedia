import React from "react";

const Dev = () => {
  return (
    <div className="dev-container">
      <h4 className="heading-dev">For Developers</h4>
      <div className="dev-s-container">
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
        <div className="dese-dev">
          Developers interested in contributing or integrating similar
          functionalities can explore our open-source codebase. Our app is
          designed with modular components, making it easy to extend, modify, or
          enhance.
        </div>
        <ul className="dev-content">
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
            <span className="heading-dev-item">
              Component-Based Architecture
            </span>
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
        </ul>
        <h5 className="heading-end">EndPoints</h5>
        <div className="end-point-contain">
          <pre className="pre-endpoints">
            <p className="heading-pre">
              In Search
            </p>
            <code className="code-endpoints">
            https://openlibrary.org/search.json?q=harry+potter
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">
              In Library ID
            </p>
            <code className="code-endpoints">
            https://openlibrary.org/works/OL45883W.json
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">
              By ISBN
            </p>
            <code className="code-endpoints">
            https://openlibrary.org/isbn/9780140328721.json
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">
              By Author ID
            </p>
            <code className="code-endpoints">
            https://openlibrary.org/authors/OL23919A.json
            </code>
          </pre>
          <pre className="pre-endpoints">
            <p className="heading-pre">
              By Cover ID
            </p>
            <code className="code-endpoints">
            https://covers.openlibrary.org/b/id/240727-S.jpg
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Dev;
