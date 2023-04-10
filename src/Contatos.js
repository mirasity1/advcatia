// make a reach out page with a form that sends an email to me
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./reusable/Footer";
import PilarDaLei from "./images/PilarDaLei.jpg";
import { send } from "emailjs-com";

function Contatos() {
  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "Cátia Gomes",
    message: "",
    reply_to: "",
    phone_to: "",
    Subject: "",
  });

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [Subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set message
    if (name === "") {
      alert("Por favor preencha o seu nome");
      return;
    }
    if (email === "") {
      alert("Por favor preencha o seu email");
      return;
    }
    if (phoneNum === "") {
      alert("Por favor preencha o seu número de telefone");
      return;
    }
    if (Subject === "") {
      alert("Por favor preencha o assunto");
      return;
    }
    if (message === "") {
      alert("Por favor preencha a mensagem");
      return;
    }

    setToSend({
      ...toSend,
      from_name: name,
      reply_to: email,
      message: message,
      phone_to: phoneNum,
      Subject: Subject,
    });
    console.log(toSend);
    // send message
    send(
      "service_hqspb3c",
      "template_fo7v21k",
      toSend,
      "q2ci1cUEXArXgTipD"
    ).then(
      (response) => {
        // modal with success message
        setIsSubmitted(true);
        // disable after 2000ms
        setTimeout(() => {
          setIsSubmitted(false);
        }, 2000);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
    setEmail("");
    setName("");
    setPhoneNum("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <Outlet />

      <div className="flex w-full">
        <div className="w-1/2">
          <img
            src={PilarDaLei}
            alt="Imagem de um Pilar de mármore"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 items-center justify-center">
          <h2 className="text-center text-4xl advocate mt-24 mb-6 font-thin">
            Contatos
          </h2>
          <p className=" text-center justify-center">
            <a href="Mailto:catiagomes-53337L@adv.oa.pt">
              catiagomes-53337L@adv.oa.pt
            </a>
          </p>
          <p className="text-center justify-center ">
            <a href="tel:+351912078431">00351 936 551 231</a>
          </p>
          <div className="rounded-lg bg-gray-200 p-8 opacity-80 lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Nome
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Insira o seu nome"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Insira o seu email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Telefone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Insira o seu número de telefone"
                    type="tel"
                    id="phone"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="subject">
                  Assunto
                </label>
                <input
                  className="w-2/3 mt-6 rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Assunto"
                  type="text"
                  id="subject"
                  value={Subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Menssagem
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Menssagem"
                  rows="8"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Enviar Email
                </button>
              </div>
            </form>
          </div>
          {isSubmitted && (
            // modal to pop up when message is sent
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-green-600"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          className="text-lg leading-6 font-medium text-gray-900"
                          id="modal-headline"
                        >
                          Mensagem enviada com sucesso!
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm leading-5 text-gray-500">
                            Obrigado por entrar em contacto comigo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-black text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      >
                        Fechar
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contatos;
