import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Yonas Tesfu",
        position : "Full-stack Developer",
        img_url : "https://avatars.githubusercontent.com/u/72081991?v=4",
        stars : 5,
        disc : `I am writing to recommend Selma Hamutenya with whom I have had the pleasure of working with on 
        several web development projects, and I can confidently say that she is an exceptional developer.
        Selma is a highly skilled web developer with expertise in a variety of web development technologies 
        and frameworks. She is able to create elegant and efficient code that is both functional and aesthetically pleasing. 
        She has a keen eye for design and is able to implement user-friendly interfaces that are easy to navigate. What sets 
        Selma apart, however, is her work ethic and her ability to work collaboratively with others. She is always willing 
        to go the extra mile to ensure that projects are completed on time and to the highest possible standard. 
        She is an excellent communicator who is able to explain complex technical concepts in a way that is easy for 
        team members to understand. She is also a supportive team member who is always willing to offer feedback and advice to others.`
    },
    {
        name : "Justice Bajeri",
        position : "Full-stack Developer",
        img_url : "https://avatars.githubusercontent.com/u/107192076?v=4",
        stars : 4,
        disc : `Selma is talented and has a good appetite for acquiring knowledge. She possesses excellent coding, 
        communication, collaboration, and pair programming skills. She is a hard-working individual who's always eager 
        to follow best practices while implementing quality code. She has a very bright future and would definitely be
        a valuable addition to any software development team. She would make a valuable resource for any company & I wouldn't 
        hesitate to recommend her for any software development role.`
    },
    {
        name : "Kidist Guta",
        position : "Software Engineer",
        img_url : "https://avatars.githubusercontent.com/u/95876178?v=4",
        stars : 5,
        disc : `I have known Selma for more than 6 months. She has been a very good mentee ever since. Selma is an amazing person, 
        professionally and personally. I have always known her to be a very hardworking and dedicated person. In addition to her soft skills, 
        she is a joy to work with because of her amazingly positive attitude and eagerness to learn. I would therefore highly recommend Selma
        for any opportunities that match her skill set.`
    },
    {
        name : "Amine Ouasef",
        position : "Full-stack Developer",
        img_url : "https://avatars.githubusercontent.com/u/104319462?v=4",
        stars : 4,
        disc : `Selma is a passionate coder and a warm person, she was one of the first partners I had the chance to work with,
        and working with her is always amusing and productive. She is a good team player and will always make sure to get the job
        done in the best way while at the same time managing her partnership perfectly, I strongly recommend her.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Testimonials & Recommendations</span>
            <h1>what clients and peers say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #db7093;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #db7093;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`