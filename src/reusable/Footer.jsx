// footer is same throughout the app
export default function Footer() {
  return (
    <div className="bg-gray-900 opacity-80 text-white text-justify p-4 flex w-full">
      {/* no centro da div um texto justificado com 3 linhas */}
      <div className="w-2/3 m-auto mt-4 advocate ">
        <h1 className="text-center text-2xl advocate ">Cátia Teixeira Gomes</h1>
        <p className=" text-center justify-center text-xl mb-6">Advogada</p>
        <p className=" text-center justify-center">
          <a href="Mailto:catiagomes-53337L@adv.oa.pt">
            catiagomes-53337L@adv.oa.pt
          </a>
        </p>
        <p className="text-center justify-center ">
          <a href="tel:+351912078431">00351 936 551 231</a>
        </p>

        <p className="text-center justify-center mt-6 mb-6 text-sm">
          ©2023 por Cátia Teixeira Gomes.
        </p>
      </div>
    </div>
  );
}
