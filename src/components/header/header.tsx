import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl p-4">
          <Link
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              width={50}
              height={50}
              src="https://firebasestorage.googleapis.com/v0/b/porfolio-dev-8dfe9.appspot.com/o/usacajobs%2FUDeal%20(1).png?alt=media&token=ac64242f-dac9-408f-a70f-571402cf0759"
              className="h-8"
              alt="UsacaJobs"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">
              USACA <span className="text-[#167DB7]">JOBS</span>
            </span>
          </Link>
          <div className="flex items-center  space-x-6 rtl:space-x-reverse mt-3 lg:mt-0">
            <Link href="#" className="text-sm  text-[#167DB7] hover:underline">
              Empresas
            </Link>
            <Link href="/login" className="text-sm  text-white  bg-[#167DB7] border hover: border-[#167DB7] hover:bg-white hover:text-[#167DB7] p-3 rounded-lg">
              Candidatos
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-[#167DB7]">
        <div className="max-w-screen-2xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Buscar empleo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Buscar empresa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
