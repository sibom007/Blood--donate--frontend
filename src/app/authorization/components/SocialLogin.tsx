import { FaGooglePlusG, FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  const googleLogin = () => {};
  const githubLogin = () => {};

  return (
    <div className="">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center space-x-2">
        <button onClick={googleLogin} className="border px-12 py-1 rounded-lg">
          <FaGooglePlusG className="size-8" />
        </button>
        <button onClick={githubLogin} className="border px-12 py-1 rounded-lg">
          <FaGithub className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
