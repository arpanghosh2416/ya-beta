import React, { useRef, useState } from "react";
import classNames from "classnames";
import { courses } from "../../assets";
import { Modal } from "../../components";

import css from "./Course.module.css";

// Mapping of keywords to logo image paths
function renderModuleWithLogo(moduleText) {
  // Phrase-specific first (for "Spring Framework")
  const phraseLogos = {
    "Spring Framework": "https://youngarchitects.in/assets/coursesImage/spring-2.svg",
    // Add more phrases if needed
  };
  // Keyword-specific (single words)
  const keywordLogos = {
    MongoDB: "https://youngarchitects.in/assets/coursesImage/mongo.png",
    Oracle: "https://youngarchitects.in/assets/coursesImage/oracleDB.png",
    Selenium: "https://youngarchitects.in/assets/coursesImage/selenium.svg",
    NodeJs: "https://youngarchitects.in/assets/coursesImage/node.png",
    ReactJs: "https://youngarchitects.in/assets/coursesImage/react.png",
    NextJs: "https://youngarchitects.in/assets/coursesImage/next.webp",
  };

  // 1. Check and handle phrase match first (e.g., "Spring Framework")
  for (const phrase in phraseLogos) {
    if (moduleText.includes(phrase)) {
      const parts = moduleText.split(new RegExp(`(${phrase})`));
      let rendered = [];
      let key = 0;
      for (let i = 0; i < parts.length; i++) {
        if (parts[i] === phrase) {
          rendered.push(
            <span className="inline-flex items-center align-middle" key={key++}>
              {phrase}
              <img
                src={phraseLogos[phrase]}
                alt={phrase}
                className="ml-1 h-4 w-auto"
                style={{ display: "inline", verticalAlign: "middle" }}
              />
            </span>,
          );
        } else if (parts[i]) {
          rendered.push(parts[i]);
        }
      }
      return rendered;
    }
  }

  // 2. Handle single-word keyword matches (case-insensitive)
  const regex = new RegExp(
    `\\b(${Object.keys(keywordLogos).join("|")})\\b`,
    "g",
  );
  let lastIndex = 0;
  let match;
  let result = [];
  let keyCount = 0;
  while ((match = regex.exec(moduleText)) !== null) {
    const { 0: keyword, index } = match;
    if (lastIndex < index) result.push(moduleText.substring(lastIndex, index));
    result.push(
      <span className="inline-flex items-center align-middle" key={keyCount++}>
        <img
          src={keywordLogos[keyword]}
          alt={keyword}
          className="mr-1 h-7 w-auto"
        />
        <span>{keyword}&nbsp;</span>
      </span>,
    );
    lastIndex = regex.lastIndex;
    if (moduleText[lastIndex] === " ") lastIndex++;
  }
  if (lastIndex < moduleText.length)
    result.push(moduleText.substring(lastIndex));
  return result;
}

//Course Card Logic
const CourseCards = (props) => {
  const modalRootRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleModalRoot = (course) => {
    setSelectedCourse(course);

    modalRootRef.current.toggle();
  };

  return (
    <article className="flex flex-wrap justify-center gap-6">
      {courses.map((course) => {
        return (
          <section
            onClick={() => {
              toggleModalRoot(course);
            }}
            className={classNames(
              css.exactShadowLikeBlueFlame,
              "flex h-[130px] w-full cursor-pointer justify-between rounded border-r-4 border-[#1b202b] bg-[#1b202b] px-4 duration-100 hover:-translate-y-4 hover:border-secondary-light md:w-[350px] md:px-6",
            )}
          >
            <div className="flex w-full flex-col justify-center font-[Roboto] text-lg font-medium leading-6 text-white">
              <div className="">{course.name}</div>
            </div>
            <div className="flex w-full items-center justify-end">
              <img className="w-[3.2rem] sm:w-[3.8rem]" src={course.image} alt="course-images" />
            </div>
          </section>
        );
      })}
      <Modal ref={modalRootRef}>
        <div className="italic">
          <ul className="list-disc pl-5">
            {selectedCourse?.modules.map((point, index) => (
              <li key={index} className="mb-1">
                {renderModuleWithLogo(point)}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </article>
  );
};

export default CourseCards;
