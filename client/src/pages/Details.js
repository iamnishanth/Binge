import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, getById, IMAGE_BASE_URL_HD } from "../requests";

const Details = () => {
  const { category, id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (category === "movie") {
        let res = await axios.get(BASE_URL + getById.movie(id));
        console.log(res.data);
        setDetails(res.data);
      } else if (category === "tv") {
        let res = await axios.get(BASE_URL + getById.tv(id));
        console.log(res.data);
        setDetails(res.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {details.id && (
        <>
          <img
            className="mt-2 h-96 w-full object-cover"
            src={IMAGE_BASE_URL_HD + details.backdrop_path}
            alt={details.id}
          />
          <div className="px-12">
            <div className="container-fluid px-4 py-4 md:relative md:bottom-20 bg-primary rounded-2xl">
              <div className="row">
                <div className="col-4 hidden md:block">
                  <img
                    className="rounded-2xl"
                    src={IMAGE_BASE_URL_HD + details.poster_path}
                    alt={details.id}
                  />
                  <hr className="border border-gray-800 mt-6" />
                  <div className="w-full p-4 flex flex-col gap-4">
                    <div className="w-full flex justify-between">
                      <h3 className="text-sm text-gray-500">Rating</h3>
                      <h3 className="text-sm text-gray-400">
                        {details.vote_average}
                      </h3>
                    </div>
                    <div className="w-full flex justify-between">
                      <h3 className="text-sm text-gray-500">Genre</h3>
                      <div>
                        {details.genres &&
                          details.genres.map((item) => (
                            <h3
                              className="text-sm text-right text-gray-400"
                              key={item.id}
                            >
                              {item.name + ", "}
                            </h3>
                          ))}
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <h3 className="text-sm text-gray-500">Runtime</h3>
                      <h3 className="text-sm text-gray-400">
                        {details.episode_run_time
                          ? details.episode_run_time
                          : details.runtime}
                        mins
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-8">
                  <h1 className="text-2xl font-bold mb-6">
                    {details.name ||
                      details.original_name ||
                      details.title ||
                      details.original_title}
                  </h1>
                  <div>
                    <h1 className="text-sm my-1 font-semibold text-gray-500">
                      SYNOPSIS
                    </h1>
                    <p className="text-sm text-gray-400 text-justify">
                      {details.overview}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-sm my-1 font-semibold text-gray-500 uppercase">
                      {details.name ||
                        details.original_name ||
                        details.title ||
                        details.original_title}
                      : Videos: Trailers, Teasers, Featurettes
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
