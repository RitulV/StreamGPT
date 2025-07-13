import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_IMG_URL } from "../assets/constants";

type AccordionItem = {
  Label: string;
  Content: string;
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    if (isOpen === false) {
      setIsOpen(!isOpen);
    }
    if (isOpen && openIndex === index) {
      setOpenIndex(-1);
      setIsOpen(false);
    } else {
      setOpenIndex(index);
    }
  };

  const imgUrls: Array<string> = [
    "apple-ios-logo.jpg",
    "google-tv-logo.png",
    "one-plus-tv-logo.png",
    "Amazon-Fire-TV-Logo.jpg",
    "Android_TV-Logo.png",
    "Samsung-Smart-TV-logo.png",
  ];

  const FAQs: AccordionItem[] = [
    {
      Label: "What is Stream?",
      Content:
        "Stream is a video-streaming service that offers a wide variety of TV shows, movies, anime, documentaries and more.",
    },
    {
      Label: "How much does Stream cost?",
      Content:
        "Stream can cost you anywhere from ₹200 to ₹800 depending on the plan you choose. No hidden fees, no extra charges.",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center bg-white mt-5">
        <img
          className="h-[60px] w-[160px] object-cover"
          src={BASE_IMG_URL + "stream_white.png"}
        />
      </div>

      <div className="flex flex-col items-center text-black bg-white h-fit">
        <h2 className="text-6xl subpixel-antialiased font-medium">
          Now readily available on
        </h2>
        <div className="grid grid-cols-3 grid-rows-2">
          {imgUrls.map((imgUrl) => (
            <img
              src={BASE_IMG_URL + imgUrl}
              className="m-5 object-cover h-[100px] w-[200px]"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center text-black bg-white">
        <div className="flex flex-col m-5 mx-10 w-[60%]">
          <p className="self-center text-2xl font-bold">
            Questions? We got you covered
          </p>
          {FAQs.map((question, index) => (
            <div>
              <div className="flex justify-between m-3">
                <div className="text-2xl font-light">{question.Label}</div>
                <img
                  src={
                    BASE_IMG_URL +
                    (openIndex === index ? "pull-up.png" : "drop-down-3.png")
                  }
                  className="flex self-center object-cover h-[20px] w-[20px] hover:cursor-pointer ease"
                  onClick={() => toggleAccordion(index)}
                />
                {}
              </div>

              {openIndex === index && (
                <div className="mx-3.5 my-1 transition duration-1000 ease-out">
                  {question.Content}
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 my-10">
        <div className="mx-20">
          <img
            className="h-[60px] w-[160px] object-cover"
            src={BASE_IMG_URL + "stream.png"}
          />
          <h3 className="pl-2">
            Bulding in public {" "}
            <Link
              to={"https://www.linkedin.com/in/ritul-vaghela-89b7b6249/"}
              className="text-blue-500"
            >
              @RitulVaghela
            </Link>
          </h3>
        </div>

        <div className="flex justify-center">
          <ul className="& *:m-2.5 text-gray-400 cursor-pointer">
            <li className="hover:text-white">Service Terms</li>
            <li className="hover:text-white">Privact Policy</li>
            <li className="hover:text-white">Pricing</li>
            <li className="hover:text-white">Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
