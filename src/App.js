import { useEffect, useRef, useState } from "react";
import "./App.css";
// import img1 from "/img1.jpg";

const App = () => {
  const myRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "/img/img1.jpg",
          "/img/img2.jpg",
          "/img/img3.jpg",
          "/img/img4.jpg",
          "/img/img5.jpg",
        ],
        description: "UX desgining",
        content: "Welcome to our channel...",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  });

  const { products, index } = state;

  useEffect(() => {
    const { index } = state;
    myRef.current.children[index].className = "active";
  }, []);

  const handleTab = (index) => {
    setState({ products, index: index });
    setActiveIndex(index);
    const images = myRef.current.children;
    console.log("imgs", images);
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  return (
    <div className="App">
      {state.products.map((item) => (
        <div className="details" key={item._id}>
          {JSON.stringify(activeIndex)}
          <a
            href={item.src[activeIndex]}
            rel="selectors-effect-speed: 600;"
            id="zoom"
            className="MagicZoom"
          >
            <div className="big-img">
              <img className="MagicZoom" src={item.src[activeIndex]} alt="" />
            </div>
          </a>
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <div className="colors">
              {" "}
              {item.colors.map((color, indx) => (
                <button style={{ background: color }} key={indx}></button>
              ))}{" "}
            </div>
            <p>{item.description}</p>
            <p>{item.content}</p>
            <div className="thumb" ref={myRef}>
              {item.src.map((img, indx) => (
                <a href={img} data-image={img} title="...">
                  <img
                    src={img}
                    alt="img"
                    key={indx}
                    onClick={() => handleTab(indx)}
                    onMouseEnter={() => handleTab(indx)}
                    onMouseOver={() => handleTab(indx)}
                  />
                </a>
              ))}
            </div>
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
