

const Cards = () => {
    return (
        <div class="card text-center glassBox">
        <div class="glassBox__imgBox">
          <img src="./img/wEstate.jpg" alt=""/>
          <h3 class="card-title text-warning glassBox__title">Rare Cask 43°</h3>
        </div>
        <a
          href="#"
          target="_blank"
          className="btn btn-warning"
          rel="noreferrer"
        >
          Agregar al carrito
        </a>
        <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
      </div>
      
    );
}

export default Cards;
