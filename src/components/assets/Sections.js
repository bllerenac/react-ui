import React from 'react';
import store from "../../store_test"
import Cards from "module";

const Sections = () => {
  const  date_1 = store.news.filter( a => a.date =="2021/02/18");
  const  date_2 = store.news.filter( b => b.date ==="2021/02/17");
    return (
      <section>
        <section>
          {
              date_1.map(card =>{
                return(
                  <article key={`card-${card.id}`} className={`card-${card.id}`}>
                    <img src={card.img} />
                    <h3>{card.tittle}</h3>
                    <h1>{card.description}</h1>
                  </article>
                );
              })
          }
        </section>
        <section>
          {
            date_2.map(card =>{
              return(
                <article key={`card-${card.id}`} className={`card-${card.id}`}>
                  <img src={card.img} />
                  <h3>{card.tittle}</h3>
                  <h1>{card.description}</h1>
                </article>
              );
            })
          }
        </section>
      </section>
    )
}
export default Sections;