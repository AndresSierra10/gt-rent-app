import React from 'react';

export default function BookingSection() {
  return (
    <section className="bg-stone-500 py-16 px-2">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl text-center font-semibold mb-16">Book your experience</h2>

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
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-sky-400 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="montjuic">Montjuic desde 90€</option>
                <option value="barceloneta">Barceloneta desde 120€</option>
                <option value="sitges">Sitges desde 90€</option>
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
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-sky-400 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="lamborghini-urus">Lamborghini URUS</option>
                <option value="ferrari-488">Ferrari 488 Spider</option>
                <option value="porshe-911">Porshe 911 carrera S</option>
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
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-sky-400 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="with-safety-car">Safety car</option>
                <option value="without-safety-car">Without safety car +100€</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
            <div className='justify-center px-12'>
              {/* Botón de Booking */}
              <button
                type="submit"
                className="btn-primary"
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
