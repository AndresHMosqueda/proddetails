import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const myRef = useRef();
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://www.upsieutoc.com/images/2021/01/07/img2.png",
          "https://www.upsieutoc.com/images/2021/01/07/img2.png",
          "https://www.upsieutoc.com/images/2021/01/07/img3.png",
          "https://www.upsieutoc.com/images/2021/01/07/img4.png",
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
          <div className="big-img">
            <img src={item.src[index]} alt="" />
          </div>

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
                <img
                  src={img}
                  alt="img"
                  key={indx}
                  onClick={() => handleTab(indx)}
                />
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
