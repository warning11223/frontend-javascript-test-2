import React from "react";

import s from "./CurrentBook.module.scss";
import book from "../../../../img/book.jpg";
import { Link } from "react-router-dom";

export const CurrentBook = () => {
  return (
    <div className={s.current}>
      <div className={s.current__wrapper}>
        <div className={s.current__left}>
          <img src={book} alt="book" className={s.current__img} />
        </div>
        <div className={s.current__right}>
          <p className={s.current__categories}>Art/General</p>
          <p className={s.current__name}>J.S Bacg asjfasdfasdkfjska</p>
          <p className={s.current__authors}>J.S Bacg DSSDd DSDDS</p>
          <div className={s.current__desc__wrapper}>
            <p className={s.current__desc}>
              J.S Bacg DSSDd DSDDS fsad fasd fasfdasfsad fsadfa J.S Bacg DSSDd
              DSDDS fsad fasd fasfdasfsad fsadfaJ.S Bacg DSSDd DSDDS fsad fasd
              fasfdasfsad fsadfaJ.S Bacg DSSDd DSDDS fsad fasd fasfdasfsad
              fsadfaJ.S Bacg DSSDd DSDDS fsad fasd fasfdasfsad fsadfaJ.S Bacg
              DSSDd DSDDS fsad fasd fasfdasfsad fsadfaJ.S Bacg DSSDd DSDDS fsad
              fasd fasfdasfsad fsadfaJ.S Bacg DSSDd DSDDS fsad fasd fasfdasfsad
              fsadfaJ.S Bacg DSSDd DSDDS fsad fasd fasfdasfsad fsadfaJ.S Bacg
              DSSDd DSDDS fsad fasd fasfdasfsad fsadfaJ.S Bacg DSSDd DSDDS fsad
              fasd fasDDS fsad fasd fasfdasfsad fsadfaJ.S Bacg DSSDd DSDDS fsad
            </p>
          </div>
        </div>
      </div>
      <div className={s.current__btn__wrapper}>
        <Link to={"/"} className={s.current__btn}>
          Back to main
        </Link>
      </div>
    </div>
  );
};
