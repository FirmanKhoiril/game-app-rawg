import Bg from "../assets/bg.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useGlobalState } from "../context/ContextApi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isSignup, setIsSignup, form, setForm, password, setPassword } = useGlobalState();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    setForm({ ...form, username: "", password: "", email: "", confirmPassword: "" });
    setPassword((prev: boolean) => !prev);
    navigate("/");
  };

  const handleLogin = () => {
    setIsSignup((prev: boolean) => !prev);
  };
  return (
    <section className="min-h-screen relative">
      <LazyLoadImage src={Bg} alt="BackgroundPattern" className="w-full  h-screen" />

      <div className="absolute backdrop-blur-md top-0 w-full h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="min-w-[400px] md:min-w-[500px]  rounded-xl font-poppins min-h-[500px] bg-black/40">
          <div className="flex flex-col flex-wrap mx-10">
            <h1 className="mt-6 tracking-widest text-4xl font-poppins bg-gradient-to-r from-green-500 via-green-300 to-green-400 bg-clip-text text-transparent fonr-extrabold">GREENMASTER</h1>
            <p className="text-[13px] mt-2 text-white/50">
              *Need to know, this form is make fake account, dont worry <br /> about your account at all i just wanna have fun with form :)
            </p>
          </div>

          {!isSignup ? (
            <>
              <div className="flex flex-col mt-10 mx-10 gap-1 mb-2">
                <label>* Username</label>
                <input type="text" required onChange={(e) => setForm({ ...form, username: e.target.value })} value={form.username} className="bg-white/10 outline-none rounded-lg py-2 px-4" />
              </div>
              <div className="flex flex-col m-2 gap-1 mx-10">
                <label>* Email</label>
                <input type="text" value={form.email} required onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white/10 outline-none rounded-lg py-2 px-4" />
              </div>
              <div className="flex flex-col m-2 gap-1 relative mx-10">
                <label>* Password</label>
                <input type={password ? "text" : "password"} required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="bg-white/10 outline-none rounded-lg py-2 px-4 " />
                <button type="button" className="absolute top-[38px] right-3 text-xl  text-white " name="tooglePasswordInvisible" aria-label="tooglePasswordInvisible" onClick={() => setPassword((prev: boolean) => !prev)}>
                  {password ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
              <div className="flex flex-col m-2 gap-1 mx-10">
                <label>* Confirm Password</label>
                <input type={password ? "text" : "password"} required value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} className="bg-white/10 outline-none rounded-lg py-2 px-4" />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col mt-10 mx-10 gap-1 mb-2">
                <label>* Username</label>
                <input type="text" required onChange={(e) => setForm({ ...form, username: e.target.value })} value={form.username} className="bg-white/10 outline-none rounded-lg py-2 px-4" />
              </div>
              <div className="flex flex-col m-2 gap-1 mx-10">
                <label>* Email</label>
                <input required type="text" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white/10 outline-none rounded-lg py-2 px-4" />
              </div>
              <div className="flex flex-col m-2 relative gap-1 mx-10">
                <label>* Password</label>
                <input type={password ? "text" : "password"} required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="bg-white/10 outline-none rounded-lg py-2 px-4 " />
                <button type="button" className="absolute top-[38px] right-3 text-xl  text-white " name="tooglePasswordInvisible" aria-label="tooglePasswordInvisible" onClick={() => setPassword((prev: boolean) => !prev)}>
                  {password ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
            </>
          )}
          <button type="submit" className="mx-10 my-4 py-2 px-4 bg-green-600 rounded-sm hover:bg-green-500">
            {isSignup ? "Login" : "Signup"}
          </button>
          <button type="button" name="buttonSign" aria-label="buttonSign" onClick={handleLogin} className="mx-10 hover:border-white/40 hover:text-white/40 my-4 border-b">
            {isSignup ? "Don't Have an Acoount ?" : "Already have an account?"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
