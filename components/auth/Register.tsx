"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import Logo from "../Logo";
import { useRouter } from "next/navigation";
import Container from "./Container";
import ThemeToggle from "../ThemeToggle";
import useTheme from "../hooks/useTheme";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import validator from "validator";
import AccountInactivityModal from "./AccountInactivityModal";
<<<<<<< HEAD
=======
import { FaPhone } from "react-icons/fa6";

>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7

interface RegisterProps {
  refUsername?: string | string[];
}

const Register = (props: RegisterProps) => {
  const { refUsername } = props;
  const router = useRouter();
  const { mode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    username: "",
<<<<<<< HEAD
=======
    phone: "",
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
    refUsername: refUsername?.toString().toLowerCase() || "",
    isSecure: true,
  });

  const registerHandler = async () => {
    const data = {
      fullname: inputs.fullName,
      email: inputs.email,
      username: inputs.username,
      password: inputs.password,
<<<<<<< HEAD
=======
      phone: inputs.phone,
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
      refUsername:
        inputs.refUsername.trim() === "" ? "NO REF" : inputs.refUsername,
    };

    const nameArr = data.fullname.trim().split(" ");
    if (nameArr.length < 2)
      return toast.error("First Name and Last Name Is Needed", {
        duration: 10000,
      });

    const checkNameLength = nameArr.map((item) => item.length < 2);
    if (checkNameLength.includes(true))
      return toast.error(
        "Your First name and Last name should have atleast 2 characters each",
        { duration: 10000 }
      );

    const isEmail = validator.isEmail(data.email.trim());
    if (!isEmail) return toast.error("This is Not a valid email");

    const strongPassword = validator.isStrongPassword(data.password);
    if (!strongPassword)
      return toast.error(
        "Use a stronger password. your password should have Minimum of 8 chararacters, Atleast one uppercase character, Atleast one Number and Atleast one Symbol(@ - . ; :)+(_)",
        { duration: 15000 }
      );

    if (data.username.trim().length < 4) {
      return toast.error("Your username should have atleast 4 characters");
    }

    if (data.username.trim().split(" ").length > 1)
      return toast.error(
        "Invalid username: Username should be one word e.g woodman NOT wood man",
        { duration: 10000 }
      );

    try {
      setLoading(true);
      const res = await axios.post("/api/auth/register", data);
      if (res.data.error) throw new Error(res.data.error);

      const res1 = await signIn("credentials", {
        email: inputs.email,
        password: inputs.password,
        redirect: false,
      });
      if (res1?.error) throw new Error(res1?.error);
      router.replace("/home");
      toast.success("login successful");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <div className="flex flex-col gap-2.5 w-full items-center">
          <Logo />
          <ThemeToggle />
          <div
            className={`font-bold text-2xl md:text-3xl 
        ${mode === "light" ? "text-slate-700" : "text-white"}`}
          >
<<<<<<< HEAD
           Créer un nouveau compte
=======
            Create New Account
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full">
          <TextInput
            id="name"
            icon={IoMdPerson}
<<<<<<< HEAD
            placeholder="Entrez le nom complet, par exemple John Doe"
=======
            placeholder="Enter FullName e.g John Doe"
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />

          <TextInput
            id="email"
            icon={AiFillMail}
<<<<<<< HEAD
            placeholder="Entrer votre Email"
=======
            placeholder="Enter Your Email"
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          <TextInput
            id="username"
<<<<<<< HEAD
            icon={FaUserAlt}
            placeholder="Entrez votre nom d'utilisateur"
=======
            icon={FaPhone }
            placeholder="Enter Your number phone "
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />

          <TextInput
            id="password"
            icon={inputs.isSecure ? FaEye : FaEyeSlash}
<<<<<<< HEAD
            placeholder="Tapez votre mot de passe"
=======
            placeholder="Enter Your Password"
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            secureEntry={inputs.isSecure}
            iconAction={() =>
              setInputs({ ...inputs, isSecure: !inputs.isSecure })
            }
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          <TextInput
            id="refUsername"
            icon={FaUserAlt}
<<<<<<< HEAD
            placeholder="Entrez le nom d'utilisateur de référence (facultatif)"
=======
            placeholder="Enter Referral Username (optional)"
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            value={inputs.refUsername}
            onChange={(e) =>
              setInputs({ ...inputs, refUsername: e.target.value })
            }
          />
        </div>

        <Button
          outline={false}
          small={false}
<<<<<<< HEAD
          label={"S'inscrire"}
=======
          label={"Sign Up"}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          onClick={() => setModalOpen(true)}
          loading={loading}
        />

        <div className="flex flex-col gap-2.5 w-full items-center">
          <div
            className={`font-semibold 
        ${mode === "light" ? "text-gray-500" : "text-white"}`}
          >
<<<<<<< HEAD
           Vous avez déjà un compte?
=======
            Already have an account?
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
          </div>

          <Button
            outline
<<<<<<< HEAD
            label={"Connectez-vous à la place"}
=======
            label={"Login Instead"}
>>>>>>> 824ac38aadaa04ca264531caf2f95481ca85f5b7
            onClick={() => {
              router.push("/login");
            }}
          />
        </div>
      </Container>

      <AccountInactivityModal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        signUp={registerHandler}
        loading={loading}
      />
    </>
  );
};
export default Register;
