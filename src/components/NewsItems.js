import React from "react";

function NewsItems(props) {
  let { title, description, newsurl, imageUrl, author, date, source } = props;
  return (
    <div>
      <div>
        <div className="card my-3">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="Image unavailable"
          />
          <div className="card-body">
            <h5>
              <span class="badge bg-danger my-2">{source}</span>
            </h5>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              {author ? (
                <small class="text-muted">
                  By {author} on {new Date(date).toUTCString()}
                </small>
              ) : (
                <small class="text-muted">
                  Updated on {new Date(date).toUTCString()}
                </small>
              )}
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
