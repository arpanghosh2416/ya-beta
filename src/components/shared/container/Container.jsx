import React from "react";
import classNames from "classnames";
import css from "./Container.module.css";

const Container = (props) => {
  const { children, className } = props;

  return (
    <section className={classNames(css.container, className)}>
      {children}
    </section>
  );
};

export default Container;
