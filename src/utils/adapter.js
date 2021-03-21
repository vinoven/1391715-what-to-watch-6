export const adaptFilm = (film) => {

  const {
    poster_image: posterImage,
    preview_image: previewImage,
    background_image: backgroundImage,
    background_color: backgroundColor,
    video_link: videoLink,
    preview_video_link: previewVideoLink,
    scores_count: scoresCount,
    run_time: runTime,
    is_favorite: isFavourite,
    ...rest
  } = film;

  return {
    posterImage,
    previewImage,
    backgroundImage,
    backgroundColor,
    videoLink,
    previewVideoLink,
    scoresCount,
    runTime,
    isFavourite,
    ...rest
  };
};
