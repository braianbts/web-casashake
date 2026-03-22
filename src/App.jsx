import { useState } from "react";

export default function ShakeLandingPage() {
  const whatsappNumber = "5491176166532";
  const whatsappMessage = encodeURIComponent(
    "Hola Casa Shake, vi la página y quiero consultar por sus servicios.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const mapsLink = "https://maps.app.goo.gl/fHorpfLVkmpKLbdS7";

const mapsEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.3773330194996!2d-58.79415834420979!3d-34.34892125844504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb61ce480d0883%3A0x6d9e275d3cf88b34!2sCasa%20Shake!5e0!3m2!1ses!2sar!4v1774199930505!5m2!1ses!2sar";

  const whatsappBtn =
    "inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(37,211,102,0.28)] transition duration-300 hover:scale-[1.02] hover:bg-[#1ebe5a]";

  const secondaryBtnDark =
    "inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:bg-white/14";

  const secondaryBtnLight =
    "inline-flex items-center justify-center rounded-full border border-[#ddd6cb] bg-white px-6 py-3.5 text-sm font-semibold text-[#2b251d] transition duration-300 hover:bg-[#faf7f2]";

  const serviceBtn =
    "mt-6 inline-flex items-center justify-center rounded-full border border-[#ddd6cb] bg-white px-5 py-2.5 text-sm font-semibold text-[#2b251d] transition duration-300 hover:border-[#d6ad5c] hover:bg-[#fcf7ee]";

  const micropigmentacionCategories = [
    {
      title: "Labios",
      subtitle: "Full Lips, Aqualips y neutralización",
      image: "/Micropigmentaciondelabios.jpg",
    },
    {
      title: "Cejas",
      subtitle: "Microblading y Powder Brows",
      image: "/micropigmentaciondecejas.jpeg",
    },
    {
      title: "Capilar",
      subtitle: "Micropigmentación capilar estética",
      image: "/capilar.png",
    },
    {
      title: "Pecas",
      subtitle: "Detalle sutil y natural",
      image: "/PECAS.png",
    },
    {
      title: "Areolas",
      subtitle: "Reconstrucción estética personalizada",
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
    title: "Remoción",
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
    "Máscara LED y ultrasonido",
    "Otros tratamientos complementarios",
  ];

  const testimonials = [
    {
      name: "Belleza, estética y arte",
      text: "En Casa Shake trabajamos cada servicio con enfoque estético, precisión y personalización para realzar la belleza natural de cada persona.",
    },
    {
      name: "Servicio estrella",
      text: "La micropigmentación es nuestra especialidad principal. Diseñamos resultados armónicos, delicados y adaptados a cada rostro o necesidad.",
    },
    {
      name: "Propuesta integral",
      text: "Cosmetología, estética avanzada, tatuajes, perforaciones y detalles complementan una propuesta pensada de forma integral.",
    },
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
          {/* HERO */}
          <section className="relative px-2 pb-2 pt-2 md:px-3 md:pb-3 md:pt-3">
            <div className="relative isolate min-h-[96vh] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0d0b] shadow-[0_30px_120px_rgba(0,0,0,0.28)]">
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

              <div className="relative z-20 flex min-h-[96vh] flex-col">
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
                        Precisión, detalle
                        <br />
                        <span className="text-white">y personalización.</span>
                      </h1>

                      <p className="mt-8 max-w-[520px] text-[1.05rem] leading-8 text-white/78 md:text-[1rem]">
                        En Casa Shake trabajamos cada servicio con enfoque
                        estético, técnica y sensibilidad visual para realzar la
                        belleza natural de cada persona.
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
          {/* PRODUCTO ESTRELLA */}
          <section
            id="producto-estrella"
            className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p
                  className="text-sm uppercase tracking-[0.22em] text-[#8d7f71]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Producto estrella
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
                Organizamos la propuesta principal por áreas para que cada
                persona identifique rápido el servicio que está buscando.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-5">
              {micropigmentacionCategories.map((item, index) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[1.8rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_20px_50px_rgba(32,26,21,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(32,26,21,0.08)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-[#2b251d]">
                      {index + 1}
                    </div>
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
          </section>
          
         {/* MISION / QUIENES SOMOS / VISION */}
          <section className="relative overflow-hidden bg-[#f6f2ec] py-24 text-[#201a15]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full bg-[#eadbcc] blur-3xl opacity-70" />
              <div className="absolute right-[10%] top-[16%] h-52 w-52 rounded-full bg-[#e9d8ca] blur-3xl opacity-60" />
              <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#8e7d6d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
                {/* MISION */}
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
                      Convertirnos en un centro de estética de referencia reconocido por
                      la excelencia en resultados, la innovación en tratamientos y la
                      formación profesional dentro del mundo de la estética y el arte
                      corporal.
                    </p>
                  </div>
                </div>

                {/* QUIENES SOMOS */}
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
                    Ciencia, estética
                    <br />
                    y diseño corporal.
                  </h2>

                  <div className="mt-6 h-px w-16 bg-[#d6c4b2]" />

                  <p className="mt-6 text-[1.02rem] leading-8 text-[#5e5348]">
                    En Casa Shake no solo buscamos ofrecer servicios estéticos, sino crear
                    experiencias transformadoras que integren la ciencia dermatológica con
                    el arte del diseño corporal.
                  </p>

                  <p className="mt-5 text-[1.02rem] leading-8 text-[#5e5348]">
                    Nuestro compromiso va más allá de los resultados visuales: aspiramos a
                    que cada paciente que nos visita descubra una versión más confiada y
                    segura de sí misma.
                  </p>

                  
                </div>

                {/* VISION */}
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
                      Brindar tratamientos estéticos avanzados que integren salud,
                      belleza y bienestar, utilizando técnicas modernas y protocolos
                      personalizados para potenciar la confianza y la mejor versión de
                      cada persona.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section
            id="servicios"
            className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
          >
            <div className="grid gap-16 lg:grid-cols-2">
              {/* SERVICIOS DE ARTE */}
              <div>
                <div className="mb-10 inline-flex rounded-full border border-[#d8cab9] bg-[#fffaf3] px-5 py-2 text-sm font-medium text-[#7d6d60]">
                  Servicios de Arte
                </div>

                <div className="space-y-10">
                  {artServices.map((service, index) => (
                    <div
                      key={service.title}
                      className={`grid grid-cols-[180px_1fr] gap-6 ${
                        index !== artServices.length - 1
                          ? "border-b border-[#ece3d7] pb-10"
                          : ""
                      }`}
                    >
                      <div className="overflow-hidden rounded-[1.35rem]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-[180px] w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <p
                          className="text-xs uppercase tracking-[0.18em] text-[#8d7f71]"
                          style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                          Arte corporal
                        </p>

                        <h3 className="mt-2 text-[2.2rem] font-semibold leading-[0.98] tracking-tight text-[#201a15]">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-[440px] text-[1.02rem] leading-7 text-[#5e5348]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SERVICIOS DE BELLEZA Y SALUD */}
              <div>
                <div className="mb-10 inline-flex rounded-full border border-[#d8cab9] bg-[#fffaf3] px-5 py-2 text-sm font-medium text-[#7d6d60]">
                  Servicios de Belleza y Salud
                </div>

                <div className="space-y-14">
                  {/* DERMATO COSMETOLOGIA */}
                  <div className="grid grid-cols-[180px_1fr] gap-6 border-b border-[#ece3d7] pb-12">
                    <div className="overflow-hidden rounded-[1.35rem]">
                      <img
                        src="/dermatocosmetica.png"
                        alt="Dermatocosmetología"
                        className="h-[180px] w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-[2.4rem] font-semibold leading-[0.94] tracking-tight text-[#201a15]">
                        Dermato-
                        <br />
                        cosmetología
                      </h3>

                      <div className="mt-5 space-y-3">
                        {dermatoxServices.map((item, index) => (
                          <div key={item} className="flex gap-3">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6ad5c] text-xs font-semibold text-[#201a15]">
                              {index + 1}
                            </span>
                            <p className="text-[1rem] leading-7 text-[#5e5348]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ESTETICA */}
                  <div className="grid grid-cols-[180px_1fr] gap-6">
                    <div className="overflow-hidden rounded-[1.35rem]">
                      <img
                        src="/estetica.png"
                        alt="Estética"
                        className="h-[180px] w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-[2.4rem] font-semibold leading-[0.94] tracking-tight text-[#201a15]">
                        Estética
                      </h3>

                      <div className="mt-5 space-y-3">
                        {esteticaServices.map((item, index) => (
                          <div key={item} className="flex gap-3">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c97946] text-xs font-semibold text-white">
                              {index + 1}
                            </span>
                            <p className="text-[1rem] leading-7 text-[#5e5348]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>




        {/* TESTIMONIOS */}
        <section className="relative overflow-hidden bg-[#f6f2ec] py-20 text-[#201a15]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[18%] h-32 w-32 rounded-full bg-[#eadbcc] blur-3xl opacity-45" />
            <div className="absolute right-[10%] bottom-[18%] h-36 w-36 rounded-full bg-[#e7d6c8] blur-3xl opacity-40" />
            <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(#8e7d6d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
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
            </div>

            <div className="relative mt-12 overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-[linear-gradient(90deg,#f6f2ec_0%,rgba(246,242,236,0)_100%)]" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-[linear-gradient(270deg,#f6f2ec_0%,rgba(246,242,236,0)_100%)]" />

              <div className="flex w-max animate-[testimonialMarquee_48s_linear_infinite] gap-4">
                {[...testimonialImages, ...testimonialImages].map((testimonial, index) => (
                  <article
                    key={`${testimonial.image}-${index}`}
                    className="shrink-0 rounded-[1.35rem] border border-[#e7dfd3] bg-white/90 p-2 shadow-[0_10px_24px_rgba(32,26,21,0.04)] backdrop-blur-sm"
                  >
                    <div className="flex h-[250px] w-[260px] items-center justify-center overflow-hidden rounded-[1rem] bg-[#f8f4ee]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>




          {/* EXPERIENCIA */}
          <section className="relative mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.3rem] border border-[#d6cabd] bg-[#d8c8b7] shadow-[0_24px_80px_rgba(24,24,24,0.10)]">
              <div className="absolute inset-0">
                <img
                  src="/casashake.png"
                  alt="Cabina Casa Shake"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#140f0b]/34" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />
              </div>

              <div
                className="relative z-10 min-h-[640px] px-5 py-8 md:px-8 md:py-8 lg:px-10"
                onMouseMove={handleFigureMove}
                onMouseLeave={resetFigureMove}
              >
                <div className="mx-auto max-w-[900px] text-center">
                  <p
                    className="text-xs font-medium uppercase tracking-[0.35em] text-white/85"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Casa Shake Studio
                  </p>

                  <p
                    className="mt-25 text-[clamp(4.8rem,10vw,8.2rem)] font-semibold uppercase leading-[0.88] tracking-tight text-white/28"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    EXPERIENCIA
                  </p>
                </div>

                <img
                  src="/esposa.png"
                  alt="Profesional Casa Shake"
                  style={figureStyle}
                  className="absolute bottom-0 left-1/2 z-20 h-[610px] w-auto -translate-x-1/2 object-contain transition-transform duration-200 ease-out drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] md:h-[690px] lg:h-[720px]"
                />

                <div className="absolute bottom-5 left-1/2 z-30 w-[calc(100%-2.5rem)] max-w-[880px] -translate-x-1/2 rounded-[1.7rem] border border-white/15 bg-[#fff8ef]/12 p-4 backdrop-blur-md md:p-5">
                  <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                    <div className="max-w-[470px] text-center md:text-left">
                      <p
                        className="text-sm uppercase tracking-[0.16em] text-white/65"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Casa Shake Experience
                      </p>
                      <h3
                        className="mt-2 text-2xl font-semibold leading-[1.02] text-white md:text-[2rem]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Una experiencia estética real,
                        <br />
                        profesional y memorable.
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/78">
                        Belleza, técnica y atención personalizada en un entorno
                        pensado para que cada servicio se viva con confianza y
                        cuidado.
                      </p>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#d6ad5c] px-8 py-4 text-sm font-semibold text-[#1f1a14] shadow-[0_12px_32px_rgba(214,173,92,0.24)] transition duration-300 hover:scale-[1.02] hover:bg-[#dfba72]"
                    >
                      Consultar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* CONTACTO / UBICACION / REDES */}
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
        Si querés recibir información sobre micropigmentación, tratamientos
        faciales, estética avanzada, perforaciones, tatuajes o cualquiera de
        nuestros servicios, escribinos por WhatsApp y te asesoramos de forma
        personalizada.
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
      <p className="mt-2 text-base text-[#2b251d]">@casa_shake_</p>
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
    </div>
  );
}
