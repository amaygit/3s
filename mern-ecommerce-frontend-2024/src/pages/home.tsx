import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";
import videoCover from "../assets/videos/cover.mp4";
import { FaAnglesDown, FaHeadset } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Slider } from "6pp";
import { TbTruckDelivery } from "react-icons/tb";
// import {useEffect,useState} from "react";
import { LuShieldCheck } from "react-icons/lu";
import {
  useCategoriesQuery,
} from "../redux/api/productAPI";

const clients = [
  {
    src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
    alt: "react",
  },
  {
    src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
    alt: "node",
  },
  {
    src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg",
    alt: "mongodb",
  },
  {
    src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    alt: "express",
  },
  {
    src: "https://www.vectorlogo.zone/logos/js_redux/js_redux-ar21.svg",
    alt: "redux",
  },
  {
    src: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg",
    alt: "typescript",
  },
  {
    src: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg",
    alt: "sass",
  },
  {
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg",
    alt: "firebase",
  },
  {
    src: "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg",
    alt: "figma",
  },

  {
    src: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
    alt: "github",
  },

  {
    src: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
    alt: "Docker",
  },
  {
    src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg",
    alt: "Kubernetes",
  },
  {
    src: "https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg",
    alt: "Nest.js",
  },

  {
    src: "https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg",
    alt: "GraphQL",
  },

  {
    src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-ar21.svg",
    alt: "Jest",
  },

  {
    src: "https://www.vectorlogo.zone/logos/redis/redis-ar21.svg",
    alt: "Redis",
  },

  {
    src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
    alt: "PostgreSQL",
  },
  {
    src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg",
    alt: "Jenkins",
  },
];

// const banners1 = [
//   "https://res.cloudinary.com/dj5q966nb/image/upload/v1719253445/rmbjpuzctjdbtt8hewaz.png",
//   "https://res.cloudinary.com/dj5q966nb/image/upload/v1719253433/ticeufjqvf6napjhdiee.png",
// ];
const banners= [
  "https://fancyhouse-design.com/wp-content/uploads/2023/12/A-console-table-near-the-entrance-provides-a-stylish-spot-for-keys-and-decorative-accents.jpg",

  "https://fancyhouse-design.com/wp-content/uploads/2023/12/A-cozy-area-rug-adds-warmth-and-texture-to-the-living-space.jpg",
  "https://fancyhouse-design.com/wp-content/uploads/2023/12/A-glass-top-coffee-table-adds-a-touch-of-elegance-while-keeping-the-space-airy.jpg",
  "https://fancyhouse-design.com/wp-content/uploads/2023/12/A-modular-sofa-allows-for-customizable-seating-arrangements-to-suit-any-occasion.jpg",
  "https://fancyhouse-design.com/wp-content/uploads/2023/12/A-pair-of-accent-chairs-creates-a-cozy-reading-nook-by-the-window.jpg",

];
// const categories = [
//   "Steel",
//   "Cement",
//   "Raw Materials",
//   "Brick and Blocks",
//   "Wood materials",
//   "Electrical items",
//   "Plumbing",
//   "Flooring",
//   "Painting",
//   "Roofing",
//   "Interior Works",
//   "Tower Cranes",
//   "Mobile Cranes",
//   "Forklifts",
//   "Telehandlers"
// ];


const services = [
  {
    icon: <TbTruckDelivery />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $200",
  },
  {
    icon: <LuShieldCheck />,
    title: "SECURE PAYMENT",
    description: "100% secure payment",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 SUPPORT",
    description: "Get support 24/7",
  },
];

const Home = () => {
  const { data, isError, isLoading } = useLatestProductsQuery("");

  const {
    data: categoriesResponse,
    // isLoading: loadingCategories,

  } = useCategoriesQuery("");

  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");

  const coverMessage =
    "Ecommerce isn't just shopping; it's a vibrant experience. Products, images, and descriptions speak volumes, creating a connection with every click. It's a way to discover stories, find inspiration, or fulfill needs seamlessly.".split(
      " "
    );
    // const [colors, setColors] = useState<string[]>([]);
    // const getRandomColor = () => {
    //   const r = Math.floor(Math.random() * 256); // Random Red
    //   const g = Math.floor(Math.random() * 256); // Random Green
    //   const b = Math.floor(Math.random() * 256); // Random Blue
    //   return `rgb(${r}, ${g}, ${b})`;
    // };
    // useEffect(() => {
    //   const updateColors = () => {
    //     const newColors =  categoriesResponse?.categories.map(() => getRandomColor());
    //     setColors(newColors);
    //     console.log(colors);
        
    //   };
  
    //   updateColors(); // Set initial colors
    //   const interval = setInterval(updateColors, 2000); // Change colors every second
  
    //   return () => clearInterval(interval); // Cleanup on unmount
    // }, [categoriesResponse]);
  return (
    <>
      <div className="home">
        <section></section>

        <div>
          <aside>
            <h1>Categories</h1>
            <ul>
              { categoriesResponse?.categories.map((category) => (
                <li key={category}
                style={{
                  // color: colors[index] || "black", // Use color from state or fallback
                  transition: "color 0.5s ease", // Smooth transition
                }}
                >
                  <Link to={`/search?category=${category.toLowerCase()}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </aside>
          <Slider
            autoplay
            autoplayDuration={1500}
            showNav={false}
            images={banners}
          />
        </div>

        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>

        <main>
          {isLoading ? (
            <>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} style={{ height: "25rem" }}>
                  <Skeleton width="18.75rem" length={1} height="20rem" />
                  <Skeleton width="18.75rem" length={2} height="1.95rem" />
                </div>
              ))}
            </>
          ) : (
            data?.products.map((i) => (
              <ProductCard
                key={i._id}
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCartHandler}
                photos={i.photos}
              />
            ))
          )}
        </main>
      </div>

      <article className="cover-video-container">
        <div className="cover-video-overlay"></div>
        <video autoPlay loop muted src={videoCover} />
        <div className="cover-video-content">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ecommerece
          </motion.h2>
          {coverMessage.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
        <motion.span
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
        >
          <FaAnglesDown />
        </motion.span>
      </article>

      <article className="our-clients">
        <div>
          <h2>Our Clients</h2>
          <div>
            {clients.map((client, i) => (
              <motion.img
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i / 20,
                    ease: "circIn",
                  },
                }}
                src={client.src}
                alt={client.alt}
                key={i}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: clients.length / 20,
              },
            }}
          >
            Trusted By 100+ Companies in 30+ countries
          </motion.p>
        </div>
      </article>

      <hr
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          border: "none",
          height: "1px",
        }}
      />

      <article className="our-services">
        <ul>
          {services.map((service, i) => (
            <motion.li
              initial={{ opacity: 0, y: -100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: i / 20,
                },
              }}
              key={service.title}
            >
              <div>{service.icon}</div>
              <section>
                <h3>{service.title}Y</h3>
                <p>{service.title}</p>
              </section>
            </motion.li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default Home;
