import { useEffect, useMemo, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  const serviciosSectionRef = useRef(null);

  return (
    <section
  ref={serviciosSectionRef}
  id="servicios"
  className="relative w-full min-h-[100svh] overflow-visible px-4 py-6 sm:px-6 lg:px-8 xl:h-[100svh] xl:overflow-hidden xl:px-20 xl:py-6"
>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf9f6_0%,#f7f4ef_45%,#f6f1eb_100%)]" />
        <div className="absolute left-[6%] top-[12%] h-44 w-44 rounded-full bg-[#eadcf5] blur-3xl opacity-55" />
        <div className="absolute right-[8%] top-[18%] h-44 w-44 rounded-full bg-[#f3dfe8] blur-3xl opacity-45" />
        <div className="absolute left-[18%] bottom-[12%] h-40 w-40 rounded-full bg-[#efe3d8] blur-3xl opacity-45" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#7e7062_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
      </div>

      <div className="mx-auto flex min-h-full max-w-[1720px] flex-col xl:h-full xl:px-14 relative z-10">
        <div className="mb-4 flex shrink-0 flex-col gap-4 md:flex-row md:items-end md:justify-between xl:mb-5">
          <div>
            <p
              className="text-sm uppercase tracking-[0.22em] text-[#938476]"
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
                className="mt-3 whitespace-pre-line text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
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
              className="max-w-xl text-sm leading-6 text-[#5f564d] md:text-base md:leading-7"
            >
              {currentScene.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="relative flex flex-1 flex-col overflow-visible xl:min-h-0 xl:overflow-hidden">
          <AnimatePresence mode="wait">
            {activeScene === 0 ? (
              <motion.div
                key="scene-art"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 xl:min-h-0"
              >
                <div className="grid gap-4 pb-20 xl:h-full xl:min-h-0 xl:grid-cols-[0.88fr_1.55fr_1.05fr] xl:grid-rows-[0.72fr_1fr] xl:pb-0">
                  <motion.article
                    initial={{ opacity: 0, x: -24, y: 18 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -30, y: 8 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="overflow-hidden rounded-[1.9rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_46px_rgba(39,30,22,0.06)] backdrop-blur-xl"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[150%] overflow-hidden">
                        <img
                          src="/remocion.png"
                          alt="Remoción de microtatuajes"
                          className="h-full w-full object-cover object-[center_65%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-[#fffaf6] via-[rgba(255,250,246,0.86)] to-transparent" />
                      </div>

                      <div className="flex h-[35%] mb-4 flex-col justify-end p-5 xl:p-6">
                        <p
                          className="text-[11px] uppercase tracking-[0.2em] text-[#938476]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Servicios de Corrección
                        </p>

                        <h4
                          className="mt-3 whitespace-nowrap text-[1.4rem] font-semibold leading-none tracking-tight text-[#201a15] xl:text-[1.4rem]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Remoción de microtatuajes.
                        </h4>
                      </div>
                    </div>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: 36, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="relative self-start overflow-hidden rounded-[2.2rem] border border-white/30 bg-white/10 shadow-[0_28px_72px_rgba(39,30,22,0.09)] min-h-0 h-[420px] md:h-[520px] xl:row-span-2 xl:h-[62vh] backdrop-blur-md"
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

                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,218,246,0.15),transparent_32%)]" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(22,18,16,0.78)] via-[rgba(22,18,16,0.24)] to-transparent p-5 md:p-6 xl:p-7">
                        <p
                          className="text-[11px] uppercase tracking-[0.2em] text-[#f5ecf6]"
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

                        <p className="mt-3 max-w-md text-sm leading-6 text-white/78 md:text-base">
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
                    className="overflow-hidden rounded-[1.8rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_46px_rgba(39,30,22,0.06)] min-h-0 xl:row-span-2 xl:h-full backdrop-blur-xl"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[80%] overflow-hidden">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/joyeria1.mov" type="video/mp4" />
                        </video>

                        <div className="absolute inset-x-0 bottom-0 h-[5%] bg-gradient-to-t from-[#fffaf6] via-[rgba(255,250,246,0.92)] to-transparent" />
                      </div>

                      <div className="flex mb-[-100px] h-[18%] flex-col justify-end p-5 xl:p-6">
                        <p
                          className="text-[11px] uppercase tracking-[0.18em] text-[#938476]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Servicio destacado
                        </p>

                        <h4
                          className="mt-1 text-[2rem] font-semibold leading-[0.92] tracking-tight text-[#201a15] xl:text-[2.35rem]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          {thirdArt?.title || "Joyería dental"}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-[#5f564d]">
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
                    className="overflow-hidden rounded-[1.8rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_46px_rgba(39,30,22,0.06)] min-h-0 xl:h-full backdrop-blur-xl"
                  >
                    <div className="flex h-full min-h-0 flex-col">
                      <div className="relative h-[80%] overflow-hidden xl:h-[65%]">
                        <img
                          src={secondArt?.image || "/perforaciones.png"}
                          alt={secondArt?.title || "Servicio secundario"}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[12%] bg-gradient-to-t from-[#fffaf6] via-[rgba(255,250,246,1)] to-transparent" />
                      </div>

                      <div className="flex-1 p-4 xl:p-4">
                        <p
                          className="text-[11px] uppercase tracking-[0.18em] text-[#938476]"
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
                className="relative flex-1 xl:min-h-0"
              >
                <div className="grid gap-4 pb-20 xl:h-full xl:min-h-0 xl:grid-cols-[0.86fr_1fr_1fr_0.9fr] xl:grid-rows-[1fr_1fr] xl:pb-0">
                  <motion.article
                    initial={{ opacity: 0, x: -30, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -28, y: 10 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="overflow-hidden rounded-[1.3rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_46px_rgba(39,30,22,0.06)] min-h-0 xl:col-start-1 xl:row-start-1 xl:row-span-2 xl:h-full backdrop-blur-xl"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[80%] overflow-hidden md:h-[75%]">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source src="/salud.mov" type="video/mp4" />
                        </video>

                        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[rgba(255,250,246,1)] via-[rgba(255,250,246,0.9)] to-transparent" />
                      </div>

                      <div className="relative z-10 -mt-6 flex h-[28%] flex-col justify-start p-5 xl:-mt-28 xl:p-6">
                        <div>
                          <p
                            className="text-[10px] uppercase tracking-[0.18em] text-[#938476]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Belleza y salud
                          </p>

                          <h3
                            className="mt-2 text-[2rem] font-semibold leading-[0.95] tracking-tight text-[#201a15] xl:text-[2rem]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Cuidado
                            <br />
                            de la piel.
                          </h3>

                          <p className="mt-2 text-sm leading-5 text-[#5f564d]">
                            Tratamientos orientados a mejorar la calidad de la
                            piel.
                          </p>
                        </div>

                        <div className="mt-3 rounded-[1rem] border border-[#eee4db] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(249,244,239,0.82)_100%)] px-3 py-3 backdrop-blur-md">
                          <p className="text-xs leading-5 text-[#5f564d]">
                            Acné, manchas, rosácea, rejuvenecimiento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: 20, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-[1.3rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_22px_60px_rgba(39,30,22,0.07)] min-h-0 xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:h-[460px] backdrop-blur-xl"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[70%] overflow-hidden md:h-[40%]">
                        <img
                          src="/meso.JPEG"
                          alt="Mesoterapia"
                          className="h-full w-full scale-110 object-cover object-[center_18%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[rgba(255,250,246,1)] to-transparent" />
                      </div>

                      <div className="flex h-[10%] flex-col justify-between p-5 md:p-5 xl:p-5">
                        <div>
                          <p
                            className="text-[11px] uppercase tracking-[0.18em] text-[#938476]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Mesoterapia
                          </p>

                          <h3
                            className="mt-2 text-[2rem] font-semibold leading-[0.95] tracking-tight text-[#201a15]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Definición
                            <br />y volumen.
                          </h3>

                          <p className="mt-2 text-sm leading-5 text-[#5f564d]">
                            Tratamientos orientados a modelar, aportar volumen y
                            realzar rasgos.
                          </p>
                        </div>

                        <div className="mt-3 rounded-[1rem] border border-[#eee4db] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(249,244,239,0.82)_100%)] px-3 py-3 backdrop-blur-md">
                          <p className="text-xs leading-5 text-[#5f564d]">
                            Lipopapada, Aumento de glúteos, Rinomodelación,
                            Volumen de labios, Babyface.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: 28, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -24, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-[1.3rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_22px_60px_rgba(39,30,22,0.07)] min-h-0 xl:col-start-3 xl:col-span-1 xl:row-start-1 xl:h-[460px] backdrop-blur-xl"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[75%] overflow-hidden md:h-[40%]">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full scale-110 object-cover object-[center_58%]"
                        >
                          <source src="/cosmeto.mov" type="video/mp4" />
                        </video>
                        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[rgba(255,250,246,1)] to-transparent" />
                      </div>

                      <div className="flex h-[10%] flex-col justify-between p-4 md:p-5 xl:p-5">
                        <div>
                          <p
                            className="text-[11px] uppercase tracking-[0.18em] text-[#938476]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Cosmeto
                          </p>

                          <h3
                            className="mt-2 text-[2rem] font-semibold leading-[0.95] tracking-tight text-[#201a15]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Cuidado
                            <br />
                            profundo.
                          </h3>

                          <p className="mt-2 text-sm leading-5 text-[#5f564d]">
                            Tratamientos enfocados en renovar, limpiar y mejorar
                            la textura de la piel con un enfoque delicado y
                            profesional.
                          </p>
                        </div>

                        <div className="mt-3 rounded-[1rem] border border-[#eee4db] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(249,244,239,0.82)_100%)] px-3 py-3 backdrop-blur-md">
                          <p className="text-xs leading-5 text-[#5f564d]">
                            Peeling, Limpieza facial, Dermaplaning, Dermapen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>

                  <motion.article
                    initial={{ opacity: 0, x: 26, y: 18 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 26, y: 16 }}
                    transition={{ duration: 0.68, delay: 0.12 }}
                    className="overflow-hidden rounded-[1.3rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_46px_rgba(39,30,22,0.06)] min-h-0 xl:col-start-4 xl:row-start-1 xl:row-span-2 xl:h-full backdrop-blur-xl"
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative h-[75%] overflow-hidden md:h-[60%]">
                        <img
                          src="/estetica.JPG"
                          alt="Estética"
                          className="h-full w-full scale-130 object-cover object-[center_120%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[rgba(255,250,246,1)] via-[rgba(255,250,246,1)] to-transparent" />
                      </div>

                      <div className="relative z-10 -mt-12 flex h-[20%] flex-col justify-between p-5 xl:-mt-20 xl:p-6">
                        <div>
                          <p
                            className="text-[11px] uppercase tracking-[0.18em] text-[#938476]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Estética
                          </p>

                          <h3
                            className="mt-2 text-[2rem] font-semibold leading-[0.95] tracking-tight text-[#201a15] xl:text-[2rem]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                          >
                            Detalles
                            <br />
                            que realzan.
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-[#5e5f4d]">
                            Tratamientos pensados para definir, hidratar y
                            potenciar rasgos con resultados delicados y
                            actuales.
                          </p>
                        </div>

                        <div className="mt-3 rounded-[1rem] border border-[#eee4db] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(249,244,239,0.82)_100%)] px-3 py-3 backdrop-blur-md">
                          <p className="text-xs leading-5 text-[#5f564d]">
                            Laminado y perfilado de cejas, Hydralips y BBlips.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 flex justify-center xl:pointer-events-none xl:absolute xl:inset-x-0 xl:bottom-[0.3rem] xl:z-30 xl:mt-0">
  <div className="flex w-full justify-center">
    <div className="flex items-center gap-2 rounded-full border border-[#ece3d9]/90 bg-white/60 px-2 py-2 backdrop-blur-xl xl:pointer-events-auto sm:gap-3 sm:px-3 sm:py-3">
      {[0, 1].map((scene) => {
        const isActive = activeScene === scene;

        return (
          <button
            key={scene}
            type="button"
            onClick={() => {
              setActiveScene(scene);

              if (window.innerWidth < 1280) {
                requestAnimationFrame(() => {
                  serviciosSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                });
              }
            }}
            aria-label={`Ir a escena ${scene + 1}`}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-[13px] font-medium transition-all duration-300 sm:h-11 sm:w-11 xl:h-12 xl:w-12 xl:text-sm ${
              isActive
                ? "border-[#c8a8bb] bg-[linear-gradient(180deg,#cdb1c0_0%,#b995aa_100%)] text-white shadow-[0_10px_24px_rgba(185,149,170,0.28)]"
                : "border-[#ece3d9] bg-white/70 text-[#8f8173] hover:bg-white"
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
    "inline-flex items-center justify-center gap-3 rounded-full border border-[#1faa52] bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(37,211,102,0.32)] transition duration-300 hover:scale-[1.02] hover:bg-[#20bd5a] whitespace-nowrap";

  const secondaryBtnDark =
    "inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:bg-white/14 whitespace-nowrap";

  const micropigmentacionCategories = [
    {
      title: "Labios",
      subtitle: "Efecto full lips, Aqualips, Solo Contorno, Neutralización",
      image: "/Micropigmentaciondelabios.jpg",
    },
    {
      title: "Cejas",
      subtitle: "Efecto Microblanding, Powder Brows",
      image: "/micropigmentaciondecejas.jpg",
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
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbf9f6_0%,#f7f4ef_40%,#f8f5f1_70%,#f5f1eb_100%)] text-[#201a15]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#eadcf5] blur-3xl" />
        <div className="absolute right-[-8%] top-[22%] h-[380px] w-[380px] rounded-full bg-[#f3dfe8] blur-3xl" />
        <div className="absolute left-[18%] top-[48%] h-[320px] w-[320px] rounded-full bg-[#f0e4d9] blur-3xl" />
        <div className="absolute right-[10%] bottom-[12%] h-[420px] w-[420px] rounded-full bg-[#efe3d8] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#7a6752_0.7px,transparent_0.7px)] [background-size:22px_22px]" />

      <div className="relative z-10">
        <main>

          <section className="relative w-full">
            <div className="relative isolate min-h-screen overflow-hidden bg-[#151210]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 z-0 h-full w-full object-cover"
              >
                <source src="/fondoweb-comp.mov" type="video/mp4" />
              </video>

              <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(12,10,10,0.60)_0%,rgba(12,10,10,0.70)_22%,rgba(12,10,10,0.50)_58%,rgba(12,10,10,0.70)_100%)]" />
              <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_24%_24%,rgba(232,218,246,0.16),transparent_32%),radial-gradient(circle_at_78%_24%,rgba(244,223,233,0.14),transparent_30%)]" />
              <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.05] [background-image:radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[180px] bg-[linear-gradient(180deg,rgba(15,13,11,0)_0%,rgba(15,13,11,0.08)_28%,rgba(15,13,11,0.18)_55%,rgba(15,13,11,0.42)_78%,rgba(15,13,11,0.78)_100%)]" />

              <div className="relative z-20 flex min-h-screen flex-col">
                <div className="relative z-30 w-full border-b border-white/10">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,235,199,0.20)_0%,rgba(245,223,170,0.70)_48%,rgba(243,214,145,0.0)_100%)] backdrop-blur-xl" />
                    <div className="relative mx-auto flex w-full max-w-[1380px] items-center justify-center px-6 py-1 lg:px-6">
                      <p className="text-center text-[8px] uppercase tracking-[0.18em] text-white/82 md:text-[10px]">
                        · Edilfredo Ameghino 785, Belén de Escobar, Zona Norte ·
                      </p>
                    </div>
                  </div>
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
                          className="max-w-[760px] text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.025em] text-[#f1e7ef]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Te ayudamos a{" "}
                          <span className="text-[#f0d660] italic">
                            potenciar
                          </span>
                          <br />
                          y{" "}
                          <span className="text-[#f0d660] italic">
                            cuidar
                          </span>{" "}
                          tu belleza.
                        </h1>

                      <p className="mt-8 max-w-[700px] text-[1.05rem] leading-8 text-white/76 md:text-[1rem]">
                        Realzamos tu belleza y seguridad personal a través de
                        servicios estéticos avanzados, tatuajes y joyería
                        profesional. Te ofrecemos una experiencia completa donde
                        transformás tu imagen y potenciás tu estilo en un solo
                        lugar.
                      </p>
                    </div>

                    <div className="flex w-full max-w-[420px] flex-col gap-4 sm:flex-row lg:justify-end">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className={whatsappBtn}
                        style={{ color: "#ffffff" }}
                      >
                        <span className="inline-block h-[1px] w-6 bg-white/70" />
                        <span style={{ color: "#ffffff" }}>
                          Consultar por WhatsApp
                        </span>
                      </a>

                      <a
                        href="#producto-estrella"
                        className={secondaryBtnDark}
                        style={{ color: "#ffffff" }}
                      >
                        <span className="inline-block h-[1px] w-6 bg-white/70" />
                        <span style={{ color: "#ffffff" }}>
                          Explorar servicios
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mx-auto hidden w-full max-w-[1380px] px-6 pb-8 lg:block lg:px-8">
                  <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-5 text-white/74">
                    <div>
                      <p
                        className="text-[11px] uppercase tracking-[0.22em] text-white/40"
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
                        className="text-[11px] uppercase tracking-[0.22em] text-white/40"
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
                        className="text-[11px] uppercase tracking-[0.22em] text-white/40"
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

          <section
            id="producto-estrella"
            className="relative overflow-visible py-20 pb-32 xl:min-h-[100svh] xl:flex xl:items-center"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 -bottom-32">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf9f6_0%,#f8f5ef_100%)]" />

              {/* glow violeta grande lateral izquierdo extendido */}
              <div className="absolute -left-[12%] bottom-[-14%] h-[520px] w-[520px] rounded-full bg-[#dcc8f3] blur-3xl opacity-72" />

              {/* glow violeta suave superior */}
              <div className="absolute left-[8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[#eee1fb] blur-3xl opacity-55" />

              {/* glow amarillo grande lateral derecho extendido */}
              <div className="absolute -right-[10%] bottom-[-14%] h-[520px] w-[520px] rounded-full bg-[#f3dfb3] blur-3xl opacity-68" />

              {/* glow amarillo suave superior */}
              <div className="absolute right-[12%] top-[16%] h-[260px] w-[260px] rounded-full bg-[#f8ebc7] blur-3xl opacity-40" />

              {/* velo general */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_84%,rgba(220,200,243,0.24),transparent_26%),radial-gradient(circle_at_88%_84%,rgba(243,223,179,0.26),transparent_28%),radial-gradient(circle_at_20%_18%,rgba(238,225,251,0.16),transparent_18%)]" />

              {/* grilla sutil */}
              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#8e7d6d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
              >
                <div className="max-w-2xl">
                  <p
                    className="text-sm uppercase tracking-[0.22em] text-[#938476]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Servicio estrella de Casa Shake
                  </p>

                  <h2
                    className="mt-3 text-[2.7rem] font-semibold leading-[0.96] tracking-tight text-[#201a15] md:text-[3rem]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Micropigmentación -{" "}
                    <span className="text-[#ebb04b] italic">PMU</span>.
                    <br />
                  </h2>
                </div>

                <p className="max-w-lg text-[15px] leading-7 text-[#5f564d]">
                  A continuación te mostramos las diferentes categorías.
                  Consultanos por las técnicas y efectos que trabajamos para
                  cada una.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                }}
                className="mt-12"
              >
                <div className="grid gap-5 xl:grid-cols-[0.9fr_1.25fr_0.9fr] xl:items-center">
  <div className="hidden xl:flex xl:flex-col xl:gap-5">
    {micropigmentacionCategories.slice(1, 3).map((item, localIndex) => {
      const index = localIndex + 1;

      return (
        <motion.article
          key={item.title}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-[1.5rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_16px_40px_rgba(39,30,22,0.05)] backdrop-blur-xl"
        >
          <div className="grid min-h-[230px] grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-center px-5 py-5">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[#9a8a7b]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                PMU · {String(index + 1).padStart(2, "0")}
              </p>

              <h3
                className="mt-2 text-[2rem] font-semibold leading-[0.92] tracking-tight text-[#201a15]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#5f564d]">
                {item.subtitle}
              </p>
            </div>
          </div>
        </motion.article>
      );
    })}
  </div>

  <motion.article
    whileHover={{ y: -6 }}
    transition={{ duration: 0.35 }}
    className="hidden xl:block group relative overflow-hidden rounded-[1.7rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_26px_70px_rgba(39,30,22,0.07)] backdrop-blur-xl"
  >
    <div className="relative h-[560px] overflow-hidden md:h-[680px] xl:h-[720px]">
      <img
        src={micropigmentacionCategories[0]?.image}
        alt={micropigmentacionCategories[0]?.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[rgba(255,250,246,0.98)] via-[rgba(255,250,246,0.72)] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p
          className="text-[11px] uppercase tracking-[0.24em] text-[#938476]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          PMU · 01
        </p>

        <h3
          className="mt-2 text-[2.8rem] font-semibold leading-[0.9] tracking-tight text-[#201a15] md:text-[4rem]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {micropigmentacionCategories[0]?.title || "Labios"}
        </h3>

        <p className="mt-4 max-w-md text-[15px] leading-7 text-[#5f564d]">
          {micropigmentacionCategories[0]?.subtitle ||
            "Efecto full lips, Aqualips, Solo Contorno, Neutralización"}
        </p>
      </div>
    </div>
  </motion.article>

  <div className="hidden xl:flex xl:flex-col xl:gap-5">
    {micropigmentacionCategories.slice(3, 5).map((item, localIndex) => {
      const index = localIndex + 3;

      return (
        <motion.article
          key={item.title}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-[1.5rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_16px_40px_rgba(39,30,22,0.05)] backdrop-blur-xl"
        >
          <div className="grid min-h-[190px] grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-col justify-center px-5 py-5">
              <p
                className="text-[10px] uppercase tracking-[0.22em] text-[#9a8a7b]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                PMU · {String(index + 1).padStart(2, "0")}
              </p>

              <h3
                className="mt-2 text-[1.85rem] font-semibold leading-[0.92] tracking-tight text-[#201a15]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.title}
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#5f564d]">
                {item.subtitle}
              </p>
            </div>
          </div>
        </motion.article>
      );
    })}
  </div>

            <div className="grid gap-4 xl:hidden">
              {micropigmentacionCategories.map((item, index) => (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_16px_40px_rgba(39,30,22,0.05)] backdrop-blur-xl"
                >
                  <div className="grid min-h-[220px] grid-cols-[1fr] md:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative h-[240px] overflow-hidden md:h-full">
            <img
              src={item.image}
              alt={item.title}
              className={`w-full object-cover transition duration-700 group-hover:scale-[1.02] md:h-full md:w-full ${
                item.title === "Cejas" || item.title === "Capilar" || item.title === "Areolas"
                  ? "w-full rotate-90 scale-[1] -translate-y-20 md:rotate-0 md:scale-100 md:translate-y-0"
                  : "h-[240px] md:h-full"
              }`}
            />
          </div>

          <div className="flex flex-col justify-center px-5 py-5">
            <p
              className="text-[10px] uppercase tracking-[0.22em] text-[#9a8a7b]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              PMU · {String(index + 1).padStart(2, "0")}
            </p>

            <h3
              className="mt-2 text-[2rem] font-semibold leading-[0.92] tracking-tight text-[#201a15]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {item.title}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-[#5f564d]">
              {item.subtitle}
            </p>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
</div>
                
              </motion.div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-transparent pt-0 pb-24 text-[#201a15]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-[0.0] [background-image:radial-gradient(#8e7d6d_0.9px,transparent_0.7px)] [background-size:22px_23px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col">
                  <div className="mb-5 inline-flex self-start rounded-full border border-[#e6dbd2] bg-white/65 px-5 py-2 text-sm font-medium text-[#7d6d60] backdrop-blur-xl shadow-[0_10px_26px_rgba(39,30,22,0.05)]">
                    Misión
                  </div>

                  <div className="overflow-hidden rounded-[1.6rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_40px_rgba(39,30,22,0.05)] backdrop-blur-xl">
                    <img
                      src="/mision.png"
                      alt="Misión Casa Shake"
                      className="h-[240px] w-full object-cover"
                    />
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-[#ece3d9] bg-white/60 p-5 shadow-[0_12px_28px_rgba(39,30,22,0.04)] backdrop-blur-xl">
                    <p className="text-sm leading-7 text-[#5f564d]">
                      Ayudar a personas que no se sienten seguras con su imagen
                      a recuperar su autoestima y volver a sentirse cómodas con
                      su reflejo.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5f564d]">
                      A través de servicios estéticos y artísticos
                      personalizados, transformamos inseguridades en confianza,
                      logrando resultados visibles que impactan en cómo se ven y
                      cómo se sienten.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:px-2">
                  <p
                    className="text-sm uppercase tracking-[0.24em] text-[#938476]"
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

                  <div className="mt-6 h-px w-16 bg-[#d5c9d4]" />

                  <p className="mt-6 text-[1.02rem] leading-8 text-[#5f564d]">
                    Casa Shake es un centro de estética y arte que fusiona
                    belleza, estilo y expresión personal en un solo lugar.
                  </p>

                  <p className="mt-5 text-[1.02rem] leading-8 text-[#5f564d]">
                    Somos un espacio donde transformamos tu imagen y potenciamos
                    tu confianza a través de servicios profesionales, innovación
                    y una experiencia única.
                  </p>
                </div>

                <div className="flex flex-col">
                  <div className="mb-5 inline-flex self-start rounded-full border border-[#e6dbd2] bg-white/65 px-5 py-2 text-sm font-medium text-[#7d6d60] backdrop-blur-xl shadow-[0_10px_26px_rgba(39,30,22,0.05)]">
                    Visión
                  </div>

                  <div className="overflow-hidden rounded-[1.6rem] border border-[#ece3d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(255,252,248,0.78)_100%)] shadow-[0_18px_40px_rgba(39,30,22,0.05)] backdrop-blur-xl">
                    <img
                      src="/beauty-detail.jpg"
                      alt="Visión Casa Shake"
                      className="h-[240px] w-full object-cover"
                    />
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-[#ece3d9] bg-white/60 p-5 shadow-[0_12px_28px_rgba(39,30,22,0.04)] backdrop-blur-xl">
                    <p className="text-sm leading-7 text-[#5f564d]">
                      Convertirnos en un referente en belleza y arte, siendo el
                      lugar al que las personas eligen cuando quieren verse y
                      sentirse mejor.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#5f564d]">
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

          <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf9f6_0%,#f7f4ef_100%)] py-24 text-[#201a15]">
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                variants={glowFloatLeft}
                animate="animate"
                className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-[#eadcf5] blur-3xl opacity-45"
              />
              <motion.div
                variants={glowFloatRight}
                animate="animate"
                className="absolute right-[10%] bottom-[18%] h-36 w-36 rounded-full bg-[#f3dfe8] blur-3xl opacity-40"
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
    className="text-xs uppercase tracking-[0.24em] text-[#938476]"
    style={{ fontFamily: "Cormorant Garamond, serif" }}
  >
    Testimonios
  </p>

  <h3
    className="mx-auto mt-1 max-w-2xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#201a15] md:text-2xl"
    style={{ fontFamily: "Cormorant Garamond, serif" }}
  >
    Lo que comparten
    <br />
    después de
  </h3>

  <div className="mt-[-3px] flex justify-center">
    <img
      src="/logo-cs-negro.png"
      alt="Casa Shake"
      className="h-12 w-auto md:h-30"
    />
  </div>
              </motion.div>

              <motion.div variants={softReveal} className="relative mt-5">
                <motion.button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Testimonio anterior"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ece3d9] bg-white/82 text-[#2b251d] shadow-[0_12px_28px_rgba(39,30,22,0.08)] backdrop-blur-xl transition duration-300 hover:bg-white lg:flex"
                >
                  ←
                </motion.button>

                <motion.button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Siguiente testimonio"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#ece3d9] bg-white/82 text-[#2b251d] shadow-[0_12px_28px_rgba(39,30,22,0.08)] backdrop-blur-xl transition duration-300 hover:bg-white lg:flex"
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
                      className="rounded-[2rem] border border-[#ece3d9] bg-white/72 p-3 shadow-[0_18px_40px_rgba(39,30,22,0.06)] backdrop-blur-xl"
                    >
                      <div className="overflow-hidden rounded-[1.4rem] bg-[#faf6f2]">
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
                    <div className="rounded-[1.7rem] border border-[#ece3d9] bg-white/58 p-3 shadow-[0_10px_24px_rgba(39,30,22,0.04)] backdrop-blur-xl">
                      <div className="overflow-hidden rounded-[1.2rem] bg-[#faf6f2]">
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
                        className="rounded-[2rem] border border-[#ece3d9] bg-white/80 p-3 shadow-[0_22px_50px_rgba(39,30,22,0.08)] backdrop-blur-xl"
                      >
                        <div className="overflow-hidden rounded-[1.45rem] bg-[#faf6f2]">
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
                        opacity: [0.14, 0.22, 0.14],
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 4.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-0 -z-10 rounded-[2.3rem] bg-[#eadcf5] blur-2xl"
                    />
                  </div>

                  <motion.div
                    key={`next-${visibleTestimonials.next.image}`}
                    initial={{ opacity: 0, x: 30, scale: 0.88 }}
                    animate={{ opacity: 0.5, x: 0, scale: 0.92 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-[230px] blur-[0.2px]"
                  >
                    <div className="rounded-[1.7rem] border border-[#ece3d9] bg-white/58 p-3 shadow-[0_10px_24px_rgba(39,30,22,0.04)] backdrop-blur-xl">
                      <div className="overflow-hidden rounded-[1.2rem] bg-[#faf6f2]">
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece3d9] bg-white/82 text-[#2b251d] shadow-[0_8px_20px_rgba(39,30,22,0.06)] backdrop-blur-xl transition duration-300 hover:bg-white"
                  >
                    ←
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Siguiente testimonio"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece3d9] bg-white/82 text-[#2b251d] shadow-[0_8px_20px_rgba(39,30,22,0.06)] backdrop-blur-xl transition duration-300 hover:bg-white"
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
                      onClick={() => {
  setActiveScene(scene);

  if (window.innerWidth < 1280) {
    requestAnimationFrame(() => {
      serviciosSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}}
                      whileTap={{ scale: 0.9 }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? "w-6 bg-[#b995aa]"
                          : "w-2 bg-[#d7ccd6]"
                      }`}
                      layout
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section className="relative w-full py-0 md:py-0">
            <div className="relative min-h-[760px] overflow-hidden md:min-h-[720px]">
              <div className="absolute inset-0">
                <img
                  src="/casashake.png"
                  alt="Cabina Casa Shake"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#140f0b]/24" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_22%,rgba(232,218,246,0.14),transparent_34%),radial-gradient(circle_at_75%_26%,rgba(244,223,233,0.12),transparent_30%)]" />
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
                  className="absolute bottom-[190px] left-1/2 z-20 h-[630px] w-auto -translate-x-1/2 object-contain transition-transform duration-200 ease-out drop-shadow-[0_24px_40px_rgba(0,0,0,0.22)] md:bottom-0 md:h-[620px] lg:h-[860px]"
                />

                <div className="absolute bottom-4 left-1/2 z-30 w-[calc(100%-1.5rem)] max-w-[1100px] -translate-x-1/2 rounded-[1.7rem] border border-white/18 bg-white/12 p-4 backdrop-blur-xl md:bottom-8 md:w-[calc(100%-3rem)] md:rounded-[1.9rem] md:p- shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
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
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(251,246,249,0.72)_100%)] px-7 py-4 text-sm font-semibold text-[#ffffff] shadow-[0_18px_42px_rgba(39,30,22,0.12)] backdrop-blur-xl transition duration-300 hover:scale-[1.02] md:w-auto"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contacto" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf9f6_0%,#f8f5ef_100%)]" />

              {/* glow violeta izquierda abajo */}
              <div className="absolute -left-[10%] bottom-[-8%] h-[420px] w-[420px] rounded-full bg-[#dcc8f3] blur-3xl opacity-70" />

              {/* glow violeta suave arriba izquierda */}
              <div className="absolute left-[8%] top-[10%] h-[280px] w-[280px] rounded-full bg-[#eee1fb] blur-3xl opacity-55" />

              {/* glow amarillo derecha abajo */}
              <div className="absolute -right-[8%] bottom-[-6%] h-[420px] w-[420px] rounded-full bg-[#f3dfb3] blur-3xl opacity-65" />

              {/* glow amarillo suave arriba derecha */}
              <div className="absolute right-[12%] top-[16%] h-[260px] w-[260px] rounded-full bg-[#f8ebc7] blur-3xl opacity-40" />

              {/* velo general para fusionar */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(220,200,243,0.22),transparent_24%),radial-gradient(circle_at_88%_88%,rgba(243,223,179,0.24),transparent_26%),radial-gradient(circle_at_20%_18%,rgba(238,225,251,0.16),transparent_18%)]" />

              {/* grilla sutil */}
              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#8e7d6d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
              <div>
                <p
                  className="text-sm uppercase tracking-[0.18em] text-[#938476]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Contacto
                </p>

                <h2
                  className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Reservá tu turno
                  <br />o hacé tu consulta.
                </h2>

                <p className="mt-6 max-w-xl text-[1rem] leading-8 text-[#5f564d]">
                  Estamos para asesorarte y ayudarte a encontrar el tratamiento,
                  servicio o propuesta que mejor se adapte a vos.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className={whatsappBtn}
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>
                      Consultar por WhatsApp
                    </span>
                  </a>

                  <a
                    href="#producto-estrella"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#e1d7cf] bg-white/62 px-7 py-4 text-sm font-medium !text-[#201a15] backdrop-blur-xl shadow-[0_14px_32px_rgba(39,30,22,0.05)] transition duration-300 hover:bg-white whitespace-nowrap"
                    style={{ color: "#201a15" }}
                  >
                    <span style={{ color: "#201a15" }}>Ver servicios</span>
                  </a>
                </div>
              </div>

              <div className="rounded-[2.25rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.74)_0%,rgba(255,250,246,0.68)_100%)] p-8 shadow-[0_20px_60px_rgba(39,30,22,0.05)] backdrop-blur-xl">
                <p
                  className="text-sm uppercase tracking-[0.18em] text-[#938476]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Casa Shake
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#938476]">
                      WhatsApp
                    </p>
                    <p className="mt-2 text-base text-[#2b251d]">
                      +54 9 11 7616-6532
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#938476]">
                      Instagram
                    </p>
                    <p className="mt-2 text-base text-[#2b251d]">
                      @casa_shake_
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#938476]">
                      Atención
                    </p>
                    <p className="mt-2 text-base text-[#2b251d]">
                      Turnos y asesoramiento personalizado
                    </p>
                  </div>
                </div>

                <div className="mt-8 h-px w-full bg-[#ece3d9]" />

                <div className="mt-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#938476]">
                        Ubicación
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#5f564d]">
                        Edilfredo Ameghino 785, Belén de Escobar, Buenos Aires.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/45 bg-[#faf6f2] shadow-[0_12px_32px_rgba(39,30,22,0.05)]">
                    <iframe
                      src={mapsEmbed}
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa Casa Shake"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="relative border-t border-[#ece3d9] bg-white/40 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#6c6056] md:flex-row md:items-center md:justify-between lg:px-8">
              <p>© Casa Shake. Belleza, estética y arte.</p>
              <div className="flex items-center gap-5">
                <a
                  href="#producto-estrella"
                  className="transition hover:text-[#201a15]"
                >
                  Producto estrella
                </a>
                <a
                  href="#servicios"
                  className="transition hover:text-[#201a15]"
                >
                  Servicios
                </a>
                <a href="#contacto" className="transition hover:text-[#201a15]">
                  Contacto
                </a>
              </div>
            </div>
          </footer>
        </main>

        <AnimatePresence>
          {showFloatingWhatsapp && (
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="fixed bottom-5 right-5 z-[80] inline-flex items-center gap-3 rounded-full border border-[#1faa52] bg-[#25D366] px-5 py-3 text-sm font-semibold !text-white shadow-[0_18px_40px_rgba(37,211,102,0.32)] transition hover:bg-[#20bd5a]"
              style={{ color: "#ffffff" }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <span style={{ color: "#ffffff" }}>WhatsApp</span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
