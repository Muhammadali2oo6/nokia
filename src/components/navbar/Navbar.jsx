import React from "react";
import "./navbar.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
></link>;
function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="up_nav">
          <p>Careers</p>
          <p>Investors</p>
          <p>Newsroom</p>
        </div>
        {/* tepa nav tugadi */}
        <div className="down_nav">
          <div className="logo">
            <svg
              width="140"
              height="40"
              viewBox="0 0 170 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M117.514 1.21646L117.514 38.7835H123.148L123.148 1.21646H117.514ZM57.3221 0.57473C46.3463 0.574681 37.8303 8.56332 37.8303 20C37.8303 31.9517 46.3463 39.4255 57.3221 39.4253C68.2979 39.4251 76.8314 31.9517 76.8139 20C76.798 9.16418 68.2979 0.574779 57.3221 0.57473ZM71.1901 20C71.1901 28.4666 64.9812 34.0774 57.3221 34.0774C49.663 34.0774 43.4541 28.4666 43.4541 20C43.4541 11.687 49.663 5.92265 57.3221 5.92265C64.9812 5.92265 71.1901 11.687 71.1901 20ZM0 3.39001e-06V38.7835H5.74992L5.74992 13.1531L35.6298 40V31.9591L0 3.39001e-06ZM81.0513 20L101.961 38.7836H110.345L89.4038 20L110.345 1.21644H101.961L81.0513 20ZM170 38.7835H163.802L159.27 30.4644H138.742L134.209 38.7835H128.011L135.517 24.9176H156.322L145.948 5.64789L149.006 0L149.006 3.76291e-05L149.006 0L170 38.7835Z"
                fill="#005AFF"
              />
            </svg>
          </div>
          <div className="down_catagory">
            <p>Service providers</p>
            <p>Enterprises and governments</p>
            <p>Licensing</p>
            <p>Patners</p>
            <p>Insights and research</p>
            <p>We are NokiA</p>
          </div>
          <div className="down_icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAoFJREFUSEu11U+oVlUUBfCfEmmURoUVpSgEJgll0agitEFk0qAE839JQRqkBFFBomZhg9JBStEfEpUshEKiCAXBiFCIQG2QhUGTtFJS0MSyMlbsT+67fN97A987s3vPOXvts9faaw8zxGvYEMc3EMAIzMR9uAUTcA4/YR8+x8c42yvR/gCm440K2t9DD2ExdnU71AtgFVbWhT9waWV5K/7BflyMzl6OPoO1bZBuAAkcgBN4DtMwG2vwQgV4Bc9XeT7Fa7gSy/B6E6QN8AA+wWncgx9xpOo+Fr/V5cuLh1EYh+ztxkjcja86IE2AHP4B1+JRbMLjeKcyDdnN9R4W1WtfrDsb8T1uxl853ARYUqR+iyn4Fx9UeR5DAjZX57V7cAeG4wAm40FsbwN8hvuxFOsr0neYVIAhtrny0pQvXF1RGyH6VbyNJ9oAP+O6VrBcTr3H4FgXGZ7EZbgaR3E7vq4eieL6lCjEXjJInX28VNUHoJPNYGAk1uj2C8L+xFaJfsE1uB6HuyCnbFeV8n7FbfgG4e6mNsD7mIunsKGC5XAuRSVRS3OF2N9LjtF/POpprMNmPNIGWFAbUUtkmpVeWIgn8WYPmaap7qq9g7gRD2NbGyAEp0zpzDn4ENH/u9iKeS2A/M9+bCWNNh9bqlnTaH+2AfJ9L3aUVdyJcBCtnyrgyDYr5QknKU1qfQM+wkWYii87yXQzuxjay6X7ZzGr5sHqhsOuqKz31kyIQaaTm/z9j9HLrpfjpcqiY8l5coZO7mTYZBidqVeE4DhpxwHOV7O/gTMDb5VE++uNDJyY4hfdDg00MlPjh8qjQtz4kmNsPBLeWab2d68MBgK44K4ecoD/AENCihm22bj4AAAAAElFTkSuQmCC" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcJJREFUSEvV1UuIzWEYx/HPoFlIZMhkowgr4xKGcstmlIX9KBYuC6KEFTUbCzuS+8ICCbOWWBBDySWkRJRyyYJIRBi3Hr1TOv3nvO90moVnc+p/nv/7fZ/L7/dvMsjRNMjnGwhgAjqxHDPSxe7hPE7jVdVlSwAjcRIr6lT7G91Ygy//5uUAw3ET0/ANR7EPz9Ihk7AV69Gcchehtw+SA5zAKrzEMjzqp4rpuIDx2INtJYA2PMAPtCP6XS8W4yq+YyJeR3K9CvZjEw5gc+G2ncJK7MDuHOApJqf+PywELMVlXENUVLeCGGoMbih+FQJa8A7vMSYHeIuxGIHPhYDI/YSPGJUDXMESzMbdQsB83MAdzM0BDmEDjqTfEsZxrMYudOUAc3B7AGsaAuvBT4QAX+QA8f+xJP/n6MCTfsqYmYTWmpS+pURo4UEXEX2N+IrD2JuUHc+mJqtYi2G4hYUlVjEalzArDfgMdvZtRkUVYXZnsa5246qUHKsZh4e/3EeI5wNix0PR8xDzGZKs5BziAn+toTZqAeNwHVPwGAuSaEo2qDKnFrARB5NrhgZCbA1FVYu2I2z6TUMnp5dz34OGGf8/4A8PgFkZBxO42QAAAABJRU5ErkJggg==" />
          </div>
        </div>
      </div>
      {/* navbar tuagdi */}
      <div className="header">
        <div className="header_img1">
          <h1>Network topics for service providers</h1>
        </div>
        <div className="header_lorem">
          <p>
            Nokia is a B2B technology innovation leader pioneering the future
            where <br /> networks meet cloud. We are making high-performance
            connectivity more <br /> consumable and sustainable while also
            securely opening up networks for <br /> innovation and
            collaboration.
          </p>
        </div>
        <div className="header_img2">
          <div className="h_one">
            <div className="img"></div>
            <div className="h_text">
              <p>Metaverse</p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAATJJREFUWEft1jFuwjAUBuD/9QCVOpBU3CB0qnshhASoA1LXioUbdKm6FBbuA0yYMwB34FWuSsUAMbb/SqnkrHbkL/+zXyxo2CMN8yCDfBXJCeWEfAn4xml7qPW0eb3RQ3u7fBj5Fq0bp4Baxr4J8PKz0Odu2RnEoiig4tF+QPB8gohGUUAOwkLRQCwUFeRQpbEzBXqx5aODAJXSbKaxqD8AuWwuoaohIJp87AuzngQfY4VAxLWC2+O7qpjuV9WgDnVVQoWxtV8VhBXMd4uqewn1X0FxJRORkQJ3vyUTzPaLqp9csqCSfE8+s6k9pTqucVXJwkDxJ8ytQwal9SA6KLVLU0GN+rmyMLSETi9oAn1PuTXSNnVp7BjQ+xQMLaGwtlA/m5YQC5VBviRzQjkhXwK+8S+1En8lWorNNAAAAABJRU5ErkJggg==" />
            </div>
            <div className="about">
              <p>
                The metaverse is a partial or fully immersive digital <br />{" "}
                networked experience that brings together people, <br /> places,
                objects, and/or information in real-time.
              </p>
            </div>
          </div>
          <div className="h_one">
            <div className="img2"></div>
            <div className="h_text">
              <p>Metaverse</p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAATJJREFUWEft1jFuwjAUBuD/9QCVOpBU3CB0qnshhASoA1LXioUbdKm6FBbuA0yYMwB34FWuSsUAMbb/SqnkrHbkL/+zXyxo2CMN8yCDfBXJCeWEfAn4xml7qPW0eb3RQ3u7fBj5Fq0bp4Baxr4J8PKz0Odu2RnEoiig4tF+QPB8gohGUUAOwkLRQCwUFeRQpbEzBXqx5aODAJXSbKaxqD8AuWwuoaohIJp87AuzngQfY4VAxLWC2+O7qpjuV9WgDnVVQoWxtV8VhBXMd4uqewn1X0FxJRORkQJ3vyUTzPaLqp9csqCSfE8+s6k9pTqucVXJwkDxJ8ytQwal9SA6KLVLU0GN+rmyMLSETi9oAn1PuTXSNnVp7BjQ+xQMLaGwtlA/m5YQC5VBviRzQjkhXwK+8S+1En8lWorNNAAAAABJRU5ErkJggg==" />
            </div>
            <div className="about">
              <p>Discover how 5G can help unleash new business <br /> growth for CSPs beyond connectivity</p>
            </div>
          </div>
          <div className="h_one">
            <div className="img3"></div>
            <div className="h_text">
              <p>Metaverse</p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAATJJREFUWEft1jFuwjAUBuD/9QCVOpBU3CB0qnshhASoA1LXioUbdKm6FBbuA0yYMwB34FWuSsUAMbb/SqnkrHbkL/+zXyxo2CMN8yCDfBXJCeWEfAn4xml7qPW0eb3RQ3u7fBj5Fq0bp4Baxr4J8PKz0Odu2RnEoiig4tF+QPB8gohGUUAOwkLRQCwUFeRQpbEzBXqx5aODAJXSbKaxqD8AuWwuoaohIJp87AuzngQfY4VAxLWC2+O7qpjuV9WgDnVVQoWxtV8VhBXMd4uqewn1X0FxJRORkQJ3vyUTzPaLqp9csqCSfE8+s6k9pTqucVXJwkDxJ8ytQwal9SA6KLVLU0GN+rmyMLSETi9oAn1PuTXSNnVp7BjQ+xQMLaGwtlA/m5YQC5VBviRzQjkhXwK+8S+1En8lWorNNAAAAABJRU5ErkJggg==" />
            </div>
            <div className="about"><p>Explore how digital technologies ensure innovation <br /> for a sustainable future.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
