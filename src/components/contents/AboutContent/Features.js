import React from "react";

const Features = () => {
  return (
    <div className="feature-container">
      <div className="heading-fea">Features Embeded</div>
      <div className="f-base-contain">
        <h5 className="heading-f-base">Mainly Considered Features</h5>
        <div className="icon-packs-contain-f">
          <div className="icon-pack-f">
            <i className="bx bx-book"></i>
            <p className="icon-pack-text-f">Worlds All Registerd Books</p>
          </div>
          <div className="icon-pack-f">
            <i class="bx bxs-barcode"></i>
            <p className="icon-pack-text-f">ISBN Searcher and Scanner</p>
          </div>
          <div className="icon-pack-f">
            <i class="bx bx-search-alt"></i>
            <p className="icon-pack-text-f">Search All Books</p>
          </div>
        </div>
      </div>
      <div className="f-content">
        <ul className="f-list">
          <li className="item-f">
            <h5 className="heading-f-content">Book Search</h5>
            <p className="text-f-content">
              Search for books by title, author, or ISBN for quick access to
              information.
            </p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">ISBN Scanner</h5>
            <p className="text-f-content">
              Enter ISBN codes to instantly fetch book details.{" "}
            </p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">Book Details</h5>
            <p className="text-f-content">
            View descriptions, author information, and publication details.
            </p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">Reading Links</h5>
            <p className="text-f-content">
            Access available online reading options.
            </p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">User Experience</h5>
            <p className="text-f-content">
            Responsive design ensures smooth navigation across devices.
            </p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">State Management</h5>
            <p className="text-f-content">
            Powered by Context API for efficient data handling.
            </p>
          </li>
          <li className="item-f">
            <h5 className="heading-f-content">Confirmation Dialogs</h5>
            <p className="text-f-content">
            Dialogs: Alerts before refreshing or removing books for better control.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
