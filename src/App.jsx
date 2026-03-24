import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// type Service = {
//   title: string;
//   description: string;
//   image: string;
// };

// type ServiciosSectionProps = {
//   artServices: Service[];
//   dermatoxServices: string[];
//   esteticaServices: string[];
// };

function ServiciosSection({ artServices, dermatoxServices, esteticaServices }) {
  const [activeScene, setActiveScene] = useState(0);

  const firstArt = artServices[0];
  const secondArt = artServices[1];
  const thirdArt = artServices[2];
  const fourthArt = artServices[3];

  const scenes = useMemo(
    () => [
      {
        id: 0,
        eyebrow: "Servicios",
        title: "Arte, belleza\ny tratamientos.",
        description:
          "Una propuesta integral pensada para combinar expresión, detalle, estética y cuidado profesional en un mismo espacio.",
      },
      {
        id: 1,
        eyebrow: "Belleza y Salud",
        title: "Servicios de belleza\nprofesional.",
        description:
          "Tratamientos, estética y dermatocosmetología en una experiencia visual, delicada y contemporánea.",
      },
    ],
    [],
  );

  const currentScene = scenes[activeScene];

  return (
    <section id="servicios" className="relative w-full min-h-[100svh] py-8">
      <div className="flex min-h-[100svh] flex-col overflow-visible xl:h-[100svh] xl:overflow-hidden">
        <div className="mb-8 flex shrink-0 flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between lg:px-10 xl:px-14">
          <div>
            <p
              className="text-sm uppercase tracking-[0.22em] text-[#8d7f71]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {currentScene.eyebrow}
            </p>

            <AnimatePresence mode="wait">
              <motion.h2
                key={currentScene.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 whitespace-pre-line text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {currentScene.title}
              </motion.h2>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentScene.description}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-xl text-base leading-7 text-[#5e5348]"
            >
              {currentScene.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative flex-1 overflow-visible px-6 pb-8 lg:px-10 xl:overflow-hidden xl:px-14">
          <AnimatePresence mode="wait">
            {activeScene === 0 ? (


              <motion.div
                key="scene-art"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ransition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-auto xl:h-full"
              >

                <div className="grid h-full gap-4 xl:grid-cols-[0.88fr_1.55fr_1.05fr] xl:grid-rows-[0.72fr_1fr]">

                  <motion.article
                    initial={{ opacity: 0, x: -24, y: 18 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -30, y: 8 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="rounded-[1.9rem] bg-[#f0d7d3] p-6 shadow-[0_14px_36px_rgba(32,26,21,0.05)]"
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.18em] text-[#7a5f58]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Propuesta integral
                    </p>

                    <h3
                      className="mt-3 text-3xl font-semibold leading-[0.98] tracking-tight text-[#201a15]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Arte,
                      <br />
                      belleza y
                      <br />
                      tratamientos.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#5e5348]">
                      Una experiencia visual pensada para mezclar expresión, cuidado y estética
                      profesional.
                    </p>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: 36, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-visible rounded-[2.2rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_22px_60px_rgba(32,26,21,0.08)] xl:row-span-2 xl:h-[calc(100%-85px)] self-start"
                  >
                    <div className="relative h-full overflow-hidden rounded-[2.2rem]">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      >
                        <source src="/tattoovideo.mov" type="video/mp4" />
                      </video>

                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(25,20,16,0.82)] via-[rgba(25,20,16,0.24)] to-transparent p-6 md:p-7">
                        <p
                          className="text-[11px] uppercase tracking-[0.2em] text-[#f7eadb]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Servicios de Arte
                        </p>

                        <h3
                          className="mt-2 text-3xl font-semibold leading-[0.95] tracking-tight text-white md:text-5xl"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {firstArt?.title || "Tatuajes"}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-6 text-[#f3e8dc] md:text-base">
                          {firstArt?.description ||
                            "Diseño, expresión y detalle en una propuesta artística cuidada de principio a fin."}
                        </p>
                      </div>
                    </div>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: 26, y: 12 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 28, y: -6 }}
                    transition={{ duration: 0.68, delay: 0.12 }}
                    className="overflow-hidden rounded-[1.8rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_14px_34px_rgba(32,26,21,0.05)] xl:row-span-2"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[90%] min-h-[460px] overflow-hidden xl:min-h-0">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/joyeria1.mov" type="video/mp4" />
                        </video>
                      </div>

                      <div className="flex flex-1 flex-col justify-end p-5">
                        <p
                          className="text-[11px] uppercase tracking-[0.18em] text-[#8d7f71]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Servicio destacado
                        </p>

                        <h4
                          className="mt-2 text-[2.35rem] font-semibold leading-[0.92] tracking-tight text-[#201a15]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {thirdArt?.title || "Joyería dental"}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-[#5e5348]">
                          {thirdArt?.description ||
                            "Detalles que aportan identidad y presencia."}
                        </p>
                      </div>
                    </div>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: -18, y: 28 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -18, y: 20 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-[1.8rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_14px_34px_rgba(32,26,21,0.05)]"
                  >
                    <div className="flex h-full flex-col">
                      <img
                        src={secondArt?.image || "/perforaciones.png"}
                        alt={secondArt?.title || "Servicio secundario"}
                        className="h-[64%] w-full object-cover"
                      />

                      <div className="flex-1 p-5">
                        <p
                          className="text-[11px] uppercase tracking-[0.18em] text-[#8d7f71]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Arte corporal
                        </p>

                        <h4 className="mt-2 text-2xl font-semibold leading-[0.96] tracking-tight text-[#201a15]">
                          {secondArt?.title || "Perforaciones"}
                        </h4>
                      </div>
                    </div>
                  </motion.article>
              </div>


              </motion.div>


            ) : (
              <motion.div
                key="scene-beauty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="relative h-full"
              >
                <div className="grid gap-4 xl:h-full xl:grid-cols-[0.82fr_1.32fr_1.02fr] xl:grid-rows-[0.78fr_1fr]">
                  {/* IZQUIERDA */}
                  <motion.article
                    initial={{ opacity: 0, x: -26, y: 18 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -28, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="rounded-[1.8rem] bg-[#eadfce] p-6 shadow-[0_14px_36px_rgba(32,26,21,0.05)] xl:col-start-1 xl:row-start-1 xl:row-span-2"
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.18em] text-[#7b6d5d]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Belleza y salud
                        </p>

                        <h3
                          className="mt-3 text-3xl font-semibold leading-[0.98] tracking-tight text-[#201a15]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Servicios
                          <br />
                          de belleza
                          <br />y salud.
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-[#5e5348]">
                          Tratamientos orientados al cuidado facial, la
                          armonización y la mejora estética integral, con un
                          enfoque profesional y personalizado.
                        </p>
                      </div>

                      <div className="mt-8 space-y-3">
                        {[
                          "Mesoterapia: Lipopapada y Aumento de Glúteos.",
                          "Cosmeto: Peeling, Limpieza Facial, Dermaplaning y Dermapen.",
                          "Estética: Laminado y Perfilado de Cejas, Hydralips y BBlips.",
                        ].map((item, index) => (
                          <article
                            key={item}
                            className="rounded-[1.15rem] border border-[#dbcbbc] bg-[#f4eadf] px-4 py-4"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c97946] text-xs font-semibold text-white">
                                {index + 1}
                              </span>
                              <p className="text-sm leading-6 text-[#5e5348]">
                                {item}
                              </p>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </motion.article>

                  {/* CENTRO — HERO PRINCIPAL */}
                  <motion.article
                    initial={{ opacity: 0, x: 34, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -28, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden rounded-[2.2rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_22px_60px_rgba(32,26,21,0.08)] xl:col-start-2 xl:h-[calc(100%-85px)]  xl:row-span-2"
                  >
                    <div className="grid h-full xl:grid-cols-[0.92fr_1.08fr]">
                      <div className="overflow-hidden">
                        <img
                          src="/dermatocosmetica.png"
                          alt="Dermatocosmetología"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-between p-6 md:p-7">
                        <div>
                          <p
                            className="text-[11px] uppercase tracking-[0.18em] text-[#8d7f71]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Dermatocosmetología
                          </p>

                          <h3
                            className="mt-3 text-3xl font-semibold leading-[0.95] tracking-tight text-[#201a15] md:text-5xl"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Cuidado facial
                            <br />
                            avanzado.
                          </h3>
                        </div>

                        <div className="mt-6 space-y-3">
                          {[
                            "Acné",
                            "Manchas",
                            "Rosácea",
                            "Rejuvenecimiento",
                          ].map((item, index) => (
                            <div key={item} className="flex gap-3">
                              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6ad5c] text-xs font-semibold text-[#201a15]">
                                {index + 1}
                              </span>
                              <p className="text-sm leading-6 text-[#5e5348] md:text-[0.98rem]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>

                  {/* DERECHA */}
                  <motion.article
  initial={{ opacity: 0, x: 26, y: 18 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  exit={{ opacity: 0, x: 26, y: 16 }}
  transition={{ duration: 0.68, delay: 0.12 }}
  className="rounded-[1.8rem] bg-[#eadfce] p-6 shadow-[0_14px_36px_rgba(32,26,21,0.05)] xl:col-start-3 xl:row-start-1 xl:row-span-2"
>
  <div className="flex h-full flex-col justify-between">
    <div>
      <p
        className="text-[11px] uppercase tracking-[0.18em] text-[#7b6d5d]"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Estética avanzada
      </p>

      <h3
        className="mt-2 text-3xl font-semibold leading-[0.98] tracking-tight text-[#201a15]"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Armonización
        <br />
        facial.
      </h3>

      <p className="mt-4 text-sm leading-6 text-[#5e5348]">
        Un conjunto de técnicas orientadas a equilibrar, suavizar y realzar los
        rasgos del rostro con resultados armónicos, naturales y personalizados.
      </p>
    </div>

    <div className="mt-8 space-y-2">
      {[
        "Rinomodelación.",
        "Aumento de labios.",
        "Corrección de asimetrías.",
        "Mejora de la estructura y de las arrugas.",
      ].map((item, index) => (
        <article
          key={item}
          className="rounded-[1.15rem] border border-[#dbcbbc] bg-[#f4eadf] px-4 py-4"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c97946] text-xs font-semibold text-white">
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-[#5e5348]">{item}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
                  </motion.article>

               
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BOTON */}
          <div className="mt-6 flex justify-center xl:pointer-events-none xl:absolute xl:inset-x-0 xl:bottom-4 xl:z-30 xl:mt-0">
            <div className="flex w-full justify-center px-4 sm:px-6 lg:px-10 xl:max-w-[1720px] xl:px-14">
              <div className="flex items-center gap-2 rounded-full border border-[#eadfce]/80 bg-white/55 px-2 py-2 backdrop-blur-md xl:pointer-events-auto sm:gap-3 sm:px-3 sm:py-3">
                {[0, 1].map((scene) => {
                  const isActive = activeScene === scene;

                  return (
                    <button
                      key={scene}
                      type="button"
                      onClick={() => setActiveScene(scene)}
                      aria-label={`Ir a escena ${scene + 1}`}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-[13px] font-medium transition-all duration-300 sm:h-11 sm:w-11 xl:h-14 xl:w-14 xl:text-base ${
                        isActive
                          ? "border-[#d7a18b] bg-[#d7a18b] text-white"
                          : "border-[#e7dbcf] bg-[#fffaf6]/80 text-[#8e7868] hover:bg-white"
                      }`}
                    >
                      {scene + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ShakeLandingPage() {
  const whatsappNumber = "5491176166532";
  const whatsappMessage = encodeURIComponent(
    "Hola Casa Shake, vi la página y quiero consultar por sus servicios.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const mapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.3773330194996!2d-58.79415834420979!3d-34.34892125844504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61ce480d0883%3A0x6d9e275d3cf88b34!2sCasa%20Shake!5e0!3m2!1ses!2sar!4v1774199930505!5m2!1ses!2sar";

  const whatsappBtn =
    "inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,211,102,0.28)] transition duration-300 hover:scale-[1.02] hover:bg-[#1ebe5a]";

  const secondaryBtnDark =
    "inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/14";

  const micropigmentacionCategories = [
    {
      title: "Labios",
      subtitle: "Efecto full lips, Aqualips, Solo Contorno, Neutralización",
      image: "/Micropigmentaciondelabios.jpg",
    },
    {
      title: "Cejas",
      subtitle: "Efecto Microblanding, Powder Brows",
      image: "/micropigmentaciondecejas.jpeg",
    },
    {
      title: "Capilar",
      subtitle: "Diseño personalizado para cada Paciente",
      image: "/capilar.png",
    },
    {
      title: "Pecas",
      subtitle: "Efecto Natural",
      image: "/PECAS.png",
    },
    {
      title: "Areolas",
      subtitle: "Reconstrucción personalizada",
      image: "/areolas.png",
    },
  ];

  const artServices = [
    {
      title: "Tatuajes",
      description: "Diseños personalizados y estilos adaptados a cada idea.",
      image: "/tatuajes.avif",
    },
    {
      title: "Perforaciones",
      description: "Trabajo preciso, cuidado y asesoramiento estético.",
      image: "/perforaciones.png",
    },
    {
      title: "Joyería dental",
      description: "Detalles que aportan identidad y presencia.",
      image: "/joyeriadental.png",
    },
    {
      title: "Remoción de microtatuajes",
      description: "Servicios orientados a corrección y renovación estética.",
      image: "/remocion.png",
    },
  ];

  const dermatoxServices = [
    "Tratamientos para arrugas, acné, manchas, rejuvenecimiento y glow up",
    "Armonización facial",
    "Aumento / perfilado de glúteos",
    "Lipo papada",
    "Aumento de labios",
    "Otros complementarios",
  ];

  const esteticaServices = [
    "Laminado y perfilado de cejas",
    "Hidralips y BBlips",
    "Limpieza facial y peeling",
    "Dermaplaning y Dermapen",
  ];

  const testimonialImages = [
    { image: "/testimonio1.png", alt: "Testimonio 1 Casa Shake" },
    { image: "/testimonio2.png", alt: "Testimonio 2 Casa Shake" },
    { image: "/testimonio3.png", alt: "Testimonio 3 Casa Shake" },
    { image: "/testimonio4.png", alt: "Testimonio 4 Casa Shake" },
    { image: "/testimonio5.png", alt: "Testimonio 5 Casa Shake" },
    { image: "/testimonio6.png", alt: "Testimonio 6 Casa Shake" },
    { image: "/testimonio7.png", alt: "Testimonio 7 Casa Shake" },
  ];

  const [figureStyle, setFigureStyle] = useState({
    transform: "translate3d(0px, 0px, 0px)",
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [showFloatingWhatsapp, setShowFloatingWhatsapp] = useState(false);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonialImages.length - 1 : prev - 1,
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonialImages.length - 1 ? 0 : prev + 1,
    );
  };

  const getVisibleTestimonials = () => {
    const prev =
      activeTestimonial === 0
        ? testimonialImages.length - 1
        : activeTestimonial - 1;

    const next =
      activeTestimonial === testimonialImages.length - 1
        ? 0
        : activeTestimonial + 1;

    return {
      prev: testimonialImages[prev],
      current: testimonialImages[activeTestimonial],
      next: testimonialImages[next],
    };
  };

  const visibleTestimonials = getVisibleTestimonials();

  const handleFigureMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 18;
    const moveY = (y / rect.height - 0.5) * 18;

    setFigureStyle({
      transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
    });
  };

  const resetFigureMove = () => {
    setFigureStyle({
      transform: "translate3d(0px, 0px, 0px)",
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const softReveal = {
    hidden: { opacity: 0, scale: 0.96, y: 18 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowFloatLeft = {
    animate: {
      x: [0, 12, 0],
      y: [0, -10, 0],
      scale: [1, 1.04, 1],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowFloatRight = {
    animate: {
      x: [0, -14, 0],
      y: [0, 12, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
  const handleScroll = () => {
    const firstSectionHeight = window.innerHeight * 0.85;
    setShowFloatingWhatsapp(window.scrollY > firstSectionHeight);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8f4ee_0%,#f4ede4_38%,#f7f2eb_68%,#f3ece3_100%)] text-[#201a15]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#f1dfcb] blur-3xl" />
        <div className="absolute right-[-8%] top-[22%] h-[380px] w-[380px] rounded-full bg-[#efe4d7] blur-3xl" />
        <div className="absolute left-[18%] top-[48%] h-[320px] w-[320px] rounded-full bg-[#f7ead8] blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-[420px] w-[420px] rounded-full bg-[#eadbc9] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#7a6752_0.7px,transparent_0.7px)] [background-size:22px_22px]" />

      <div className="relative z-10">
        <main>
          <section className="relative w-full">
            <div className="relative isolate min-h-screen overflow-hidden bg-[#0f0d0b]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 z-0 h-full w-full object-cover"
              >
                <source src="/fondoweb2.mov" type="video/mp4" />
              </video>

              <div className="absolute inset-0 z-[1] bg-black/42" />
              <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(214,173,92,0.08),transparent_42%)]" />
              <div className="absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(8,8,8,0.16)_0%,rgba(8,8,8,0.10)_18%,rgba(8,8,8,0.22)_64%,rgba(8,8,8,0.48)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.05] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[160px] bg-[linear-gradient(180deg,rgba(15,13,11,0)_0%,rgba(15,13,11,0.05)_28%,rgba(15,13,11,0.18)_55%,rgba(15,13,11,0.38)_78%,rgba(15,13,11,0.72)_100%)]" />

              <div className="relative z-20 flex min-h-screen flex-col">
                <div className="mx-auto relative flex w-full max-w-[1380px] items-center px-6 py-6 lg:px-8">
                  <img
                    src="/logo-cs-blanco.png"
                    alt="Casa Shake"
                    className="h-9 w-auto md:h-10"
                  />

                  <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[15px] text-white/72 md:flex">
                    <a
                      href="#producto-estrella"
                      className="transition hover:text-white"
                    >
                      Producto estrella
                    </a>
                    <a
                      href="#servicios"
                      className="transition hover:text-white"
                    >
                      Servicios
                    </a>
                    <a href="#contacto" className="transition hover:text-white">
                      Contacto
                    </a>
                  </nav>
                </div>

                <div className="mx-auto flex w-full max-w-[1380px] flex-1 items-center px-6 pb-16 pt-8 lg:px-8">
                  <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)]">
                    <div className="max-w-[760px]">
                      <p
                        className="mb-6 text-[11px] uppercase tracking-[0.32em] text-white/62 md:text-xs"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Belleza, estética y arte
                      </p>

                      <h1
                        className="max-w-[760px] text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.025em] text-[#d6ad5c]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Te ayudamos a potenciar
                        <br />
                        <span className="text-white">y cuidar tu belleza.</span>
                      </h1>

                      <p className="mt-8 max-w-[700px] text-[1.05rem] leading-8¿7 text-white/78 md:text-[1rem]">
                        Realzamos tu belleza y seguridad personal a través de
                        servicios estéticos avanzados, tatuajes y joyería
                        profesional. Te ofrecemos una experiencia completa donde
                        transformás tu imagen y potenciás tu estilo en un solo
                        lugar.
                      </p>
                    </div>

                    <div className="flex w-full flex-col items-start gap-4 lg:items-end">
                      <div className="flex w-full max-w-[420px] flex-col gap-4 sm:flex-row lg:justify-end">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className={whatsappBtn}
                        >
                          <span className="inline-block h-[1px] w-6 bg-white/75" />
                          Consultar por WhatsApp
                        </a>

                        <a
                          href="#producto-estrella"
                          className={secondaryBtnDark}
                        >
                          <span className="inline-block h-[1px] w-6 bg-white/70" />
                          Explorar servicios
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto hidden w-full max-w-[1380px] px-6 pb-8 lg:block lg:px-8">
                  <div className="grid grid-cols-3 gap-8 border-t border-white/8 pt-5 text-white/74">
                    <div>
                      <p
                        className="text-[11px] uppercase tracking-[0.22em] text-white/38"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Especialidad
                      </p>
                      <p className="mt-2 text-[15px]">
                        Micropigmentación en todas sus variantes
                      </p>
                    </div>

                    <div>
                      <p
                        className="text-[11px] uppercase tracking-[0.22em] text-white/38"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Enfoque
                      </p>
                      <p className="mt-2 text-[15px]">
                        Naturalidad, armonía y detalle
                      </p>
                    </div>

                    <div className="text-right">
                      <p
                        className="text-[11px] uppercase tracking-[0.22em] text-white/38"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Contacto directo
                      </p>
                      <p className="mt-2 text-[15px]">
                        Asesoramiento por WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MICROPIGMENTACION */}
          <section
            id="producto-estrella"
            className="relative overflow-hidden py-24"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[#f6f2ec]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#b79d84_0.8px,transparent_0.8px)] [background-size:20px_20px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(214,173,92,0.14),transparent_28%),radial-gradient(circle_at_80%_75%,rgba(201,121,70,0.12),transparent_26%)]" />
              <div className="absolute left-[8%] top-[12%] h-40 w-40 rounded-full bg-[#eadbcc] blur-3xl opacity-55" />
              <div className="absolute right-[8%] bottom-[10%] h-44 w-44 rounded-full bg-[#e7d6c8] blur-3xl opacity-45" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p
                    className="text-sm uppercase tracking-[0.22em] text-[#8d7f71]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Servicio estrella de Casa Shake
                  </p>
                  <h2
                    className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Micropigmentación - PMU.
                    <br />
                    La protagonista de Casa Shake.
                  </h2>
                </div>

                <p className="max-w-xl text-base leading-7 text-[#5e5348]">
                  A continuación te mostramos las diferentes categorías.
                  Consúltanos por las diferentes técnicas y efectos que
                  brindamos para cada una.
                </p>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
                {micropigmentacionCategories.map((item, index) => (
                  <div
                    key={item.title}
                    className="group overflow-hidden rounded-[1.8rem] border border-[#e7dfd3] bg-[#fffdf9]/92 shadow-[0_20px_50px_rgba(32,26,21,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(32,26,21,0.08)]"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent" />

                    </div>

                    <div className="p-5">
                      <p
                        className="text-xs uppercase tracking-[0.18em] text-[#8d7f71]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        PMU
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-[#201a15]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#5e5348]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MISION & VISION */}
          <section className="relative overflow-hidden bg-[#f6f2ec] py-24 text-[#201a15]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full bg-[#eadbcc] blur-3xl opacity-70" />
              <div className="absolute right-[10%] top-[16%] h-52 w-52 rounded-full bg-[#e9d8ca] blur-3xl opacity-60" />
              <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#8e7d6d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col">
                  <div className="mb-5 inline-flex self-start rounded-full border border-[#cfc2b5] bg-[#fffaf3] px-5 py-2 text-sm font-medium text-[#7d6d60]">
                    Misión
                  </div>

                  <div className="overflow-hidden rounded-[1.6rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_18px_40px_rgba(32,26,21,0.05)]">
                    <img
                      src="/mision.png"
                      alt="Misión Casa Shake"
                      className="h-[240px] w-full object-cover"
                    />
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-[#ece3d7] bg-white/70 p-5 shadow-[0_10px_24px_rgba(32,26,21,0.03)]">
                    <p className="text-sm leading-7 text-[#5e5348]">
                      Ayudar a personas que no se sienten seguras con su imagen
                      a recuperar su autoestima y volver a sentirse cómodas con
                      su reflejo.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5e5348]">
                      A través de servicios estéticos y artísticos
                      personalizados, transformamos inseguridades en confianza,
                      logrando resultados visibles que impactan en cómo se ven y
                      cómo se sienten.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:px-2">
                  <p
                    className="text-sm uppercase tracking-[0.24em] text-[#8d7f71]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Quiénes somos
                  </p>

                  <h2
                    className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-[#201a15] md:text-5xl"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Salud, Belleza
                    <br />y Arte.
                  </h2>

                  <div className="mt-6 h-px w-16 bg-[#d6c4b2]" />

                  <p className="mt-6 text-[1.02rem] leading-8 text-[#5e5348]">
                    Casa Shake es un centro de estética y arte que fusiona
                    belleza, estilo y expresión personal en un solo lugar.
                  </p>

                  <p className="mt-5 text-[1.02rem] leading-8 text-[#5e5348]">
                    Somos un espacio donde transformamos tu imagen y potenciamos
                    tu confianza a través de servicios profesionales, innovación
                    y una experiencia única.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="mb-5 inline-flex self-start rounded-full border border-[#cfc2b5] bg-[#fffaf3] px-5 py-2 text-sm font-medium text-[#7d6d60]">
                    Visión
                  </div>

                  <div className="overflow-hidden rounded-[1.6rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_18px_40px_rgba(32,26,21,0.05)]">
                    <img
                      src="/beauty-detail.jpg"
                      alt="Visión Casa Shake"
                      className="h-[240px] w-full object-cover"
                    />
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-[#ece3d7] bg-white/70 p-5 shadow-[0_10px_24px_rgba(32,26,21,0.03)]">
                    <p className="text-sm leading-7 text-[#5e5348]">
                      Convertirnos en un referente en belleza y arte, siendo el
                      lugar al que las personas eligen cuando quieren verse y
                      sentirse mejor.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5e5348]">
                      Buscamos crear una comunidad donde la transformación no
                      sea solo estética, sino también emocional, elevando la
                      confianza y el amor propio de cada cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiciosSection
            artServices={artServices}
            dermatoxServices={dermatoxServices}
            esteticaServices={esteticaServices}
          />

          {/* TESTIMONIOS */}
          <section className="relative overflow-hidden bg-[#f6f2ec] py-24 text-[#201a15]">
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                variants={glowFloatLeft}
                animate="animate"
                className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-[#eadbcc] blur-3xl opacity-45"
              />
              <motion.div
                variants={glowFloatRight}
                animate="animate"
                className="absolute right-[10%] bottom-[18%] h-36 w-36 rounded-full bg-[#e7d6c8] blur-3xl opacity-40"
              />
              <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#8e7d6d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative mx-auto max-w-7xl px-6 lg:px-8"
            >
              <motion.div variants={fadeUp} className="text-center">
                <p
                  className="text-xs uppercase tracking-[0.24em] text-[#8d7f71]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Testimonios
                </p>

                <h2
                  className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#201a15] md:text-4xl"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Lo que comparten
                  <br />
                  después de Casa Shake.
                </h2>
              </motion.div>

              <motion.div variants={softReveal} className="relative mt-16">
                <motion.button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Testimonio anterior"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd6cb] bg-white/90 text-[#2b251d] shadow-[0_10px_24px_rgba(32,26,21,0.08)] backdrop-blur-sm transition duration-300 hover:bg-white lg:flex"
                >
                  ←
                </motion.button>

                <motion.button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Siguiente testimonio"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ddd6cb] bg-white/90 text-[#2b251d] shadow-[0_10px_24px_rgba(32,26,21,0.08)] backdrop-blur-sm transition duration-300 hover:bg-white lg:flex"
                >
                  →
                </motion.button>

                <div className="mx-auto max-w-[320px] lg:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -18, scale: 0.97 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-[2rem] border border-[#e7dfd3] bg-white/90 p-3 shadow-[0_18px_40px_rgba(32,26,21,0.06)] backdrop-blur-sm"
                    >
                      <div className="overflow-hidden rounded-[1.4rem] bg-[#f8f4ee]">
                        <motion.img
                          src={visibleTestimonials.current.image}
                          alt={visibleTestimonials.current.alt}
                          className="w-full object-contain"
                          initial={{ scale: 1.04 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 1.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="hidden items-center justify-center gap-6 lg:flex">
                  <motion.div
                    key={`prev-${visibleTestimonials.prev.image}`}
                    initial={{ opacity: 0, x: -30, scale: 0.88 }}
                    animate={{ opacity: 0.5, x: 0, scale: 0.92 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[230px] blur-[0.2px]"
                  >
                    <div className="rounded-[1.7rem] border border-[#e7dfd3] bg-white/70 p-3 shadow-[0_10px_24px_rgba(32,26,21,0.04)]">
                      <div className="overflow-hidden rounded-[1.2rem] bg-[#f8f4ee]">
                        <img
                          src={visibleTestimonials.prev.image}
                          alt={visibleTestimonials.prev.alt}
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>

                  <div className="relative w-[340px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, y: 34, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -24, scale: 0.97 }}
                        transition={{
                          duration: 0.78,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-[2rem] border border-[#e7dfd3] bg-white/95 p-3 shadow-[0_22px_50px_rgba(32,26,21,0.08)] backdrop-blur-sm"
                      >
                        <div className="overflow-hidden rounded-[1.45rem] bg-[#f8f4ee]">
                          <motion.img
                            src={visibleTestimonials.current.image}
                            alt={visibleTestimonials.current.alt}
                            className="w-full object-contain"
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 1.15,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <motion.div
                      animate={{
                        opacity: [0.16, 0.24, 0.16],
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 4.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-0 -z-10 rounded-[2.3rem] bg-[#eadbcc] blur-2xl"
                    />
                  </div>

                  <motion.div
                    key={`next-${visibleTestimonials.next.image}`}
                    initial={{ opacity: 0, x: 30, scale: 0.88 }}
                    animate={{ opacity: 0.5, x: 0, scale: 0.92 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[230px] blur-[0.2px]"
                  >
                    <div className="rounded-[1.7rem] border border-[#e7dfd3] bg-white/70 p-3 shadow-[0_10px_24px_rgba(32,26,21,0.04)]">
                      <div className="overflow-hidden rounded-[1.2rem] bg-[#f8f4ee]">
                        <img
                          src={visibleTestimonials.next.image}
                          alt={visibleTestimonials.next.alt}
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
                  <motion.button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Testimonio anterior"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd6cb] bg-white text-[#2b251d] shadow-[0_8px_20px_rgba(32,26,21,0.06)] transition duration-300 hover:bg-[#faf7f2]"
                  >
                    ←
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Siguiente testimonio"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd6cb] bg-white text-[#2b251d] shadow-[0_8px_20px_rgba(32,26,21,0.06)] transition duration-300 hover:bg-[#faf7f2]"
                  >
                    →
                  </motion.button>
                </div>

                <div className="mt-8 flex justify-center gap-2">
                  {testimonialImages.map((_, index) => (
                    <motion.button
                      key={index}
                      type="button"
                      aria-label={`Ir al testimonio ${index + 1}`}
                      onClick={() => setActiveTestimonial(index)}
                      whileTap={{ scale: 0.9 }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? "w-6 bg-[#201a15]"
                          : "w-2 bg-[#cfc2b5]"
                      }`}
                      layout
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* PROFESIONAL */}
          <section className="relative w-full py-16 md:py-20">
            <div className="relative min-h-[760px] overflow-hidden bg-[#d8c8b7] md:min-h-[720px]">
              <div className="absolute inset-0">
                <img
                  src="/casashake.png"
                  alt="Cabina Casa Shake"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#140f0b]/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />
              </div>

              <div
                className="relative z-10 min-h-[760px] px-4 py-8 md:min-h-[720px] md:px-10 md:py-10 lg:px-14"
                onMouseMove={handleFigureMove}
                onMouseLeave={resetFigureMove}
              >
                <div className="mx-auto max-w-[1200px] text-center">
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/82 md:text-xs md:tracking-[0.35em]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Casa Shake Studio
                  </p>

                  <p
                    className="mt-10 text-[clamp(3.8rem,16vw,10rem)] font-semibold uppercase leading-[0.88] tracking-tight text-white/20 md:mt-16 md:text-[clamp(5rem,12vw,10rem)] md:text-white/25"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    EXPERIENCIA
                  </p>
                </div>

                <img
                  src="/esposa.png"
                  alt="Profesional Casa Shake"
                  style={figureStyle}
                  className="absolute bottom-[190px] left-1/2 z-20 h-[630px] w-auto -translate-x-1/2 object-contain transition-transform duration-200 ease-out drop-shadow-[0_24px_40px_rgba(0,0,0,0.22)] md:bottom-0 md:h-[620px] lg:h-[850px]"
                />

                <div className="absolute bottom-4 left-1/2 z-30 w-[calc(100%-1.5rem)] max-w-[1100px] -translate-x-1/2 rounded-[1.5rem] border border-white/15 bg-[#fff8ef]/12 p-4 backdrop-blur-md md:bottom-8 md:w-[calc(100%-3rem)] md:rounded-[1.9rem] md:p-6">
                  <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-6">
                    <div className="max-w-[560px] text-center md:text-left">
                      <p
                        className="text-[11px] uppercase tracking-[0.15em] text-white/65 md:text-sm md:tracking-[0.16em]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        SHAKE
                      </p>

                      <h3
                        className="mt-3 text-[2rem] font-semibold leading-[1.02] text-white md:text-[2rem]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Una experiencia de transformación,
                        <br />
                        confianza y belleza.
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/78 md:mt-4 md:text-base md:leading-7">
                        Un espacio donde tu imagen evoluciona y tu confianza se
                        eleva en cada detalle.
                      </p>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#d6ad5c] px-7 py-4 text-sm font-semibold text-[#1f1a14] shadow-[0_12px_32px_rgba(214,173,92,0.24)] transition duration-300 hover:scale-[1.02] hover:bg-[#dfba72] md:w-auto md:px-8"
                    >
                      Consultar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UBICACION */}
          <section
            id="contacto"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2.25rem] border border-[#2a221b] bg-[#16120e] px-8 py-12 text-white shadow-[0_20px_60px_rgba(24,24,24,0.12)] md:px-14 md:py-16">
                <p
                  className="text-sm uppercase tracking-[0.22em] text-[#d6ad5c]/80"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Ubicación / contacto / redes
                </p>
                <h2
                  className="mt-5 text-4xl font-semibold leading-[0.98] tracking-tight md:text-6xl"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Consultá,
                  <br />
                  reservá,
                  <br />
                  conectá.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  Si querés recibir información sobre micropigmentación,
                  tratamientos faciales, estética avanzada, perforaciones,
                  tatuajes o cualquiera de nuestros servicios, escribinos por
                  WhatsApp y te asesoramos de forma personalizada.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className={whatsappBtn}
                  >
                    WhatsApp
                  </a>

                  <a href="#producto-estrella" className={secondaryBtnDark}>
                    Ver servicios
                  </a>
                </div>
              </div>

              <div className="rounded-[2.25rem] border border-[#e1d7ca] bg-[#fffdf9] p-8 shadow-[0_20px_60px_rgba(32,26,21,0.05)]">
                <p
                  className="text-sm uppercase tracking-[0.18em] text-[#8d7f71]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Casa Shake
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8d7f71]">
                      WhatsApp
                    </p>
                    <p className="mt-2 text-base text-[#2b251d]">
                      +54 9 11 7616-6532
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8d7f71]">
                      Instagram
                    </p>
                    <p className="mt-2 text-base text-[#2b251d]">
                      @casa_shake_
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#8d7f71]">
                      Atención
                    </p>
                    <p className="mt-2 text-base text-[#2b251d]">
                      Turnos y asesoramiento personalizado
                    </p>
                  </div>
                </div>

                <div className="mt-8 h-px w-full bg-[#ece3d7]" />

                <div className="mt-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#8d7f71]">
                        Ubicación
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#5e5348]">
                        Edilfredo Ameghino 785, Belén de Escobar, Buenos Aires.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-[#e7dfd3] bg-[#f8f4ee]">
                    <iframe
                      src={mapsEmbed}
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa Casa Shake"
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Consultar por WhatsApp"
          className={`fixed bottom-5 right-5 z-[100] inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,211,102,0.34)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#1ebe5a] md:bottom-6 md:right-6 ${
            showFloatingWhatsapp
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.42 2.2 11.83c0 1.73.45 3.42 1.31 4.91L2 22l5.4-1.42a9.8 9.8 0 0 0 4.63 1.18h.01c5.41 0 9.83-4.42 9.83-9.83c0-2.63-1.02-5.1-2.82-6.99m-7.02 15.19h-.01a8.17 8.17 0 0 1-4.16-1.13l-.3-.18-3.2.84.86-3.12-.2-.32a8.13 8.13 0 0 1-1.25-4.36c0-4.49 3.66-8.15 8.16-8.15c2.18 0 4.23.85 5.77 2.39a8.1 8.1 0 0 1 2.39 5.76c0 4.5-3.66 8.16-8.16 8.16m4.47-6.1c-.24-.12-1.4-.69-1.62-.77s-.38-.12-.54.12s-.62.77-.76.93s-.27.18-.5.06a6.67 6.67 0 0 1-1.96-1.21a7.38 7.38 0 0 1-1.37-1.71c-.14-.24-.01-.36.11-.48c.11-.11.24-.27.36-.41s.16-.24.24-.4s.04-.3-.02-.42c-.06-.12-.54-1.31-.74-1.79c-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59c.57.25 1.01.39 1.36.5c.57.18 1.08.15 1.49.09c.45-.07 1.4-.57 1.6-1.12c.2-.55.2-1.02.14-1.12c-.06-.09-.22-.15-.46-.27"
            />
          </svg>
          WhatsApp
        </a>
    </div>
  );

}
