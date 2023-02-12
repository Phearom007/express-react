const { REACT_APP_API_URL } = process.env || {};

const BlogItem = (props) => {
    const { title, date, link, image } = props;

  return (
    <div className="blog__item">
      <div
        className="blog__item__pic set-bg"
        data-setbg={image}
      ></div>
      <div className="blog__item__text">
        <span>
          <img src={`${REACT_APP_API_URL}/mf_img/icon/calendar.png`} alt="" /> {date}
        </span>
        <h5>{title}</h5>
        <a href={link}>Read More</a>
      </div>
    </div>
  );
};

export default BlogItem;