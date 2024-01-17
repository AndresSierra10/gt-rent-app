import React from 'react';

export default function BookingSection() {
  return (
    <section className="bg-stone-600 py-16 px-2">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl text-center text-white font-semibold mb-16">Book your experience</h2>

        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Lista desplegable 1 */}
            <div>
              <label htmlFor="experiences" className="block text-white font-bold">
                Experiences
              </label>
              <select
                id="experiences"
                name="experiences"
                className="w-full border bg-transparent text-white px-2.5 py-1 rounded-[0.875rem] border-solid border-white focus:border-blue-500"
              >
                <option className='text-black' value="montjuic">Barcelona Marina desde 79€</option>
                <option className='text-black' value="barceloneta">Montjuic desde 149€</option>
                <option className='text-black' value="sitges">Tibidabo desde 299€</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>

            {/* Lista desplegable 2 */}
            <div>
              <label htmlFor="car" className="block text-white font-bold">
                Cars
              </label>
              <select
                id="car"
                name="car"
                className="w-full border bg-transparent text-white px-2.5 py-1 rounded-[0.875rem] border-solid border-white focus:border-blue-500"
              >
                <option className='text-black' value="ferrari-488">Ferrari 488</option>
                <option className='text-black' value="porshe-911">Porshe 911 carrera S</option>
                <option className='text-black' value="lamborghini-urus">Lamborghini URUS</option>
                <option className='text-black' value="ford-mustang">Ford mustang GT</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>

            {/* Lista desplegable 3 */}
            <div>
              <label htmlFor="safety-car" className="block text-white font-bold">
                Safety Car
              </label>
              <select
                id="safety-car"
                name="safety-car"
                className="w-full border bg-transparent text-white px-2.5 py-1 rounded-[0.875rem] border-solid border-white focus:border-blue-500"
              >
                <option className='text-black' value="with-safety-car">Safety car</option>
                <option className='text-black' value="without-safety-car">Without safety car +100€</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
            <div className='justify-center px-26'>
              {/* Botón de Booking */}
              <button
                type="submit"
                className="btn-solid-secondary"
              >
                Book now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
