"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Logo from "../Logo";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Container from "./Container";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "../ThemeToggle";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const { mode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    emailInput: "",
    passwordInput: "",
    isSecure: true,
  });

  const loginHandler = async () => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email: inputs.emailInput,
        password: inputs.passwordInput,
        redirect: false,
      });

      if (res?.error) throw new Error(res.error);
      router.replace("/home");
      toast.success("login successful");
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 w-full items-center">
        <Logo />

        {/* <ThemeToggle /> */}

        <div
          className={`font-bold text-2xl md:text-3xl 
        ${mode === "light" ? "text-slate-700" : "text-white"}`}
        >
Se connecter        </div>
      </div>

      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler();
        }}
      >
        <div className="flex flex-col gap-4 w-full">
          <TextInput
            id="email"
            icon={AiFillMail}
            placeholder="Entrez votre e-mail ou votre nom d'utilisateur"
            value={inputs.emailInput}
            onChange={(e) =>
              setInputs({ ...inputs, emailInput: e.target.value })
            }
          />

          <TextInput
            id="password"
            icon={inputs.isSecure ? FaEye : FaEyeSlash}
            placeholder="Tapez votre mot de passe"
            secureEntry={inputs.isSecure}
            iconAction={() =>
              setInputs({ ...inputs, isSecure: !inputs.isSecure })
            }
            value={inputs.passwordInput}
            onChange={(e) =>
              setInputs({ ...inputs, passwordInput: e.target.value })
            }
          />
        </div>

        <Button
          type="submit"
          outline={false}
          small={false}
          label={"Se connecter"}
          loading={loading}
        />
      </form>

      <div className="flex flex-col gap-4 w-full items-center">
        <div
          onClick={() => router.push("/forgot-password")}
          className={`text-sm text-gray-300 text-center 
          font-semibold sm:cursor-pointer hover:text-gray-400 
          active:scale-[.95] transition-all select-none w-fit`}
        >
          Mot de passe oublié?
        </div>

        <div
          className={`font-semibold 
        ${mode === "light" ? "text-gray-500" : "text-white"}`}
        >
        Vous n'avez pas de compte?  
        </div>

        <Button
          outline
          label={"Créer un nouveau compte"}
          onClick={() => {
            router.push("/register");
          }}
        />
      </div>
    </Container>
  );
};
export default Login;
