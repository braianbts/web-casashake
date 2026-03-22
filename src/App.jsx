import { useState } from "react";

export default function ShakeLandingPage() {
  const whatsappNumber = "5491176166532";
  const whatsappMessage = encodeURIComponent(
    "Hola Casa Shake, vi la página y quiero consultar por sus servicios."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const primaryBtn =
    "group relative inline-flex items-center justify-center rounded-full bg-[#d6ad5c] px-10 py-4 text-sm font-semibold text-[#1f1a14] shadow-[0_12px_32px_rgba(214,173,92,0.24)] transition duration-300 hover:scale-[1.02] hover:bg-[#dfba72]";

  const whatsappBtn =
    "group relative inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,211,102,0.24)] transition duration-300 hover:scale-[1.02] hover:bg-[#1ebe5a]";

  const primaryGlow =
    "pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,214,133,0.55),transparent_30%),radial-gradient(circle_at_70%_50%,rgba(255,180,120,0.35),transparent_28%)] blur-2xl";

  const secondaryBtnDark =
    "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/16";

  const secondaryBtnLight =
    "inline-flex items-center justify-center rounded-full border border-[#ddd6cb] bg-white px-7 py-3.5 text-sm font-semibold text-[#2b251d] transition duration-300 hover:bg-[#faf7f2]";

  const serviceBtn =
    "mt-8 inline-flex items-center justify-center rounded-full border border-[#ddd6cb] bg-white px-5 py-2.5 text-sm font-semibold text-[#2b251d] transition duration-300 hover:border-[#d6ad5c] hover:bg-[#fcf7ee]";

  const signatureServices = [
    {
      title: "Micropigmentación de cejas",
      subtitle: "Diseño, definición y armonía",
      description:
        "Trabajamos cejas con enfoque estético, precisión y personalización para lograr resultados armónicos, delicados y naturales.",
      image: "/micropigmentaciondecejas.jpeg",
    },
    {
      title: "Micropigmentación de labios",
      subtitle: "Color, forma y sutileza",
      description:
        "Diseñamos labios equilibrados, luminosos y adaptados a cada necesidad, priorizando siempre la naturalidad y el detalle.",
      image: "/Micropigmentaciondelabios.jpg",
    },
    {
      title: "Arte & estética complementaria",
      subtitle: "Tatuajes, perforaciones y detalles",
      description:
        "Complementamos la experiencia con tatuajes, perforaciones, joyería dental y servicios estéticos que expresan identidad con cuidado y precisión.",
      image: "/tatuajes.avif",
    },
  ];

  const micropigmentacionServices = [
    "Micropigmentación de cejas",
    "Microblading",
    "Powder Brows",
    "Micropigmentación de labios",
    "Full Lips",
    "Aqualips",
    "Neutralización de labios",
    "Solo contorno",
    "Efecto esfumado",
    "Micropigmentación reparadora y estética",
    "Areolas",
    "Zona mamaria",
    "Pecas",
    "Micropigmentación capilar",
  ];

  const browLipExclusiveServices = [
    "Laminado",
    "Perfilado",
    "Hidralips",
    "BBlips",
    "Volumen de labios",
    "Hidratación profunda",
  ];

  const facialTreatments = [
    "Limpieza facial",
    "Extracciones",
    "Peeling",
    "Espátula ultrasónica",
    "Dermaplaning",
    "Dermapen",
    "Ultrasonido",
    "Máscara LED",
    "Depilación facial",
  ];

  const facialGoals = [
    "Acné",
    "Arrugas",
    "Envejecimiento cutáneo",
    "Glow up facial",
  ];

  const advancedAndArtServices = [
    "Mesoterapia y estética avanzada",
    "Aumento de glúteos",
    "Lipo papada",
    "Rinomodelación temporal",
    "Relleno de labios",
    "Perforaciones",
    "Tatuajes todos los estilos",
    "Joyería dental",
    "Cristales Swarovski",
    "Oro 18K",
    "Plata 925",
    "Remoción de microtatuajes",
  ];

  const testimonials = [
    {
      name: "Belleza, estética y arte",
      text: "En Casa Shake trabajamos cada servicio con enfoque estético, precisión y personalización, para realzar la belleza natural de cada persona.",
    },
    {
      name: "Servicio estrella",
      text: "La micropigmentación es nuestra especialidad principal. Diseñamos resultados armónicos, delicados y adaptados a cada rostro o necesidad.",
    },
    {
      name: "Propuesta integral",
      text: "Cosmetología, estética avanzada, tatuajes, perforaciones y detalles estéticos complementan una propuesta pensada de forma integral.",
    },
  ];

  const [figureStyle, setFigureStyle] = useState({
    transform: "translate3d(0px, 0px, 0px)",
  });

  const handleFigureMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = ((x / rect.width) - 0.5) * 18;
    const moveY = ((y / rect.height) - 0.5) * 18;

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
        <header className="sticky top-0 z-50 border-b border-[#e7dfd3] bg-[#f7f3ed]/88 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <div>
              <img
                src="/logo-cs-negro.png"
                alt="Casa Shake"
                className="h-13 w-auto"
              />
            </div>

            <nav className="hidden gap-6 text-sm text-[#76695c] md:flex">
              <a href="#signature" className="transition hover:text-[#201a15]">
                Bienvenido
              </a>
              <a href="#servicios" className="transition hover:text-[#201a15]">
                Servicios
              </a>
              <a href="#contacto" className="transition hover:text-[#201a15]">
                Contacto
              </a>
            </nav>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={whatsappBtn}
            >
              WhatsApp
            </a>
          </div>
        </header>

        <main>
          <section className="relative overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/fondoweb2.mov" type="video/mp4" />
            </video>

            <div className="absolute inset-0 z-10 bg-[#15110d]/48" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,173,92,0.12),transparent_42%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
              <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="max-w-4xl">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/12 px-4 py-1 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                    Belleza, estética y arte
                  </span>

<h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-tight text-white md:text-7xl lg:text-[5.2rem]">                    Precisión, detalle
                    <br />
                    y personalización.
                  </h1>

                  <p className="mt-8 max-w-2xl text-lg leading-8 text-white/82">
                    En Casa Shake trabajamos cada servicio con enfoque estético,
                    precisión y personalización, para realzar la belleza natural
                    de cada persona.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className={primaryBtn}
                    >
                      <span className={primaryGlow} />
                      Quiero consultar
                    </a>

                    <a href="#signature" className={secondaryBtnDark}>
                      Explorar servicios
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8d7f71]">
                  Servicio estrella
                </p>

                <h2
  className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight md:text-5xl"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                  Micropigmentación.
                  <br />
                  Nuestra especialidad principal.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#5e5348]">
                  Diseñamos resultados armónicos, delicados y adaptados a cada
                  rostro o necesidad, priorizando siempre la naturalidad, la
                  técnica y el detalle.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className={primaryBtn}
                  >
                    <span className={primaryGlow} />
                    Quiero más información
                  </a>

                  <a href="#servicios" className={secondaryBtnLight}>
                    Ver todos los servicios
                  </a>
                </div>
              </div>

              <div className="relative min-h-[620px]">
                <div className="absolute left-0 top-10 w-[72%] overflow-hidden rounded-[2.25rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_20px_60px_rgba(32,26,21,0.05)]">
                  <img
                    src="/beauty-main.jpg"
                    alt="Resultado estético Casa Shake"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                <div className="absolute right-0 top-0 w-[34%] rounded-[1.75rem] border border-[#e7dfd3] bg-[#f5ede2] p-5 shadow-[0_20px_60px_rgba(32,26,21,0.05)]">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8d7f71]">
                    Micropigmentación
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#201a15]">
                    Belleza natural con detalle.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5e5348]">
                    Cejas, labios y reconstrucción estética trabajados con
                    armonía y precisión.
                  </p>
                </div>

                <div className="absolute right-4 top-[290px] w-[38%] overflow-hidden rounded-[1.75rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_20px_60px_rgba(32,26,21,0.05)]">
                  <img
                    src="/beauty-detail.jpg"
                    alt="Detalle de servicio beauty"
                    className="h-[190px] w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-[18%] w-[54%] rounded-[1.75rem] border border-[#e7dfd3] bg-[#fffdf9]/92 p-5 shadow-[0_20px_40px_rgba(32,26,21,0.05)] backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.16em] text-[#8d7f71]">
                    Casa Shake
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#5e5348]">
                    Belleza, estética y arte trabajados con enfoque profesional,
                    sensibilidad visual y resultados personalizados.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="signature"
            className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p
                  className="text-sm uppercase tracking-[0.2em] text-[#8d7f71]"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Signature services
                </p>
                <h2
  className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight md:text-5xl"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                  Servicios protagonistas.
                  <br />
                  Una experiencia estética integral.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#5e5348]">
                Ordenamos la propuesta para que cada persona descubra primero lo
                más fuerte de Casa Shake: micropigmentación, tratamientos
                faciales y arte estético complementario.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {signatureServices.map((service) => (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-[2rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_20px_60px_rgba(32,26,21,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(32,26,21,0.08)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                  </div>

                  <div className="p-8">
                    <p
                      className="text-xs uppercase tracking-[0.22em] text-[#8d7f71]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {service.subtitle}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#201a15]">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-7 text-[#5e5348]">
                      {service.description}
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className={serviceBtn}
                    >
                      Consultar servicio →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
<section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
  <div className="pointer-events-none absolute left-[8%] top-[8%] h-40 w-40 rounded-full bg-[#f1dfcf] blur-3xl opacity-60" />
  <div className="pointer-events-none absolute right-[10%] top-[16%] h-36 w-36 rounded-full bg-[#efe0d0] blur-3xl opacity-60" />
  <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr]">
    <div className="max-w-lg">
      <p
        className="text-sm uppercase tracking-[0.22em] text-[#8d7f71]"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Servicio estrella
      </p>

      <h2
        className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Micropigmentación
        <br />
        en todas sus variantes.
      </h2>

      <p className="mt-6 text-base leading-8 text-[#5e5348]">
        La micropigmentación es nuestra especialidad principal. Cada técnica se
        adapta a la forma, tono y necesidad de cada persona para lograr
        resultados delicados, armónicos y duraderos.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {["Naturalidad", "Precisión", "Armonía", "Detalle"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#ddd6cb] bg-white/70 px-4 py-2 text-sm font-medium text-[#2b251d] backdrop-blur-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="space-y-10">
      <div className="grid items-center gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2.2rem]">
          <img
            src="/que-es-micropigmentacion.webp"
            alt="Qué es la micropigmentación"
            className="h-[380px] w-full object-cover"
          />
        </div>

        <div className="max-w-md">
          <p
            className="text-sm uppercase tracking-[0.18em] text-[#8d7f71]"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Universo principal
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e5348]">
            Cejas, labios, reconstrucción estética, pecas, areolas y
            micropigmentación capilar trabajadas con una mirada estética,
            precisa y personalizada.
          </p>

          <div className="mt-6 h-px w-20 bg-[#d9cbbb]" />

          <p className="mt-6 text-sm leading-7 text-[#6b5d52]">
            Resultados armónicos, delicados y adaptados a cada rostro, con una
            técnica pensada para realzar sin exagerar.
          </p>
        </div>
      </div>

      <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
        {micropigmentacionServices.map((item, index) => (
          <div
            key={item}
            className={`border-b pb-3 ${
              index < 3 ? "border-[#cfb79d]" : "border-[#e7dfd3]"
            }`}
          >
            <p
              className={`text-sm leading-6 ${
                index < 3
                  ? "font-semibold text-[#201a15]"
                  : "font-medium text-[#4f443a]"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

          <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="group relative overflow-hidden rounded-[2.3rem] border border-[#e7dfd3] bg-[linear-gradient(135deg,#f5ede2_0%,#fbf6ef_100%)] p-8 shadow-[0_24px_70px_rgba(32,26,21,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(32,26,21,0.10)] lg:col-span-5">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#edd4bb] blur-3xl opacity-70 transition duration-500 group-hover:scale-110" />
                <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-[#f7e7d7] blur-3xl opacity-70 transition duration-500 group-hover:scale-125" />

                <div className="relative z-10">
                  <p
                    className="text-sm uppercase tracking-[0.2em] text-[#8d7f71]"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Servicios exclusivos de cejas y labios
                  </p>

                  <h3
  className="mt-4 text-3xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-[2.2rem]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                    Detalles que complementan y potencian el resultado.
                  </h3>

                  <p className="mt-4 max-w-lg text-base leading-7 text-[#5e5348]">
                    Servicios pensados para aportar definición, hidratación,
                    suavidad y acabado final con una estética sutil y cuidada.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Cejas", "Labios", "Complementarios"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#e1d7ca] bg-white/70 px-4 py-2 text-sm font-medium text-[#2b251d] backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {browLipExclusiveServices.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className="group/item flex items-center justify-between rounded-[1.2rem] border border-[#e7dfd3] bg-[#fffdf9] px-4 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:scale-[0.99]"
                      >
                        <span className="font-medium text-[#2b251d]">
                          {item}
                        </span>
                        <span className="text-[#b79a6a] opacity-0 transition duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100">
                          +
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[2.3rem] border border-[#e7dfd3] bg-[#fffdf9] shadow-[0_24px_70px_rgba(32,26,21,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(32,26,21,0.10)] lg:col-span-7">
                <div className="relative h-[260px] overflow-hidden md:h-[300px]">
                  <img
                    src="/labioshidra.png"
                    alt="Tratamiento de labios Casa Shake"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140f0b]/30 via-transparent to-transparent" />

                  <div
                    className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-md"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    Hidratación + belleza
                  </div>
                </div>

                <div className="relative p-8">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#efe4d7] blur-3xl opacity-80 transition duration-500 group-hover:scale-125" />

                  <div className="relative z-10">
                    <p
                      className="text-sm uppercase tracking-[0.2em] text-[#8d7f71]"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      Cosmetología y tratamientos faciales
                    </p>

                    <h3
  className="mt-4 text-3xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-[2.2rem]"
  style={{ fontFamily: "Cormorant Garamond, serif" }}
>
                      Mejorar la piel, prevenir y potenciar la luminosidad.
                    </h3>

                    <p className="mt-4 text-base leading-7 text-[#5e5348]">
                      Tratamientos pensados para acompañar distintas necesidades
                      de la piel con una mirada profesional, estética y
                      personalizada.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {facialTreatments.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className="rounded-[1.15rem] border border-[#e7dfd3] bg-[#f8f2ea] px-4 py-3 text-left text-sm font-medium text-[#2b251d] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm active:scale-[0.99]"
                        >
                          {item}
                        </button>
                      ))}
                    </div>

                    <div className="mt-8 rounded-[1.5rem] border border-[#e7dfd3] bg-[linear-gradient(135deg,#fcf7ee_0%,#f8f1e6_100%)] p-5">
                      <p
                        className="text-sm uppercase tracking-[0.16em] text-[#8d7f71]"
                        style={{ fontFamily: "Cormorant Garamond, serif" }}
                      >
                        Tratamientos orientados a
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        {facialGoals.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#ddd6cb] bg-[#fffdf9] px-4 py-2 text-sm font-medium text-[#2b251d] transition duration-300 hover:-translate-y-0.5 hover:border-[#d6ad5c] hover:bg-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
>                    EXPERIENCIA
                  </p>
                </div>

                <img
                  src="/esposa.png"
                  alt="Profesional Casa Shake"
                  style={figureStyle}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 h-[610px] w-auto object-contain transition-transform duration-200 ease-out drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] md:h-[690px] lg:h-[720px]"
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
                      className={primaryBtn}
                    >
                      <span className={primaryGlow} />
                      Consultar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

         

          <section
  id="servicios"
  className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
>
  <div className="grid gap-12 border-b border-[#eadfd3] pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
    <div className="max-w-xl">
      <p
        className="text-sm uppercase tracking-[0.2em] text-[#8d7f71]"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Servicios
      </p>

      <h2
        className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Todo lo que Casa Shake
        <br />
        puede ofrecer en un solo lugar.
      </h2>

      <p className="mt-6 text-base leading-8 text-[#5e5348]">
        Una propuesta integral donde cada servicio está pensado desde la
        estética, la técnica y la personalización. La idea no es mostrar una
        lista fría, sino ordenar la experiencia para que cada persona entienda
        rápido qué universo conecta mejor con lo que busca.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Micropigmentación",
          "Cejas & labios",
          "Facial",
          "Arte + avanzada",
        ].map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#ddd6cb] bg-white px-4 py-2 text-sm font-medium text-[#2b251d] shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="lg:pl-10">
      <div className="h-full border-l border-[#eadfd3] pl-8">
        <p
          className="text-[2.5rem] leading-[1.04] text-[#7a4e3f] md:text-[3.4rem]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Antes de elegir un
          <span className="text-[#d6ad5c] italic"> servicio</span>,
          <br />
          necesitás sentir
          <span className="text-[#d6ad5c] italic"> confianza</span>.
          <br />
          <br />
          Antes de buscar un
          <span className="text-[#d6ad5c] italic"> cambio</span>,
          <br />
          necesitás una propuesta
          <span className="text-[#d6ad5c] italic"> clara</span>.
          <br />
          <br />Y antes de reservar,
          <br />
          necesitás conectar con la
          <span className="text-[#d6ad5c] italic"> experiencia</span>.
        </p>
      </div>
    </div>
  </div>

  <div className="pt-16">
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#8d7f71]">
        Universos de servicio
      </p>

      <h3
        className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-[#201a15] md:text-5xl"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        Casa Shake está pensada
        <span className="text-[#d6ad5c] italic"> para vos</span> que buscás:
      </h3>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-[2rem] border border-[#eee4d8] bg-white p-7 shadow-[0_18px_45px_rgba(32,26,21,0.04)]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0decf] bg-[#fcf6ef] text-[#d6ad5c]">
          ↗
        </div>
        <p className="text-base leading-8 text-[#334a49]">
          Buscás resultados en
          <span
            className="text-[#d6ad5c] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {" "}
            micropigmentación
          </span>{" "}
          para cejas, labios, areolas, pecas o zona capilar, con una mirada
          natural, armónica y delicada.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#eee4d8] bg-white p-7 shadow-[0_18px_45px_rgba(32,26,21,0.04)]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0decf] bg-[#fcf6ef] text-[#d6ad5c]">
          ↗
        </div>
        <p className="text-base leading-8 text-[#334a49]">
          Querés complementar con
          <span
            className="text-[#d6ad5c] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {" "}
            servicios exclusivos
          </span>{" "}
          de cejas y labios como laminado, perfilado, hidralips, bblips o
          hidratación profunda.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#eee4d8] bg-white p-7 shadow-[0_18px_45px_rgba(32,26,21,0.04)]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0decf] bg-[#fcf6ef] text-[#d6ad5c]">
          ↗
        </div>
        <p className="text-base leading-8 text-[#334a49]">
          Necesitás tratamientos de
          <span
            className="text-[#d6ad5c] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {" "}
            cosmetología facial
          </span>{" "}
          para mejorar textura, luminosidad y calidad de la piel con un enfoque
          profesional y personalizado.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#eee4d8] bg-white p-7 shadow-[0_18px_45px_rgba(32,26,21,0.04)]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0decf] bg-[#fcf6ef] text-[#d6ad5c]">
          ↗
        </div>
        <p className="text-base leading-8 text-[#334a49]">
          Querés trabajar objetivos como
          <span
            className="text-[#d6ad5c] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {" "}
            acné, arrugas, envejecimiento cutáneo
          </span>{" "}
          o simplemente lograr un glow up facial más visible y sostenido.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#eee4d8] bg-white p-7 shadow-[0_18px_45px_rgba(32,26,21,0.04)]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0decf] bg-[#fcf6ef] text-[#d6ad5c]">
          ↗
        </div>
        <p className="text-base leading-8 text-[#334a49]">
          Te interesa una propuesta de
          <span
            className="text-[#d6ad5c] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {" "}
            estética avanzada
          </span>{" "}
          con opciones como lipo papada, rinomodelación, relleno de labios o
          aumento de glúteos.
        </p>
      </div>

      <div className="rounded-[2rem] border border-[#eee4d8] bg-white p-7 shadow-[0_18px_45px_rgba(32,26,21,0.04)]">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0decf] bg-[#fcf6ef] text-[#d6ad5c]">
          ↗
        </div>
        <p className="text-base leading-8 text-[#334a49]">
          Buscás sumar
          <span
            className="text-[#d6ad5c] italic"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {" "}
            arte y detalle
          </span>{" "}
          con perforaciones, tatuajes, joyería dental, cristales Swarovski,
          metales nobles o remoción de microtatuajes.
        </p>
      </div>
    </div>
  </div>
</section>

          <section className="border-y border-[#2a221b] bg-[#16120e]">
            <div className="mx-auto max-w-7xl px-6 py-15 lg:px-8">
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                  >
                    <p
                      className="leading-7 text-white/75"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      “{testimonial.text}”
                    </p>
                    <p
                      className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/45"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="contacto"
            className="mx-auto max-w-5xl px-6 py-24 lg:px-8"
          >
            <div className="rounded-[2.25rem] border border-[#2a221b] bg-[#16120e] px-8 py-12 text-center text-white shadow-[0_20px_60px_rgba(24,24,24,0.12)] md:px-14 md:py-16">
              <p
                className="text-sm uppercase tracking-[0.22em] text-[#d6ad5c]/80"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Contacto
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
              <p className="mx-auto mt-6 mb-2.5 max-w-2xl text-base leading-8 text-white/70">
                Si querés recibir información sobre micropigmentación,
                tratamientos faciales, estética avanzada, perforaciones,
                tatuajes o cualquiera de nuestros servicios, escribinos por
                WhatsApp y te asesoramos de forma personalizada.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={whatsappBtn}
              >
                WhatsApp
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}