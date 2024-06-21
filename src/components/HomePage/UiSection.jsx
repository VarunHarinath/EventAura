import React from "react";

const UiSection = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 ">
          <div className="max-w-xl md:mx-auto">
            <h3 className="text-gray-100 text-3xl font-semibold sm:text-4xl bg-indigo-600 bg-opacity-10 p-5 rounded-2xl">
              <span className="opacity-95">Unveil Our New&nbsp;</span>
              <span className="text-indigo-600 font-extrabold">
                Aura UI&nbsp;
              </span>
              <span className="opacity-95">Experience!</span>
            </h3>
            <p className="mt-3 text-gray-300">
              our Aura UI delivers an unparalleled experience with its sleek
              design and intuitive functionality
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiSection;
