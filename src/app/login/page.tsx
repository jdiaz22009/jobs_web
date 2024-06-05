"use client";
import ImageComponent from "@/components/img/image";
import {
  getAuth,
  providerGithub,
  signInWithPopup,
} from "@/config/firebaseConfig";

interface ILoginProps {
  params?: any;
  searchParams?: {
    as: string;
  };
}

const Login = (props: ILoginProps) => {
  const signGithub = async () => {
    try {
      const auth = getAuth();
      const login = await signInWithPopup(auth, providerGithub);
      console.log(login);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <ImageComponent
            width={500}
            height={500}
            src="https://firebasestorage.googleapis.com/v0/b/porfolio-dev-8dfe9.appspot.com/o/usacajobs%2Flogin.jpg?alt=media&token=e58464c8-396f-40a8-8491-1f5f220ab989"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Ingrese a su cuenta como{" "}
              {props?.searchParams?.as === "candidate"
                ? "Candidato"
                : "Empleado"}
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              onClick={signGithub}
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <span className="ml-4">Log in with Github</span>
              </div>
            </button>

            <p className="mt-8">
              Need an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
