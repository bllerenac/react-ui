import React from 'react';
import store from "../../store"
import "../../stylesheets/sections.css"

const Sections = () => {
  const  date_1 = store.news.filter( a => a.date =="2021/02/18");
  const  date_2 = store.news.filter( b => b.date ==="2021/02/17");
    return (
      <main className={"main-container"}>
        <div>
          <h1 className={"main__title"}>18 de febrero de 2021</h1>
          <section className={"main__section"}>
            {
                date_1.map(card =>{
                  return(
                    <article key={`card-${card.id}`} className={`card card-${card.id}`}>
                      <div className={"card__img_conatiner"}>
                        <img src={card.img} />
                      </div>
                      <div className={"card_content"}>
                        <h3>{card.tittle}</h3>
                        <h1>{card.description}</h1>
                      </div>
                    </article>
                  );
                })
            }
          </section>
        </div>
        <div>
          <h1 className={"main__title"}>17 de febrero de 2021</h1>
          <section className={"main__section"}>
            {
              date_2.map(card =>{
                return(
                  <article key={`card-${card.id}`} className={`card card-${card.id}`}>
                    <div className={"card__img_conatiner"}>
                      <img src={card.img} />
                    </div>
                    <div className={"card_content"}>
                      <h3>{card.tittle}</h3>
                      <h1>{card.description}</h1>
                    </div>
                  </article>
                );
              })
            }
          </section>
        </div>
      </main>
    )
}
export default Sections;