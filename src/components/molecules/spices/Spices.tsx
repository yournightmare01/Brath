import spices from '../../../assets/images/spices.jpg';

const Spices = () => {
  return (
    <section className='spices'>
      <img className='spices__image' src={spices} alt='spices-img' />
      <div className='spices__container fluid'>
        <div className='spices__container__content'>
          <div className='spices__container__text'>
            <div className='spices__container__heading-text'>
              <h3 className='spices__container__heading-text--title'>
                Custome spices for your meat
              </h3>
              <h5 className='spices__container__heading-text--sub-title'>
                Turnbeutel nostrud exercitation ullamco Sprechen Sie deutsch
              </h5>
            </div>
            <p className='spices__container__description'>
              <span>
                Odio principes iracundia Müller Rice pri. Ut vel solum mandamus,
                Kartoffelkopf natum adversarium ei ius, diam Schmetterling
                honestatis eum.
              </span>

              <span>
                Wiener Schnitzel amet, consectetur Handtasche elit, sed do
                eiusmod tempor Stuttgart ut labore et magna 99 Luftballons Ut
                enim ad minim veniam, Turnbeutel nostrud exercitation ullamco
                laboris nisi Sprechen Sie deutsch aliquip ex ea commodo
                consequat.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Spices;
