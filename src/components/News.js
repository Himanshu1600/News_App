import React from "react";
import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

function News(props) {
  const [api, setapi] = useState([]);
  const [page, setpage] = useState(1);
  const [totalarticles, settotalarticles] = useState(0);
  const [loading, setloading] = useState(false);

  const setprevious = () => {
    // console.log(page);
    setpage(page - 1);
    // console.log(page);
    fetchData(page - 1);
  };
  const setnext = () => {
    // console.log(page);
    setpage(page + 1);
    // console.log(page);
    fetchData(page + 1);
  };

  useEffect(() => {
    document.title = `The News App-${props.category}`;
    fetchData(1);
  }, []);

  const fetchData = async (pageno) => {
    // return fetch(
    //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=3b42ce41db6345428111256b753e99f5&page=${pageno}&pageSize=20`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setapi(data.articles);
    //     settotalarticles(data.totalResults);
    //   });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3b42ce41db6345428111256b753e99f5&page=${pageno}&pageSize=9`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setloading(false);
    setapi(parsedata.articles);
    settotalarticles(parsedata.totalResults);
  };
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center my-3">The News App </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row ">
            {api.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.hindustantimes.com/img/2021/08/31/1600x900/Breaking-News-Live-Blog-pic_1626307942790_1630368384239.jpg"
                    }
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="d-flex justify-content-between">
          <button
            disabled={page > 1 ? false : true}
            className="btn btn-danger"
            onClick={setprevious}
          >
            ← Previous
          </button>
          <button
            disabled={page >= Math.ceil(totalarticles / 9) ? true : false}
            className="btn btn-danger"
            onClick={setnext}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
